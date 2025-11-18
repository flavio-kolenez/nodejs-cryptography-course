import { scryptSync, randomBytes, timingSafeEqual } from 'crypto'

function createHashDigest(password) {
	const salt = randomBytes(16).toString('hex');

	const hasheadPassword = scryptSync(password, salt, 64);
	return `${salt}:${hasheadPassword.toString('hex')}`;
}

class User {
	constructor(name, password) {
		this.name = name;
		[this.salt, this.hash] = createHashDigest(password).split(':');
	}

	authenticate(name, password, salt) {
		if (name === this.name) {
			const testHash = scryptSync(password, this.salt, 64);
			const originalHash = Buffer.from(this.hash, 'hex');

			const hashesMatch = timingSafeEqual(originalHash, testHash);

			if (hashesMatch) {
				console.log('User authenticated successfully!');
				return true;
			}
		}

		console.log('Authentication failed. Invalid name or password.');
		return false;
	}
}

const user = new User('flavio', 'my_secure_password');
console.log(user);

// Correct password
user.authenticate('flavio', 'my_secure_password');

// Incorrect password
user.authenticate('flavio', 'wrong_password');