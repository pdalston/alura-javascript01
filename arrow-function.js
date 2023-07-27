
function soma(num1, num2) {
    return `o resultado da soma de ${num1} + ${num2} é = ${num1 + num2}`
}
console.log(soma(4, 56))


// arrow function

const somaArrow = (num1, num2) => `o resultado da arrow soma de ${num1} + ${num2} é = ${num1 + num2}`;
console.log(somaArrow(37, 93))

// Exemplo2
const apresentarArrow = nome => `meu nome é ${nome}`;
console.log(apresentarArrow("Pedro"))

// Caso precise de um bloco de código usar {} e return
const somaArrow2 = (num1, num2) => {
    numSoma = num1 + num2;
    return `o resultado da arrow soma2 de ${num1} + ${num2} é = ${numSoma}`;
}
console.log(somaArrow2(37, 91))

