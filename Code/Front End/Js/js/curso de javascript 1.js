////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// variáveis \\\\
let idade = 5
console.log(idade)
let altura = 100
console.log(altura)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// tipos de variáveis # [tipos de dados] \\\\
let nome = 'RAFAEL' //string literal
let age = 25 //number literal
let estaAprovado = true //boolean
let sobrenome = undefined //undefined
let corSelecionado = null //redeifnir um valor
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// objetos \\\\
let pessoa = {
    nome: 'RAFAEL',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'DE SOUZA'
}
console.log(pessoa)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// arrays \\\\
let familia = [26, 45, 50, 17]
console.log(familia.length);
console.log(familia[0]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// funções \\\\
let corSite = "azul";
function resetaCor() {
    corSite = '';
};
console.log(corSite);
resetaCor();
console.log(corSite);
let corSite1 = "azul";
function resetaCor1(cor, tonalidade) {
    corSite1 = cor + "" + tonalidade;
};
console.log(corSite1);
resetaCor1("verde", " claro");
console.log(corSite);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Realizar tarefas, mas não devolve nada \\\\
function dizerNome() {
    console.log('Jhonatan');
}
dizerNome();
//// faz um cálculo e retorna o valor \\\\
function MultiplicarPorDois(valor) {
    return valor * 2;
}
//console.log(MultiplicarPorDois(5));
let result = MultiplicarPorDois(5);
console.log(resultado)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// operadores \\\\
// ----> operadores aritméricos
// ----> operadores de atribuição
// ----> operadores de comparação
// ----> operadores lógicos
// ----> operadores bitwise
//// operadores aritméticos \\\\
let salário = 10;
//+, -, *, /, **
console.log(salário + salário)
console.log(salário - salário)
console.log(salário * salário)
console.log(salário / salário)
console.log(salário ** salário)
//++ --
//++ (incremento)
//-- (decremento)
//////////// incrementando o valor 1 a varíavel anos
let anos = 18;
console.log(anos++) || (++anos);
//////////// decrementando o valor 1 a varíavel anos
let anos1 = 18;
console.log(anos1--) || (--anos1);
//// operadores de atribuição \\\\
let valorTecladoGamer = 100;
//valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);
//// operadores de igualdade \\\\
// igualdade estrita \\
console.log(1 === 1);[true]
console.log('1' === 1);[false]
// igualdade solta \\
console.log(1 == 1);
console.log('1' == 1);
//// operador ternário \\\\
// tem um cliente, 100 premium, comum
let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);
//// operadores lógicos \\\\
// operador lógico "e" {&&}
//retorna true se os 2 operandos forem verdadeiros.
console.log(true && true);
let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log(podeAplicar);
//Operador Lógico {||}
//Retornar true se um dos operandos for true;
//// operador NOT (!) \\\\
let candidatoRecusado = !podeAplicar;
console.log(candidatoRecusado);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// comparações não boleanos \\\\
//Falsy (string vazia)
//undefined
//null
// 0
//false
//''
//NaN (not a number)
//Truthy (string preenchida)
let corPersonalizada = 'Vermelho';
let corPadrão = 'Azul';
let corPerfil = corPersonalizada || corPadrão;
console.log(corPerfil);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// If e Else \\\\
// se a hora estiver entre 6:00 até 12:00 (bom dia)
// se a hora estiver entre 12:00 até 18:00 (boa tarde)
// caso contrário (boa noite)
let hora = 10;
if (hora > 6 && hora < 12) {
    alert('bom dia')
}
else if (hora > 12 && hora < 18) {
    alert('boa tarde')
}
else {
    alert('boa noite')
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Switch Case \\\\
let permissão; // comum, gerente, diretor;
permissão = '';
switch (permissão) {
    case 'comum':
        console.log('usuário comum');
        break;
    case 'gerente':
        console.log('usuário gerente')
        break;
    case 'diretor':
        console.log('usuário diretor');
        break;
    default:
        console.log('usuário não reconhecido');
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Laço / Loop \\\\
// Os Diversos tipos de Loops \\
//  1. For
//  2. While
//  3. Do.. While
//  4. For.. In
//  5. For.. Of
//// For \\\\
for (let i = 0; i < 5; i++) {
    console.log('Estou Aprendendo !' + i);
}
//// While Loop \\\\
let l = 5;
While(i >= 1); {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
//// Do.. While \\\\
let i = 0;
do {
    console.log('digitando...' + i);
    i++;
} while (i < 10)
//// For.. In \\\\
const indivíduo = {
    nome: 'Jhonatan',
    idade: 25
}
for (let chave in indivíduo) { //Key - Value
    console.log('chave');
}
const cores = ["Vermelho", "Azul", "Verde"];
for (let indice in cores) {
    console.log(cores[indice])
}
// .nome (quando sabe quem é)
// [nome] (quando não sabe quem é)
//// For.. Of \\\\
for (let cor of cores) {
    console.log(cor)
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Factory Functions \\\\
//camelCase = umDoisTresQuatro
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("fazendo ligação")
        }
    }
}
const celular1 = criarCelular('Apple', 7.7, 9999);
console.log(celular1);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Constructor Functions \\\\
//Pascal Case = UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
        this.tamanhoTela = tamanhoTela,
        this.capacidadeBateria = capacidadeBateria,
        this.ligar = function () {
            console.log('fazendo ligação');
        }
}
const novoCelular = new novoCelular('Dell', 20.20, 10000);
console.log(novoCelular);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Natureza Dinâmica dos Objetos \\\\
valorDPI = 100 * 50
const mouse = {
    cor: 'black',
    marca: 'multilaser'
}
mouse.DPI = function () {
    console.log('mudando DPI para: ' + valorDPI)
}
console.log(mouse)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Clonando Objetos \\\\
const newObject = Object.assign({
    battery: 24000
}, celular1);
console.log('newObject')
// ou
const newObject2 = { ...celular1 };
console.log(newObject2);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Math \\\\
Math.random('números entre 0 e 1')
Math.max('0,1,2,3,4,5,6,7,8,9')
Math.min('9.8.7.6.5.4.3.2.1')
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// String \\\\
// Tipo Primitivo
const string = 'oi'
// Tipo Objeto
const novaString = new string('olá')
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Introdução a Arrays \\\\
// Adicionar novos elementos
// Encontrar Elementos
// Remover Elementos
// Dividir Elementos
// Combinar Arrays
//// Adicionar novos elementos \\\\
const numbers = [1, 2, 3];
// Início
numbers.unshift(0);
console.log(numbers);
// Meio
numbers.splice(1, 0, 'a');
console.log(numbers)
// Final
numbers.push(5);
console.log(numbers);
//// Encontrando Elemento de um Array \\\\
const numbers1 = [1, 2, 3, 4];
números.indexOf(2);
// indexOf = vai buscar no array o valor selecionado e irá retornar um valor desse índice caso ele exista ali dentro do array.
// lastIndexOf = vai encontrar a última ocorrência do valor com índice selecionado.
console.log(numeros.indice(2));
//// encontrando elementos do tipo referência \\\\
const marcas = [
    { id: 1, nome: 'a' },
    { id: 2, nome: 'b' }
];
const marca = marca.find(function (marca) {
    return marca.nome === 'a';
});
console.log(marca);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Arrow Functions \\\\ (=>)
const marcas1 = [
    { id: 1, nome: 'a' },
    { id: 2, nome: 'b' }
];
const marca1 = marca1.find(function (marca1) {
    return marca.nome === 'a';
});
console.log(marcas1.find(marca1 => {
    return marca1.nome === 'a';
}))
// ou
console.log(marcas1.find((marca1) => marca1.nome === 'a'));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Removendo Elementos de um Array \\\\
const num = [1, 2, 3, 4, 5, 6];
numeros.push();
numeros.unshift();
numeros.splice();
// Removendo pelo Início
const começo = numeros.shift()
console.log(começo);
console.log(numeros);
// Removendo pelo Meio
const meio = numeros.splice(2, 1);
console.log(meio);
console.log(numeros);
// Removendo pelo Final
const fim = numeros.pop();
console.log(fim);
console.log(numeros);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Esvaziando um Array \\\\
let numberArray = [1, 2, 3, 4, 5, 6];
let outros = numeros;
// Jeito1
//numeros = [];
//console.log(outros);
// Jeito2
//numeros.length = 0;
//console.log(numeros);
//console.log(outros);
// Jeito3
//numeros.splice(0, numeros.length);
//console.log(numeros);
//console.log(outros);
// Jeito4
//while(numeros.length > 0)
//numeros.pop();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Combinando um Array \\\\
const first = [1, 2, 3]
const second = [4, 5, 6]
// Combinar
const x = x.concat(segundo);
console.log(combinado);
// Dividir
const cuted = combinado.slice();
console.log(cortado);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Operador Spread \\\\ (...)
// Spread
// const combinado = primeiro.concat(segundo);
const primeiro = [1, 2, 3]
const segundo = [4, 5, 6]
const e = primeiro.concat(segundo);
const fatiado = combinado.slice();
const e2 = [...primeiro, ...segundo];
console.log(combinado);
const cortado = combinado.slice();
// clonando array usando spread
const clonado = [...combinado];
console.log(clonado);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Foreach \\\\
const numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Foreach
numeros.Foreach((numeros, indice) => console.log(numero, indice))
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Combinando Arrays \\\\
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const combinado = numero.join('.');
console.log(combinado)
const frase = 'ola bem vindo ao curso';
const word = frase.split('');
console.log(word)
console.log(word.join('-'));
// slug
// exemplo usando o método join
// exemplo usando o método split
// pegar uma url da internet e tente replicar ela usando o método join
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Práticas \\
// trocando valores de variáveis
let a = 'vermelho'
let b = 'azul'

