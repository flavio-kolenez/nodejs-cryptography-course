import { createHash } from 'crypto';

function createHashDigest(password) {
	return createHash('sha256').update(password).digest('hex');
}

class User {
	constructor(name, password) {
		this.name = name;
		this.hash = createHashDigest(password);
	}

	authenticate(name, password) {
		if (name === this.name && this.hash === createHashDigest(password)) {
			console.log('User authenticated successfully!');

			return true;
		} else {
			console.log('Authentication failed. Invalid name or password.');
			return false;
		}
	}
}

const user = new User('flavio', 'my_secure_password');
console.log(user);

user.authenticate('flavio', 'my_secure_passwor');

// user.authenticate('flavio', 'wrong_password');