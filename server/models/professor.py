from app import db

class Professor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    subject = db.Column(db.String(50), nullable=False)
    university = db.Column(db.String(100), nullable=False)
    rating = db.Column(db.Float, default=0.0)
    
    # Relationships
    reviews = db.relationship('Review', backref='professor', lazy=True)

    def __repr__(self):
        return f"Professor('{self.name}', '{self.subject}', '{self.university}')"
