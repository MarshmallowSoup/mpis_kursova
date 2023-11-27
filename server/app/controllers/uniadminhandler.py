from app import db
from app.models.uniadmin import UniversityAdmin

class UniversityAdminController:

    def create_university_admin(self, first_name, last_name, username, email, password, university):
        # Create a new university admin
        new_admin = UniversityAdmin(first_name=first_name, last_name=last_name, username=username, email=email, password=password, university=university)

        # Add the new admin to the database session
        db.session.add(new_admin)

        # Commit the changes to the database
        db.session.commit()

        # Return the created admin object
        return new_admin

    def get_admin_by_username(self, username):
        # Retrieve an admin by username
        admin = UniversityAdmin.query.filter_by(username=username).first()
        return admin

    def validate_login_credentials(self, username, password):
        # Validate login credentials and return the admin if valid
        admin = UniversityAdmin.query.filter_by(username=username, password=password).first()
        return admin
