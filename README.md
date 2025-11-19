# Node.js Cryptography Course

Este repositório contém as implementações práticas do curso de criptografia em Node.js da Alura, explorando o módulo `crypto` nativo.

## Conceitos Implementados

### 📝 Caesar Cipher (`src/cipher.js`)
- Cifra de César com shift customizável
- Implementação básica de criptografia simétrica

### 🔐 Hash (`src/hash/hash.js`)
- Hash SHA-256 para autenticação básica
- Demonstração de funções hash criptográficas

### 🧂 Salted Hash (`src/saltedHash/saltedHash.js`)
- Hash com salt usando scrypt
- Proteção contra ataques de rainbow table
- Implementação segura de autenticação de senhas

### 🔑 RSA Encryption (`src/asymmetricEncryption/asymmetricEncryption.js`)
- Criptografia assimétrica RSA
- Geração de chaves públicas/privadas
- Encriptação e descriptografia com chaves diferentes

### 🔒 Symmetric Encryption (`src/symmetricEncryption/symmetricEncryption.js`)
- Criptografia simétrica
- Uso da mesma chave para encriptar e descriptografar

## Como Executar

```bash
# Instalar dependências
npm install

# Executar qualquer exemplo
node src/cipher.js
node src/hash/hash.js
node src/saltedHash/saltedHash.js
node src/asymmetricEncryption/asymmetricEncryption.js
node src/symmetricEncryption/symmetricEncryption.js
```

## Tecnologias

- **Node.js** - Runtime JavaScript
- **crypto** - Módulo nativo do Node.js para criptografia

---

*Curso realizado na Alura - Criptografia em Node.js*