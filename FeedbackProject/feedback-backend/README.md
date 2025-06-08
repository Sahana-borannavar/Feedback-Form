
# 🧠 Feedback Submission Backend (Flask + MongoDB)

This is the backend server for the Feedback Submission Web App. It provides RESTful API endpoints to submit, retrieve, and delete feedback using **Flask** and **MongoDB Atlas**.

---

## 📦 Tech Stack

- **Framework**: Flask
- **Database**: MongoDB Atlas
- **Libraries**: Flask-CORS, PyMongo

---

## 📁 Project Structure

```
/backend
├── app.py
└── requirements.txt
```

---

## 🚀 Features

- Submit new feedback
- Fetch all feedback
- Delete individual feedback by ID
- CORS enabled for frontend communication

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/feedback-app-backend.git
cd feedback-app-backend
```

### 2. Create a Virtual Environment

```bash
python -m venv venv
venv\Scripts\activate  # On Windows
# OR
source venv/bin/activate  # On macOS/Linux
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the Server

```bash
python app.py
```

> Server runs by default at: `http://localhost:5000`

---

## 🌐 API Endpoints

### `POST /feedback`

Submit feedback.

- **Request Body (JSON):**

```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "message": "Great platform!"
}
```

- **Response:**

```json
{
  "message": "Feedback submitted successfully"
}
```

---

### `GET /feedback`

Get all feedbacks.

- **Response:**

```json
[
  {
    "id": "665fd1e3f5f4a61db4483d8d",
    "name": "Alice",
    "email": "alice@example.com",
    "message": "Great platform!",
    "timestamp": "2025-06-07T14:00:00.000Z"
  },
  ...
]
```

---





## 🧾 requirements.txt

```
flask
flask-cors
pymongo
dnspython
```

Create this file manually or run:

```bash
pip freeze > requirements.txt
```

---

## 🔐 MongoDB Atlas Setup

1. Visit [MongoDB Atlas](https://cloud.mongodb.com/).
2. Create a new cluster.
3. Add a database user (with password).
4. Whitelist your IP or allow all (`0.0.0.0/0`) temporarily.
5. Use the connection string in `app.py`:

```python
client = MongoClient("mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority")
```

---

#

## 🧪 Testing with Postman

- **Submit**: `POST http://localhost:5000/feedback`
- **View**: `GET http://localhost:5000/`


---

## 📄 License

This project is licensed for educational and non-commercial use.
