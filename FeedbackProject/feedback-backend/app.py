from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime


app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb+srv://Sahana:dbsahana2003@cluster0.ecwyvd5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = client["feedback_db"]
collection = db["feedbacks"]

@app.route('/feedback', methods=['POST'])
def add_feedback():
    data = request.json
    feedback = {
        "name": data.get("name"),
        "email": data.get("email"),
        "message": data.get("message"),
        "timestamp": datetime.utcnow()
    }
    collection.insert_one(feedback)
    return jsonify({"message": "Feedback submitted successfully"}), 201

@app.route('/', methods=['GET'])
def get_feedback():
    feedbacks = []
    for fb in collection.find():
        feedbacks.append({
            "_id": str(fb.get("_id")),
            "name": fb.get("name"),
            "email": fb.get("email"),
            "message": fb.get("message"),
            "timestamp": fb.get("timestamp").isoformat() if fb.get("timestamp") else ""
        })
    return jsonify(feedbacks)


if __name__ == '__main__':
    app.run(debug=True)