let c = a;
a = b
b = c
console.log(a)
console.log(b)
// escreva uma função que usa dois números e retorna o maior entre eles
let valorMaior = max(10, 10)
console.log(valorMaior)
function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else return num2;

}
// FizzBuzz
// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e 5 => entrada
// Não divisível por 3 ou 5 => entrada
// Não é um número => 'não é um número'
const resultado = fizzBuzz(15);
console.log(resultado)
function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'não é um número';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';

    return entrada;
}
// Medidor de velocidade
// velocidade máxima de até 70
// a cada 5km acima do limite você ganha um ponto na carteira
// math.floor()
// caso pontos sejam maior que 12, a carteira é suspendida
verificaVelocidade(130);
function verificaVelocidade(velocidade) {
    const valor_de_velocidade_máxima = 70;
    const km_por_ponto = 5;
    if (velocidade <= valor_de_velocidade_máxima)
        console.log('ok');
    else {
        const pontos = Math.floor((velocidade - valor_de_velocidade_máxima) / km_por_ponto)
        if (km_por_ponto >= 12)
            console.log('carteira suspensa')
        else {
            console.log('Pontos', pontos)
        }
    }

}
// Par ou ímpar
// receber um valo pra avaliação
// função que exibe se cada valor é par ou ímpar
exibirTipo(5);
function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0)
            console.log(i, 'PAR')
        else
            console.log(i, 'IMPAR')
    }
}
// Encontre o String
//criar um método para ler propriedades de um objeto e
//exibir somente as propriedades do tipo string que estão nesse objeto
const filme = {
    título: 'vingadores',
    ano: '2016',
    diretor: 'robin',
    personagem: 'thor'
}
exibir_propriedades(filme);
function exibir_propriedades(obj) {
    for (prop in obj)
        if (typeof prop === 'string')
            console.log(prop, obj[prop])
}
// criar função somar que retorna
// soma de todos os múltiplos de 3 e 5
// múltiplos de 3
// 3,6,9
//múltiplos de 5
// 5,10
// somando os múltiplos
// armazenar os múltiplos de 3
// armazenar os múltiplos de 5
// somar os dois
somar(10);
function somar(limite) {
    let multiplosde3 = 0;
    let multiplosde5 = 0;
    for (i = 0; i <= limite; i++) {
        if (i % 3 === 0)
            multiplosde3 += i;
        if (i % 5 === 0)
            multiplosde5 += i;
    }
    console.log(multiplosde3 + multiplosde5)
}
// exercício de nota escolar
// obter a média a partir de um array
// 0-59 : F
// 60-69 : D
// 70-79 : C
// 80-89 : D
// 90-100 : A
const array = [70, 70, 80]
// 75
console.log(mediaDoAluno(array))
function mediaDoAluno(notas) {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    const media = soma / (notas.length);
    if (media < 59) return 'F'
    if (media < 69) return 'D'
    if (media < 79) return 'C'
    if (media < 89) return 'B'
    return 'A'
}
// contador de asterísticos
// criar uma função que exibe a quantidade de *
// que aquela linha possui
exibirAsteriscos(10);
function exibirAsteriscos(linhas) {
    let padrao = '';
    for (let linha = 1; linha <= linhas; linha++) {
        padrao += '*';
        console.log(padrao)
    }
}
// Números Primos
// Criar função para mostrar os números primos
// primos
// compostos
exibir_numeros_primos(15);
function exibir_numeros_primos(limite) {
    for (let num = 2; num <= limite; num++) {
        let ep = true;

        for (let div = 2; div < num; div++) {
            if (num % div === 0) {
                ep = false;
                break;
            }
        }

        if (ep) console.log(num);
    }
}
// montador de endereços
//Javascript - Obj [endereço]
//criar um objeto endereço que contém
//rua
//cidade
//cep
//função que exibe essas info no console
let endereço = {
    rua: 'a',
    cidade: 'b',
    cep: 'c',
}
function exibir_endereço(endereço) {
    for (let chave in endereço)
        console.log(chave, endereço[chave]);
}
exibir_endereço(endereço);
// encontre a igualdade
function Endereço(rua, cidade, cep) {
    this.rua = rua,
        this.cidade = cidade,
        this.cep = cep
}
const endereço1 = new Endereço['a', 'b', 'c']
const endereço2 = new Endereço['a', 'b', 'c']
function saoIguais(endereço1, endereço2) {
    return endereço1.rua === endereço2.rua &&
        endereço1.cidade === endereço2.cidade &&
        endereço1.cep == endereço2.cep
}
console.log(saoIguais(endereço1, endereço2))
function temEnderecoMemoriaIguais(endereço1, endereço2) {
    return endereço1 === endereço2;
}
console.log(temEnderecoMemoriaIguais(endereço1, endereço2))
// montador de postagem de blog
// informações que precisam estar ali
let postagem = {
    título: 'a',
    mensagem: 'b',
    views: 10,
    comentários: [
        { autor: 'a', mensagem: 'b' },
        { autor: 'a', mensagem: 'b' }
    ],
    estaAoVivo: true
}
console.log(postagem);