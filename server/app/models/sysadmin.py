from database import db

class SystemAdmin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)

    def __repr__(self):
        return f"SystemAdmin('{self.username}', '{self.email}')"

    def get_id(self):
        return str(self.id)