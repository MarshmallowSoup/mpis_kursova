from flask import render_template, redirect, url_for, request
from flask_login import current_user
from controllers import AuthController
import app
from controllers.authcontroller import login_manager

auth_controller = AuthController(app)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user_type = request.form['user_type']
        email = request.form['email']
        password = request.form['password']

        if auth_controller.login(user_type, email, password):
            return redirect(url_for('dashboard'))

    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        user_type = request.form['user_type']
        username = request.form['username']
        password = request.form['password']
        # Add other form fields as needed

        auth_controller.register(user_type, username, password)
        return redirect(url_for('login'))

    return render_template('register.html')

@app.route('/dashboard')
@login_manager.login_required
def dashboard():
    # Use current_user from Flask-Login to access the authenticated user
    return render_template('dashboard.html', user=current_user)

@app.route('/logout')
def logout():
    auth_controller.logout()
    return redirect(url_for('login'))