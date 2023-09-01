import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import './styles/styles.css';
import Dashboard from './pages/dashboard';
import Login from './pages/login'; // Import the Login component
import { useAuth } from './helpers/AuthContext'; // Import AuthProvider
// require('dotenv').config();

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const [registrationStatus, setRegistrationStatus] = useState({
    message: '',
    isSuccess: null,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const HandleRegister = async () => {

    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      const { message } = response.data;
      setRegistrationStatus({
        message: message,
        isSuccess: true,
      });

    } catch (error) {
      console.log(error);
      setRegistrationStatus({
        message: 'Registration failed. Please try again.',
        isSuccess: false,
      });
    }
  };
  if (registrationStatus.isSuccess) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="container">
      {registrationStatus.message && (
        <div className={`registration-message ${registrationStatus.isSuccess ? 'success' : 'error'}`}>
          {registrationStatus.message}
        </div>
      )}
              <a className="login" href="/login">Login</a>

<h1>Registration Form</h1>

      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="button" onClick={HandleRegister}>Register</button>
      </form>
    </div>
  );
};

const Logout = () => {
  // Implement logout logic, clear token from storage, etc.
  return <Navigate to="/login" />;
};


const App = () => {
  const {user} = useAuth(); // Use the isAuthenticated state from AuthContext


  return (
    <Router>
      <Routes>
        <Route exact path="/" element=
          {<RegistrationForm />}>
        </Route>
        <Route path="/dashboard" element={user ? <Dashboard/> : <Navigate to="/login" />} />
        <Route path="/login" element=
          {<Login />}>
        </Route>
        <Route path="/logout" component={Logout} />
      </Routes>
    </Router>
  );
};

export default App;
