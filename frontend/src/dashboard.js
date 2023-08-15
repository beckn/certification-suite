import React, { useState } from 'react';
import './dashboard.css'; // Import the dashboard-specific CSS
import { useAuth } from './AuthContext'; // Import useAuth

const Dashboard = () => {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const { user, logout } = useAuth();
  const [textInput, setTextInput] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(true);

  // Handle input change
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setTextInput(inputValue);

    // Validate input as URL
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    setIsValidUrl(urlPattern.test(inputValue));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValidUrl) {
      // Perform action for valid URL
      console.log('Valid URL:', textInput);
    } else {
      console.log('Invalid URL:', textInput);
    }
  };


    return (
      <div className="dashboard-container">
        {user  ? (
          <><header className="dashboard-header">
            <div className="user-info">Welcome, {user.username}!</div>
            <a className="logout-link" href="/logout">Logout</a>
          </header><main className="dashboard-content">
              <h1 className="dashboard-heading">Dashboard</h1>
              <form className="dashboard-form" onSubmit={handleSubmit}>
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
                    onChange={e => setField2(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="option1">ONDC</option>
                    <option value="option2">Kochi Mobility Network</option>
                    <option value="option3">Namma yatri</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="textInput">Base API endpoint</label>
                  <input
                    type="text"
                    id="textInput"
                    value={textInput}
                    onChange={handleInputChange}
                    className={!isValidUrl ? 'invalid' : ''}
                  />
                  {!isValidUrl && <p className="error-message">Enter a valid URL</p>}
                </div>
                <button type="submit" disabled={!isValidUrl}>
                  Submit Text
                </button>
              </form>
            </main></>
        ) : (
          <p>Please log in to access the dashboard.</p>
        )}
      </div>
    );
};

export default Dashboard;