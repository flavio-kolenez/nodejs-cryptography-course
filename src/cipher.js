const message = "alura";

function cipher(message, shift) {
	cipherMessage = message.split('').map(char => {
		const code = char.charCodeAt(0);
		return String.fromCharCode(code + shift);
	});

	return cipherMessage.join('');
}

const cipheredMessage = cipher(message, 4);
console.log(cipheredMessage);

function decipher(message, shift) {
	cipherMessage = message.split('').map(char => {
		const code = char.charCodeAt(0);
		return String.fromCharCode(code - shift);
	});

	return cipherMessage.join('');
}

const cipheredMessageDeciphered = decipher(cipheredMessage, 4);
console.log(cipheredMessageDeciphered);
