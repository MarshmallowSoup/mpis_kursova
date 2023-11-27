from app import db
from app.models import Professor, Review
from sqlalchemy import func

class ProfessorController:
    def get_professor_by_id(self, professor_id):
        # Retrieve a professor by ID
        professor = Professor.query.get(professor_id)
        return professor

    def get_professor_reviews(self, professor_id):
        # Retrieve reviews for a professor
        reviews = Review.query.filter_by(professor_id=professor_id).all()
        return reviews

    def create_professor(self, name, email, subject, university):
        # Create a new professor
        new_professor = Professor(name=name, email=email, subject=subject, university=university)

        # Add the new professor to the database session
        db.session.add(new_professor)

        # Commit the changes to the database
        db.session.commit()

        # Return the created professor object
        return new_professor

    def update_professor_info(self, professor_id, new_info):
        # Update professor information
        professor = Professor.query.get(professor_id)
        if professor:
            for key, value in new_info.items():
                setattr(professor, key, value)
            db.session.commit()
            return professor
        else:
            return None

    def validate_login_credentials(self, email, password):
        # Validate login credentials and return the professor if valid
        professor = Professor.query.filter_by(email=email, password=password).first()
        return professor