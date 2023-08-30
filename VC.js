const express = require('express');
const bodyParser = require('body-parser');
const {Ed25519KeyPair}=require('@transmute/ed25519-key-pair')
const {Ed25519Signature2018}=require('@transmute/ed25519-signature-2018')

const vc = require('vc-js');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
// Generate issuer's key pair (private and public keys)
let sharedKeyPair = null;

// Function to generate the key pair (only if not already generated)
const generateKeyPair = async () => {
    if (!sharedKeyPair) {
      sharedKeyPair = await Ed25519KeyPair.generate({secureRandom: () => {
        return Buffer.from(
          '4f66b355aa7b0980ff901f2295b9c562ac3061be4df86703eb28c612faae6578',
          'hex'
        );
    },
    });
    return sharedKeyPair;
  };
}
app.post('/issue-vc', async (req, res) => {
  try {
    const { orgdomain,coreVersion,name,uri,network } = req.body;
    const keyPair = await generateKeyPair();

    // Create a Verifiable Credential
    const VerifiableCredential = await vc.issue({
      credential: {
        '@context': ["https://www.w3.org/2018/credentials/v1",
        "/vc-context.json"],
        type: ['VerifiableCredential'],
        issuer: keyPair.controller,
        issuanceDate: new Date().toISOString(),
        credentialSubject: {
            id: name,
            type: "Compliance",
            network: network,
            domain: orgdomain,
            base_endpoint:uri,
            core_version:coreVersion
          },
      },
      suite: new Ed25519Signature2018({
        key: keyPair,
      }),
    });

    return res.json({ verifiableCredential: VerifiableCredential });
  } catch (error) {
    console.error('Error issuing Verifiable Credential:', error);
    return res.status(500).json({ error: 'Failed to issue Verifiable Credential' });
  }
});

app.post('/verify-vc', async (req, res) => {
  try {
    const { verifiableCredential } = req.body;

    // Verify the Verifiable Credential
    const verificationResult = await vc.verifyCredential({
      credential: verifiableCredential,
      suite: new Ed25519Signature2018({
        key: keyPair.publicKey,
      }),
    });

    if (verificationResult.verified) {
      return res.json({ valid: true });
    } else {
      return res.json({ valid: false });
    }
  } catch (error) {
    console.error('Error verifying Verifiable Credential:', error);
    return res.status(500).json({ error: 'Failed to verify Verifiable Credential' });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
