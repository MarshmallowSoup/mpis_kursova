from app import db

class UniversityAdmin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    university = db.Column(db.String(100), nullable=False)
    
    reviews = db.relationship('Review', backref='uniadmin', lazy=True)

    def __repr__(self):
        return f"UniversityAdmin('{self.username}', '{self.email}', '{self.university}')"
