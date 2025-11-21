# Node.js Cryptography Course

Este repositório contém as implementações práticas do curso de criptografia em Node.js da Alura, explorando o módulo `crypto` nativo.

*[Curso realizado na Alura](https://cursos.alura.com.br/): Node.js: criptografia e tokens JWT*


## Tecnologias:

<div align="center">


[![Backend](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Crypto](https://img.shields.io/badge/Crypto-Node.js_Native-green?style=for-the-badge&logo=nodejs)](https://nodejs.org/api/crypto.html)
</div>

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

## Simulações de Ataques (Fins Educacionais)

> **⚠️ AVISO IMPORTANTE**: Os scripts a seguir são implementações **extremamente simplificadas** para fins de **aprendizado apenas**. Eles não representam implementações reais ou viáveis na prática e possuem várias vulnerabilidades intencionais para demonstrar conceitos de segurança.

### 🔨 Brute Force Attack (`src/simulations/bruteForce.js`)
- Simulação de ataque de força bruta contra senhas
- Demonstra como senhas fracas são facilmente quebradas
- **Limitações**: Implementação fraca, sem throttling, sem proteção contra timing attacks além de computacionalmente ser muito cara

### 🌈 Rainbow Table Attack (`src/simulations/rainbowTableAttack.js`)
- Simulação de ataque usando rainbow tables
- Demonstra como hashes sem salt são vulneráveis
- **Limitações**: Tabela muito pequena, algoritmos simplificados

### 📊 Dictionary Attack (`src/simulations/dictionaryAttack.js`)
- Ataque usando dicionário de senhas comuns
- Mostra efetividade contra senhas previsíveis
- **Limitações**: Dicionário reduzido, sem otimizações computacionais

## Como Executar

```bash
# Para inicializar o npm dentro do projeto
npm init

# Instalar dependências
npm install

# Executar qualquer exemplo
node src/cipher.js
node src/hash/hash.js
node src/saltedHash/saltedHash.js
node src/asymmetricEncryption/asymmetricEncryption.js
node src/symmetricEncryption/symmetricEncryption.js

# Scripts de "ataque"
node src/simulations/bruteForceAttack.js
node src/simulations/dictionaryAttack.js
node src/simulations/rainbowTableAttack.js
```

---

## Desenvolvedor

<div align="center">

**Flavio Kolenez**

[![GitHub](https://img.shields.io/badge/GitHub-flavio--kolenez-181717?style=for-the-badge&logo=github)](https://github.com/flavio-kolenez)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077b5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/fkolenez)

</div>