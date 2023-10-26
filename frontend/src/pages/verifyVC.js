// VerifyVCPage.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/VerifyVCPage.css';

function VerifyVCPage() {
  const [vcInput, setVcInput] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerifyVC = async () => {
    try {
      const response = await axios.post('http://localhost:8000/verify-vc', { verifiableCredential: vcInput });
      setVerificationResult(response.data);
    } catch (error) {
      console.error(error);
      setVerificationResult({ success: false, message: 'Verification failed.' });
    }
  };

  return (
    <div className="verify-vc-container">
      <div className="verify-vc-content">
        <h1>Verify Verifiable Credential</h1>
        <textarea
          className="vc-textarea"
          rows="5"
          placeholder="Paste Verifiable Credential here"
          value={vcInput}
          onChange={(e) => setVcInput(e.target.value)}
        ></textarea>
        <br />
        <button className="vc-button" onClick={handleVerifyVC}>
          Verify VC
        </button>
        <div className="verification-result">
          {verificationResult && (
            <div>
              <h2>Verification Result:</h2>
              <p>Success: {verificationResult.success ? 'Yes' : 'No'}</p>
              <p>Message: {verificationResult.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VerifyVCPage;
