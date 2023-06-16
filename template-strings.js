
const nome = "Pedro";
const idade = 40;
const cidadeNascimento = "Caratinga";

//concatenando normal
//const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci em " + cidadeNascimento;

// usando template string. posso também quebrar as linhas
const apresentacao = `Meu nome é ${nome}, minha idade é ${idade} e nasci em ${cidadeNascimento}`;

console.log(apresentacao)

// execricio

a = []
b = 20
c = true 
d = ''

// string vazia é igual a zero
if (b === 20 && c != false && d == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

// Uma lista vazia tem o valor zero
if (a == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

// uma string vazia é considerada false
if (d) {
    console.log('Verdade')
} else {
    console.log('Falso')
}