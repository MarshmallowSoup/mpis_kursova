from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from database import db
from models import UniversityAdmin, UniversityReview ,Professor, SystemAdmin, Review, Student
from controllers import Analytics, AuthController, ProfessorController, StudentController, SysAdminController, UniversityAdminController

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://root:root@127.0.0.1:5432/prof_rating'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create tables before running the app
    app.run(debug=True)
