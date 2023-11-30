from flask import Blueprint, request, render_template, redirect, url_for, flash
from controllers.authcontroller import AuthController
import app

auth_blueprint = Blueprint('auth', __name__, url_prefix='/auth')
auth_controller = AuthController(app)

@auth_blueprint.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user_type = request.form.get('user_type')
        email = request.form.get('email')
        password = request.form.get('password')

        if auth_controller.login(user_type, email, password):
            flash('Login successful!', 'success')
            return redirect(url_for('home'))  # Replace 'home' with your home route
        else:
            flash('Login failed. Please check your credentials and try again.', 'danger')

    return render_template('login.html')  # Replace 'login.html' with your login template

@auth_blueprint.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        user_type = request.form.get('user_type')
        username = request.form.get('username')
        password = request.form.get('password')
        # Add other registration form fields as needed

        if auth_controller.register(user_type, username, password, **request.form):
            flash('Registration successful! You can now log in.', 'success')
            return redirect(url_for('auth.login'))
        else:
            flash('Registration failed. Please try again.', 'danger')

    return render_template('register.html')  # Replace 'register.html' with your register template

@auth_blueprint.route('/logout')
def logout():
    auth_controller.logout()
    flash('Logout successful!', 'success')
    return redirect(url_for('home'))  # Replace 'home' with your home route
