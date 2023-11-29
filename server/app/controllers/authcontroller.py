from flask_login import LoginManager, login_user, logout_user, current_user
from controllers import StudentController, ProfessorController, UniversityAdminController, SysAdminController
from models import Student, Professor, UniversityAdmin, SystemAdmin
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

    def login(self, user_type, email, password):
        # Login user based on user type
        user = None

        if user_type == 'student':
            user = StudentController.validate_login_credentials(email, password)
        elif user_type == 'professor':
            user = ProfessorController.validate_login_credentials(email, password)
        elif user_type == 'university_admin':
            user = UniversityAdminController.validate_login_credentials(email, password)
        elif user_type == 'system_admin':
            user = SysAdminController.validate_login_credentials(email, password)

        if user and user.password == password:
            login_user(user)
            return True
        else:
            return False


    def register(self, user_type, username, password, **kwargs):
        # Register user based on user type

        if user_type == 'student':
            StudentController.create_student(username, password, **kwargs)
        elif user_type == 'professor':
            ProfessorController.create_professor(username, password, **kwargs)
        elif user_type == 'university_admin':
            UniversityAdminController.create_university_admin(username, password, **kwargs)
        elif user_type == 'system_admin':
            SysAdminController.create_sysadmin(username, password, **kwargs)

        return True
    

    def logout(self):
        # Logout the current user
        logout_user()

    def get_current_user(self):
        # Get the current authenticated user
        return current_user

    def protect_route(self, route_function):
        # Decorator to protect routes with login required
        return self.login_manager.login_required(route_function)
