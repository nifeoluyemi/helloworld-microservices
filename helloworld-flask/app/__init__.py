import os
from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)

CORS(app)

# database setup
env_mongo_connection_string = os.environ.get('MONGO_DB_CONN_STR')
mongo_connection_string = "mongodb://127.0.0.1:27017" if env_mongo_connection_string is None else env_mongo_connection_string
client = MongoClient(mongo_connection_string)
db = client.helloworld_mongodb

from .views import *
app.register_blueprint(language)