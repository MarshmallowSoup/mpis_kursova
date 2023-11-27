from app import db

class UniversityReview(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    professor_rating = db.Column(db.Float, nullable=False)
    course_rating = db.Column(db.Float, nullable=False)
    professor_id = db.Column(db.Integer, db.ForeignKey('professor.id'), nullable=False)

    def __repr__(self):
        return f"UniversityReview(professor_rating={self.professor_rating}, course_rating={self.course_rating})"