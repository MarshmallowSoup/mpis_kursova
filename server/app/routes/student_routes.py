from flask import Blueprint, jsonify, request
from controllers.studentcontroller import StudentController
from models.student import Student

student_blueprint = Blueprint('student', __name__)
student_controller = StudentController()


# Route to create a new student
@app.route('/students', methods=['POST'])
def create_student():
    data = request.json
    result = student_controller.create_student(
        data['first_name'],
        data['last_name'],
        data['email'],
        data['password']
    )
    if isinstance(result, Student):
        return jsonify({'message': 'Student created successfully', 'student_id': result.id}), 201
    else:
        return jsonify({'error': result}), 400

# Route to get student reviews
@app.route('/students/<int:student_id>/reviews', methods=['GET'])
def get_student_reviews(student_id):
    reviews = student_controller.get_student_reviews(student_id)
    return jsonify([review.serialize() for review in reviews])

# Route to edit student profile
@app.route('/students/<int:student_id>', methods=['PUT'])
def edit_student_profile(student_id):
    data = request.json
    result = student_controller.edit_student_profile(student_id, data)
    if result:
        return jsonify({'message': 'Student profile updated successfully', 'student_id': result.id})
    else:
        return jsonify({'error': 'Student not found'}), 404

# Route to change student password
@app.route('/students/<int:student_id>/change_password', methods=['PUT'])
def change_password(student_id):
    data = request.json
    result = student_controller.change_password(student_id, data['new_password'])
    if result:
        return jsonify({'message': 'Password changed successfully'})
    else:
        return jsonify({'error': 'Student not found'}), 404

# Route to submit a review
@app.route('/students/<int:student_id>/submit_review', methods=['POST'])
def submit_review(student_id):
    data = request.json
    result = student_controller.submit_review(
        student_id,
        data['professor_id'],
        data['rating'],
        data['comment'],
        data['anonymous']
    )
    return jsonify({'message': 'Review submitted successfully', 'review_id': result.id}), 201

# Route to get professor details
@app.route('/professors/<int:professor_id>', methods=['GET'])
def get_professor_details(professor_id):
    professor = student_controller.get_professor_details(professor_id)
    if professor:
        return jsonify(professor.serialize())
    else:
        return jsonify({'error': 'Professor not found'}), 404

# Route to validate login credentials
@app.route('/login', methods=['POST'])
def validate_login_credentials():
    data = request.json
    result = student_controller.validate_login_credentials(data['email'], data['password'])
    if result:
        return jsonify(result.serialize())
    else:
        return jsonify({'error': 'Invalid credentials'}), 401

# Route to get a student by ID
@app.route('/students/<int:student_id>', methods=['GET'])
def get_student_by_id(student_id):
    student = student_controller.get_student_by_id(student_id)
    if student:
        return jsonify(student.serialize())
    else:
        return jsonify({'error': 'Student not found'}), 404

# Route to list all students
@app.route('/students', methods=['GET'])
def list_all_students():
    students = student_controller.list_all_students()
    return jsonify([student.serialize() for student in students])

if __name__ == '__main__':
    app.run(debug=True)
