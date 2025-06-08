
# Feedback Submission Web Application

A full-stack feedback submission web app built using React (frontend), Flask (backend), and MongoDB Atlas (database). Users can submit feedback via a form and view all submitted feedback.

---

## Features

- Submit feedback with Name, Email, and Message
- Display all feedback below the form
- Transparent form over a background image
- Success message after submission
- Delete all feedbacks (admin/debug endpoint)

---

## Technologies Used

- **Frontend:** React, Axios, Tailwind CSS
- **Backend:** Python, Flask, Flask-CORS
- **Database:** MongoDB Atlas (cloud-hosted)
- **Deployment:** Can be hosted on Render, Vercel, Netlify, or any cloud VM

---

## Project Structure

```
project/
├── backend/
│   └── app.py
├── frontend/
│   ├── public/
│   │   └── background-image.png
│   ├── src/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
```

---

## Backend Setup (Flask)

### Prerequisites

- Python 3.8+
- pip

### Installation

1. Navigate to the backend folder:

```bash
cd backend
```

2. Create a virtual environment (optional but recommended):

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:

```bash
pip install flask flask-cors pymongo
```

4. Update your MongoDB URI in `app.py`:

```python
client = MongoClient("your-mongodb-uri")
```

5. Run the backend server:

```bash
python app.py
```

The Flask server will run at `http://localhost:5000`.

---

## Frontend Setup (React)

### Prerequisites

- Node.js and npm

### Installation

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

Your frontend app will run at `http://localhost:3000`.

---

## API Endpoints

### Backend Routes

- `POST /feedback` - Submit feedback
- `GET /feedback` - Get all feedback


---

## Deployment Tips

- **Frontend:** Deploy using Vercel, Netlify, or GitHub Pages
- **Backend:** Deploy using Render, Railway, or a cloud VM
- **MongoDB:** Use MongoDB Atlas (cloud-based) with IP access control enabled

---

## License

This project is intended for educational and demo purposes only.
