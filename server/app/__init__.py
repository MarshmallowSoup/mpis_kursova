from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://root:root@127.0.0.1:5432/prof_rating'  # SQLite is used in this example
db = SQLAlchemy(app)
#from app import routes  