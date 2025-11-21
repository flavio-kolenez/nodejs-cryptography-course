import { createHash }from 'crypto'


// Strategy define o algoritmo de encriptogração
function createHashDigest(data, strategy) {
    return createHash(strategy).update(data).digest('hex');
}

const commomPasswords = [
    "senha", "123456", "senha123",
     "admin", "blink182","meuAniversario", 
     "senha123456", "brasil", "102030"
];

const rainbowTable = commomPasswords.map( password => {
    return [password, createHashDigest(password, 'MD5')]
});

console.log(rainbowTable);

const leakedHashes = [
    "21232f297a57a5a743894a0e4a801fc3", 
    "cedf5ab7b5c5852b3ed35d7dbe3c3835",
    "81dc9bdb52d04dc20036dbd8313ed055",
];


// Pra cada senha vazada, ele itera em cada 
// linha do rainbow table verificando se essa senha do hash,
//  é igual a senha da table
leakedHashes.map( leakedHash => {
    rainbowTable.map( pairGenerated => {
        if(leakedHash == pairGenerated[1]) {
            // 'Texto' da senha ta na posição 0
            console.log(`Founded password: \n leaked hash: ${leakedHash} \n password: ${pairGenerated[0]} \n`);
        };
    });
});