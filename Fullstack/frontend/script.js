/*variáveis*/
var v1 = "coca-cola"; // variável que aceita novos valores, sendo eles repetidos ou não;
let v1 = "pepsi"; // variável que aceita novos valores, mas não permite repetição;
const v1 = "guarana"; // variável que não muda os valores [muito útil ao definir uma porta ou alguma conexão remota];

/*tipos de variáveis*/
let string = "fulano"; // texto;
let number = 20; // number;
let bool = true; // booleano [true || false]
let undefined = undefined; // valores não definidos;
let s = null; // valores nulos;

/*array*/
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // lista de dados que podem ser strings ou números;
console.log("número retirado do array : " + (array[2])) // mostrar no console do browser
// uma string concatenando [+] com a variávei array e seu índice;

/*operadores*/
/*artiméticos*/
["+,-,*,**,/,+=,-+,--,++"]; // usamos esses em condições if por exemplo;
/*lógicos*/
["&&,||,!=,!"] // usamos esses em condições if por exemplo;
/*ternário*/
let idade, eleitor;
idade = 19;
eleitor = (idade < 18) ? "não tem idade" : "tem idade."; // usamos esses em condições mais compactas;

/*funções*/
function somar(a, b) { // podem ser chamadas declarando seu nome junto a um parâmetro vazio ou com algo;
    let a = 20;
    let b = 30;
}
console.log("a soma dos valores será igual a : " + somar()) // essa função exibe a soma dos valores ao ser chamada
// ao ser carregada no console e mostrando seu resultado, essa função se classifica como função normal;

/*arrow functions*/
const func = (x) => x * x; // são setas que definimos junto a uma variável que atua sendo uma constante que 
// realiza a mesma atividade de uma função normal porém ela é compacta;
/*input*/
let dados = prompt("insira sua senha : ");
if (dados = 213) {
    alert("bem vindo ! ");
} else if (dados = 420) {
    alert("senha inválida");
};
// ao inserir os dados o javascript irá verificar se a senha que foi armazenada é a mesma se for, a pessoa ganha acesso,
// se não ela não ganha acesso;

/*If e Else*/
let hora = 10;
if (hora > 6 && hora < 12) {
    alert('bom dia')
}
else if (hora > 12 && hora < 18) {
    alert('boa tarde')
}
else {
    alert('boa noite')
};

/*Switch*/
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
};

/*Loops*/
/*For*/
for (let i = 0; i < 5; i++) {
    console.log('Estou Aprendendo !' + i);
}
/*While*/
let l = 5;
While(i >= 1); {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
/*Do While*/
let i = 0;
do {
    console.log('digitando...' + i);
    i++;
} while (i < 10)
/*For In*/
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
/*For Of*/
for (let cor of cores) {
    console.log(cor)
};

/*objetos*/
const obj = {
    name: "pessoa",
    profissão: "desenvolvedor",
    idade: 23,
}
console.log(obj.name);
// blocos de código que possuem todas as informações de uma pessoa ou de um sistema por exemplo;
// também podemos fazer a coleta e ver o que tem em cada propriedade;

/*settimeout e setinterval*/
setTimeout // parada;
setInterval // intervalo de tempo;
clearInterval // remove o intervalo definido;
clearTimeout // remove a parada do tempo definida;

/*json [ausência de html]*/
// conhecido também por ser um conversor de texto em objetos, o json é importante;
// dentro do json usamos 2 métodos apenas;
JSON.parse(); // texto json em objetos;
JSON.stringify(); // objeto pra texto;
/*requisições http com json*/
const ajax = XMLHttpRequest(); // usando essa constante o javascript faz uma requisição http pra pegar
ajax.open("get",); // usando o método get que depois
ajax.send(); // envia esses dados
ajax.onload = function () { // onde os dados são renderizados por essa função
    document.getElementById("area").innerHTML = this.responseText; // que pega o id de "area", acessando o elemento html [this.responsetext]
    alert(obj.ddd)// tendo o obj em mãos ele pega o ddd 
    let obj = JSON.parse(this.responseText); // e depois de pegar o ddd atráves de outra variável ele converte todo o texto em obj;
};
/*buscador de cep [ausência de html]*/
function buscar_cep() { 
    let input = document.getElementById("cep").ariaValueMax; // essa função através dum input ela pega o id ["cep"]
    const ajax = XMLHttpRequest(); // logo em seguida faz uma requisição http
    ajax.open("get","url"+input+"/json/"); // depois atráves dessa constante ele vai pegar os dados pela url definida, pelo input e tudo que tiver relações com json
    ajax.send(); // daí ele envia os dados
    ajax.onload = function(){ // e através dessa função ele acessa o documento pelo id texto, acessando o elemento html [this.responsetext]
        document.getElementById("texto").innerHTML=this.responseText; 
        let obj = JSON.parse(this.responseText); // logo depois o código acessa o obj criado e converte todo o texto em obj
        let logradouro = obj.localidade; // em seguida acessamos a propriedade desse obj 2x, 1 aqui
        let estado = obj.uf; // e outra aqui
        document.getElementById("texto").innerHTML = "logradouro: " + 
        logradouro + "<br> cidade: " + cidade + "<br> Estado: "; // em seguida pegando pelo mesmo id e elelemento html, definimos a coleta, o logradouro, a cidade
        // e a cidade;
    }
};