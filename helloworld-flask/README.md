# Hello, World Flask API Backaend

The python flask backend application.

### Run the application

1. Create virtual environment
```
python3 -m venv helloworld-venv
```

2. Activate the virtual environment
```
source helloworld-venv/bin/activate
```

3. Change directory to the root folder of the helloworld-flask project 
```
cd path/to/helloworld-flask
```

4. Install requirements
```
pip install -r requirements.txt
```

5. Run the application
```
python run.py
```

### Run the application from a Docker container

1. Change diirectory to the project root folder, and build the image
```
docker build -t <image_tag_name> .
```

2. Run the image

```
docker run -d -p 5000:5000 --name helloworld-flask-container <image_tag_name>
```

3. The API base url domain name - localhost:5000


### API Endpoints

Base URL :- http://{_domain_name_}/api/v1

1. Get all language
Returns all languages stored in the database
```
GET: http://{_domain_name_}/api/v1/languages
```

2. Post a new language
Saves a new language to the database
```
POST: http://{_domain_name_}/api/v1/language

BODY: 
{
    title: "",
    code_html: "",
    code_text: ""
}
```

### Resources
- https://flask.palletsprojects.com/en/1.1.x/
- https://api.mongodb.com/python/current/tutorial.html 