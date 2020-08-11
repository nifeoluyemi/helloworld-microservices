from app import db

def get_all():
    try:
        languages = []
        language_collection = db.languages
        language_cursor = language_collection.find()
        for document in language_cursor:
            language = {}
            language["id"] = str(document["_id"])
            language["title"] = document["title"]
            language["code_html"] = document["code_html"]
            language["code_text"] = document["code_text"]
            languages.append(language)
        return languages
    except:
        raise Exception("Failed to retrieve languages from database")

def save(body):
    try:
        language = {}
        language['title'] = body['title']
        language['code_html'] = body['code_html']
        language['code_text'] = body['code_text']

        language_collection = db.languages
        language_collection.insert_one(language)
    except:
        raise Exception("Failed to insert language into database")