from database import db

class UniversityReview(db.Model):
    __tablename__ = 'university_review'

    id = db.Column(db.Integer, primary_key=True)
    professor_rating = db.Column(db.Float, nullable=False)
    course_rating = db.Column(db.Float, nullable=False)
    professor_id = db.Column(db.Integer, db.ForeignKey('professor.id'), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('uniadmin.id'), nullable=False)

    def __repr__(self):
        return f"UniversityReview(professor_rating={self.professor_rating}, course_rating={self.course_rating})"
