import React, { useState } from 'react';
import './dashboard.css'; // Import the dashboard-specific CSS

const Dashboard = () => {
  const [username, setUsername] = useState('John'); // Replace with actual username
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
  const [field4, setField4] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', field1, field2, field3, field4);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="user-info">Welcome, {username}!</div>
        <a className="logout-link" href="/logout">Logout</a>
      </header>
      <main className="dashboard-content">
        <h1 className="dashboard-heading">Dashboard</h1>
        <form className="dashboard-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label className="form-label">Domain:</label>
            <select
              className="form-select"
              value={field1}
              onChange={e => setField1(e.target.value)}
            >
              <option value="">Select an option</option>
              <option value="option1">Mobility</option>
              <option value="option2">Education</option>
              <option value="option3">Health</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Network:</label>
            <select
              className="form-select"
              value={field1}
              onChange={e => setField1(e.target.value)}
            >
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Enter the Base URL:</label>
            <select
              className="form-select"
              value={field1}
              onChange={e => setField1(e.target.value)}
            >
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          {/* ... Repeat the same structure for other form groups ... */}
          <button className="form-submit" type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Dashboard;