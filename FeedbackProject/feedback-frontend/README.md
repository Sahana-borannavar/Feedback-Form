
# Feedback Submission Frontend

This is the frontend part of the Feedback Submission Web Application. It is built using React and connects to a Flask + MongoDB backend.

## Features

- Submit feedback via a simple, clean form
- Display all submitted feedback below the form
- Transparent form on a background image
- Success message after submission

## Technologies Used

- React
- Axios
- Tailwind CSS (for styling)
- Flask (backend)
- MongoDB Atlas (database)

## Getting Started

### Prerequisites

- Node.js and npm installed
- Backend server should be running at `http://localhost:5000` (or your deployed backend URL)

### Installation

1. Clone the repository or copy the frontend project into your desired directory.
2. Navigate to the frontend folder in terminal:

```bash
cd frontend
```

3. Install the dependencies:

```bash
npm install
```

### Running the App

To run the app in development mode:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### File Structure

- `App.js`: Main component containing the form and feedback display logic.
- `index.js`: Renders the app.
- `public/`: Static files including background image.
- `package.json`: Project dependencies and scripts.

## API Endpoints Used

- `POST /feedback`: Submit new feedback
- `GET /feedback`: Fetch all feedbacks

## Customization

- To change the background image, replace the image in the `public/` folder and update CSS accordingly in `App.js`.
- You can use Bootstrap instead of Tailwind if preferred.

## License

This project is provided for learning purposes.
