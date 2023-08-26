import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../helpers/AuthContext'; // Import useAuth

const Login = () => {
  const navigate = useNavigate();
  const { user,login } = useAuth(); // Use the login function from AuthContext

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      // const response = await axios.post('http://localhost:5000/login', formData);

      if (true) {
        login(formData)
        navigate('/dashboard'); // Redirect to the dashboard on successful login
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again later.');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
