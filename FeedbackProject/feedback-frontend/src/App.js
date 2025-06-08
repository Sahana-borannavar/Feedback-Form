import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [feedbacks, setFeedbacks] = useState([]);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/feedback");
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/feedback", formData);
      setSuccess("Feedback submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
      fetchFeedbacks(); // refresh feedbacks
      setTimeout(() => setSuccess(""), 3000);
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>Submit Your Feedback</h2>
        {success && <p className="success">{success}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Feedback"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="feedback-section">
        <h3>All Feedback</h3>
        {feedbacks.length === 0 ? (
          <p>No feedback yet.</p>
        ) : (
          feedbacks.map((fb, index) => (
            <div className="feedback" key={index}>
              <p><strong>{fb.name}</strong> ({fb.email})</p>
              <p>{fb.message}</p>
              <small>{new Date(fb.timestamp).toLocaleString()}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;


