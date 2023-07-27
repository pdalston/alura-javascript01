// let x = "";
// console.log(x);
// x = "oi";

function imprimeTexto(texto) {
    console.log(texto)
}

//imprimeTexto("oi");

// 3 formas de escrever funções

// function soma() {
//     const resultado = 2+2;
//     console.log(resultado);
// }

// soma();

// -------
imprimeTexto(soma());

function soma() {
    const resultado = 2+2;
    return resultado;
    // ou return 2+2;
    // o return tem q ser a última linha da função
}

//console.log(soma());

// -------


// Função sem retorno ou parâmetro

function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()

// Função sem retorno com parâmetro

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')

// Função com retorno e sem parâmetro

function cumprimentar(){
    return 'Oi gente!'
   }
   
function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

// Função com return e mais de um parâmetro

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
operacaoMatematica(15, 30, 45) // 90
console.log(operacaoMatematica(15, 30, 45))

// Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado; algumas documentações se referem a parâmetros no momento 
// em que a função é definida (no caso, numero1, numero2, etc) e argumentos como os dados que utilizamos para executar 
// a função (ou seja, 30, 45, etc).


// exercicio

function comParametro(param) {
    console.log(param)
}
comParametro()

