import { createHash } from 'crypto';

class User {
    constructor(name, password) {
        this.name = name;
        this.hash = this.createHashDigest(password);
    }
    
    createHashDigest(password) {
        return createHash('sha256').update(password).digest('hex');
    }


    authenticate(name, password) {
        if (name === this.name && this.hash === this.createHashDigest(password)) {
            console.log('User authenticated successfully!');

            return true;
        } else {
            return false;
        }
    }
}

const user = new User('flavio', '1447');
console.log(user);

user.authenticate('flavio', '1447');
console.log('\nPressione qualquer tecla para sair...');
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));

for (let passwordAttempt = 0; passwordAttempt <= 9999; passwordAttempt++) {
    console.log('Trying password:', passwordAttempt.toString()); 
    if(user.authenticate('flavio', passwordAttempt.toString())) {
        console.log(`Password found: ${passwordAttempt.toString()}`);
        break;
    }
}

// user.authenticate('flavio', 'wrong_password');

