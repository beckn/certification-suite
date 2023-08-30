import React from 'react';
import QRCode from 'qrcode.react';

const VCQRCode = ({ vcData }) => {
  const vcJSON = JSON.stringify(vcData);

  return (
    <div>
      <h2>Verifiable Credential QR Code</h2>
      <QRCode value={vcJSON} />
    </div>
  );
};

export default VCQRCode;
