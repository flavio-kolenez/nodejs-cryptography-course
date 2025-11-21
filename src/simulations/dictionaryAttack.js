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

const user = new User('flavio', 'senha123');
console.log(user);

user.authenticate('flavio', 'senha123');

const commomPasswords = ["senha", "123456", "senha123", "admin", "blink182","meuAniversario", "senha123456", "brasil", "102030"]

commomPasswords.map( password => {
    if(user.authenticate('flavio', password)){ 
        console.log(`Password found ${password}`);
    }
});