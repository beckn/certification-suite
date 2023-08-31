import express from 'express';
import pkg from 'body-parser';
const { json } = pkg;
import {Ed25519VerificationKey2020} from
  '@digitalbazaar/ed25519-verification-key-2020';
import {Ed25519Signature2018} from '@digitalbazaar/ed25519-signature-2018';
import {issue,verifyCredential} from '@digitalbazaar/vc';
import cors from 'cors';
const app = express();
app.use(json());
app.use(cors());


const customContext = {
    "@version": 1.1,
    "id": "@id",
    "type": "@type",
    "vc": "http://www.w3.org/2018/credentials#",
    "url":"https://schema.org/URL",
    // "network": "vc:network",
    "domain": "https://schema.org/category",
    "CredentialSubject": "vc:CredentialSubject",
    "version":"https://schema.org/version",
  };


// Generate issuer's key pair (private and public keys)
let sharedKeyPair = null;

// Function to generate the key pair (only if not already generated)
const generateKeyPair = async () => {
    if (!sharedKeyPair) {
      sharedKeyPair = await Ed25519VerificationKey2020.generate();
  };
  return sharedKeyPair;
}

app.post('/issue-vc', async (req, res) => {
  try {
    console.log(req.body);
    const { orgdomain,coreVersion,uri,network } = req.body;

    // Create a Verifiable Credential
    const keyPair = await Ed25519VerificationKey2020.generate({
        secureRandom: () => {
          return Buffer.from(
            '4f66b355aa7b0980ff901f2295b9c562ac3061be4df86703eb28c612faae6578',
            'hex'
          );
        },
      });
      console.log("aimm");
      const suite = new Ed25519Signature2018({key: keyPair});
      suite.verificationMethod="https://example.edu/issuers/keys/1";
      const VerifiableCredential = await issue({
      credential: {
        '@context': ["https://www.w3.org/2018/credentials/v1",customContext],
        type: ['VerifiableCredential'],
        issuer: "https://example.edu/issuers/565049",
        issuanceDate: new Date().toISOString(),
        credentialSubject: {
            // type: "Compliance",
            domain: orgdomain,
            // network: network,
            version:coreVersion,
            url:uri
            // created: new Date().toISOString()
          },
      },suite
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
    const verificationResult = await verifyCredential({
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
