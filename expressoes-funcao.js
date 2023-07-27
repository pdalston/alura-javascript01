
// Declaração de função

function minhaFuncao(parametros) {
    // código
}

minhaFuncao("argumentos")


// Expressão da função

const soma = function(num1, num2) {return num1 + num2}
console.log(soma(1,1))

// diferença principal

// chamar a função antes funciona pq o js lê todas as funções (ou var) do arquivo durante a execução e joga elas pra cima do arquivo (hoisting)
console.log(apresentar())
function apresentar() {
    return "olá";
}

// não funciona pq vc não pode referenciar a const antes de declarar ela
console.log(apresentar2())
const apresentar2 = function() {
    return "olá2";
}

