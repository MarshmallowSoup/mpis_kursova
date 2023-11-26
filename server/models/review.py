from app import db

class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Float, nullable=False)
    comment = db.Column(db.Text)
    anonymous = db.Column(db.Boolean, default=False)
    professor_id = db.Column(db.Integer, db.ForeignKey('professor.id'), nullable=False)

    def __repr__(self):
        return f"Review('{self.rating}', '{self.comment[:20]}', '{self.anonymous}')"
