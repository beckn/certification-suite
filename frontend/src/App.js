import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      const { message, token } = response.data;
      setRegistrationMessage(message);
      if (token) {
        // You can save the token to localStorage or a global state management system like Redux for later use.
        alert('Registration successful. Token: ' + token);
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setRegistrationMessage('Email already registered.');
      } else {
        setRegistrationMessage('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>
      {registrationMessage && <p className="message">{registrationMessage}</p>}
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" placeholder="Enter your name" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="text" name="phone" id="phone" placeholder="Enter your phone number" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" placeholder="Enter your password" onChange={handleChange} />
        </div>
        <button type="button" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default App;
