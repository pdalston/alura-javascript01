// parametros de função

function soma (num1, num2) {
    return num1 + num2;
}

console.log(soma(2,5));

// parametros x argumentos

// Parâmetro é a variável que irá receber um valor em uma função (ou método) enquanto que um argumento é o valor (que pode originar de uma variável ou expressão) que você passa para a função (ou método).
// Você não passa parâmetros, você passa argumentos. Você recebe argumentos também, mas recebe em parâmetros. Você parametriza sua função com informações que virão posteriormente. Você argumenta com o que deseja executar uma função devidamente parametrizada.
// Pode haver menos os mais argumentos para cada parâmetro já que existem parâmetros que são opcionais e outros que podem ser listas variáveis de dados. Portanto não há uma relação de um para um e a distinção entre eles é importante.
// Frequentemente é confundido por todos e eu mesmo admito que intercambio os termos erroneamente, mas para uma boa comunicação é importante todos saberem o correto.

// estabelecendo valores padrões para os parâmretros

function multiplica (num1 = 1, num2 = 1) {
    return num1 * num2;
}

console.log(multiplica(2));
// mesmo omitindo uma parametro ela deve funcionar pois temos os valores padrões


