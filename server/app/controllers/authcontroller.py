from flask_login import LoginManager, login_user, logout_user, current_user
from app.models import Student, Professor, UniversityAdmin, SystemAdmin

class AuthController:
    def __init__(self, app):
        self.login_manager = LoginManager()
        self.login_manager.init_app(app)

    def load_user(self, user_id):
        # Load a user from the database based on user ID
        user = Student.query.get(int(user_id))
        if not user:
            user = Professor.query.get(int(user_id))
        if not user:
            user = UniversityAdmin.query.get(int(user_id))
        if not user:
            user = SystemAdmin.query.get(int(user_id))
        return user

    def login(self, user_type, username, password):
        # Login user based on user type
        user = None

        if user_type == 'student':
            user = Student.query.filter_by(username=username).first()
        elif user_type == 'professor':
            user = Professor.query.filter_by(username=username).first()
        elif user_type == 'university_admin':
            user = UniversityAdmin.query.filter_by(username=username).first()
        elif user_type == 'system_admin':
            user = SystemAdmin.query.filter_by(username=username).first()

        if user and user.password == password:
            login_user(user)
            return True
        else:
            return False

    def logout(self):
        # Logout the current user
        logout_user()

    def get_current_user(self):
        # Get the current authenticated user
        return current_user

    def protect_route(self, route_function):
        # Decorator to protect routes with login required
        return self.login_manager.login_required(route_function)
