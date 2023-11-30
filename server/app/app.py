from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from database import db
from models.uniadmin import UniversityAdmin
from models.uniReview import UniversityReview
from models.professor import Professor
from models.sysadmin import SystemAdmin
from models.review import Review
from models.student import Student
from controllers.analytics import Analytics
from controllers.authcontroller import AuthController
from controllers.professorcontroller import ProfessorController
from controllers.studentcontroller import StudentController
from controllers.sysadmincontroller import SysAdminController
from controllers.uniadmincontroller import UniversityAdminController

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://root:root@127.0.0.1:5432/prof_rating'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create tables before running the app
    app.run(debug=True)
