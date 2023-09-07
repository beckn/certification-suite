import React from 'react';
import QRCode from 'qrcode.react';

const VCQRCode = ({ vcData }) => {
  const vcJSON = JSON.stringify(vcData);

  return (
    <div>
            <QRCode value={vcJSON}/>

      <button
            onClick={() => {
              // Open the QR code in a new tab
              const qrCodeImage = document.querySelector('canvas').toDataURL('image/png');
              const newTab = window.open();
              newTab.document.write('<img src="' + qrCodeImage + '" />');
              newTab.document.write('<p>' + vcJSON + '<p/>');
            }}
          >
      See More..
          </button>

    </div>
  );
};

export default VCQRCode;
