import { generateKeyPairSync, publicEncrypt, privateDecrypt, pbkdf2 } from "crypto";

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

const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from("Message to be encrypted!")
);

console.log("Encrypted Data: ", encryptedData.toString("hex"));

const decryptedData = privateDecrypt(
    privateKey,
    encryptedData
);

console.log("Decrypted message:", decryptedData.toString("utf-8"));