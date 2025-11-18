import { createCipheriv, randomBytes, createDecipheriv } from "crypto";

const message = "Hello, this is a secret message!";

const key = randomBytes(32);
const iv = randomBytes(16);

const cypher = createCipheriv('aes256', key, iv);

const cypheredMessage = cypher.update(message, 'utf-8', 'hex') + cypher.final('hex');

// Transmitting cypheredMessage, key and iv to the receiver...

const decipher = createDecipheriv('aes256', key, iv);
const decipheredMessage = decipher.update(cypheredMessage, 'hex', 'utf-8') + decipher.final('utf-8');

console.log(`\nOriginal Message: ${message} `);
console.log(`\nCyphered Message: ${cypheredMessage.toString('utf-8')} `);
console.log(`\nDeciphered Message: ${decipheredMessage}`);