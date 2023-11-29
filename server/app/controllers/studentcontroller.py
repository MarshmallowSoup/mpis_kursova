from app import db
from models import Review, Student, Professor


class StudentController:

    def create_student(self, first_name, last_name, email, password):
        try:
            # Validate the email
            self.validate_email(email)

            # Create a new student object
            new_student = Student(first_name=first_name, last_name=last_name, email=email, password=password)

            # Add the new student to the database session
            db.session.add(new_student)

            # Commit the changes to the database
            db.session.commit()

            # Return the created student object
            return new_student
        except ValueError as e:
            # Handle validation error
            return str(e)


    def get_student_reviews(self, student_id):
        # Retrieve reviews submitted by the student
        reviews = Review.query.filter_by(student_id=student_id).all()
        return reviews

    def edit_student_profile(self, student_id, new_data):
        # Update the student's profile information
        student = Student.query.get(student_id)
        if student:
            # Update fields based on new_data
            for key, value in new_data.items():
                setattr(student, key, value)
            db.session.commit()
            return student
        else:
            return None

    def change_password(self, student_id, new_password):
        # Change the student's password
        student = Student.query.get(student_id)
        if student:
            student.set_password(new_password)
            db.session.commit()
            return True
        else:
            return False

    def submit_review(self, student_id, professor_id, rating, comment, anonymous):
        # Submit a review for a professor
        new_review = Review(student_id=student_id, professor_id=professor_id, rating=rating, comment=comment, anonymous=anonymous)
        db.session.add(new_review)
        db.session.commit()
        return new_review

    def get_professor_details(self, professor_id):
        # Retrieve details about a specific professor
        professor = Professor.query.get(professor_id)
        return professor
    
    def validate_login_credentials(self, email, password):
        # Validate login credentials and return the student if valid
        student = Student.query.filter_by(email=email, password=password).first()
        return student
