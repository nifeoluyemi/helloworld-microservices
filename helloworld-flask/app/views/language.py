from flask import Blueprint, jsonify, request, redirect
from ..services import language_service

language = Blueprint('language', __name__)

@language.route('/api/v1/language', methods=['POST'])
def create_language():
    request_body = request.get_json()
    language_service.save(request_body)
    return request_body, 200

@language.route('/api/v1/languages', methods=['GET'])
def get_all_languages():
    response = language_service.get_all()
    return jsonify(response), 200

@language.route('/api/v1/live', methods=['GET'])
def test_api():
    response = {}
    response["status"] = "ok"
    return jsonify(response), 200