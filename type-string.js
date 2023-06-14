const texto1 = "Olá, Mundo!";
const texto2 = 'Olá, Mundo!';

// Pode-se usar os dois tipos de aspas, inclusive uma dentro da outra para uma citação


console.log(texto1, texto2)


// concatenação

console.log("Concatenando");
console.log(texto1 + texto2);

// template string ou template literal => `

console.log("template strings");
console.log(`${texto1} ${texto2}`);


// unicode

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)


// Comparação de strings, tornar tudo minúsculo para comparação

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

// tamanho da string

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres


