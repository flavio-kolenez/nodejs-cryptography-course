import { generateKeyPairSync, createSign, createVerify } from 'crypto';
import { create } from 'domain';

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,

    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    },
});

let data = "Important message that needs to be signed.";

// Create Signer
const signer = createSign('rsa-sha256');
signer.update(data);

// Generate Signature to document using private key and signer
const signature = signer.sign(privateKey, 'hex');

// console.log("Signature:", signature);

// Simulate data alteration
// In this case:
data += " Alteration of the message.";
// the data has been altered after signing returning false on verification


// Sending data, signature, and public key to the receiver for verification

// Create Verifier
const verifier = createVerify('rsa-sha256');
verifier.update(data);

// Verify the signature using public key and verifier
// Returns true if the signature is valid, false otherwise
const isVerified = verifier.verify(publicKey, signature, 'hex');
console.log("Is the signature verified?", isVerified);