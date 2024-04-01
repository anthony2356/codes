// Linguagem Javascript \\
// javascript é uma linguagem de programação, que dá ao desenvolvedor o direito de dar "vida" as páginas web.
// ela também oferece uma interação com o usuário e a página ou o web aplicativo ao qual ele acessou.
// com o javascript podemos fazer calculadoras, validação de formulários entre outros.
// ===============================================================
// [1] Javascript interno e externo \\ 
// podemos usar o javascript junto a um documento html e/ ou css usando ele de forma interna ou externa.
// <script></script> --> aqui o javascript fica inserido e junto ao mesmo arquivo.html
// <script src = "index.js"></script> --> aqui o javascript fica linkado ao documento.html carregando todo o código javascript.
// no javascript temos 4 tipos de saída seja para coletar algum dado ou para apenas mostrar ele na tela.
// ===============================================================
// [2] Tipos de saída no Javascript \\
document.getElementById("texto") // aqui você pega qualquer valor pelo seu identificador que foi definido no html
document.getElementById("texto").innerHTML // aqui é a mesma coisa porém com um diferencial, ao declarar o que vai
// ser coletado, você também usando o . você vai especificar ao javascript o que ele deve coletar ou exibir, no caso
// usamos o .innerHTML para dizer que aquele id vai receber como elemento html uma string logo:
document.getElementById("texto").innerHTML = "água";
document.write("água") // nessa saída você apenas acessa o documento e pede pra ele escrever algo na tela por ex: água.
alert("água") // nesse você exibe mensagens ou resultado de operações matemáticas através de uma janela que o navegador
// mostra quando essa saída é chamada ou mesmo executada em um código javascript.
console.log("console") // aqui você exbibe informações armazenadas de uma varivável do código fonte no console do navegador
// ou mesmo exibindo do próprio comando.
// ===============================================================
// [3] declarações \\
alert("água"); // o ponto e vírgula é usado para definir um fim ao código javascript dizendo que ele vai começar e vai ternminar
// quando chegar ao ponto e vírgula, é com o ponto e vírgula que indicamos o término de um determinado bloco de instruções.
// ===============================================================
// [4] Sintaxe no Javascript \\
console.log("5+5") // string.
console.log(5 + 5) // operação matemática.
var a = 1;
var b = 5;
var c = a + b;
console.log(c);
// o javascript é sensível a letras maíusculas e minúsculas.
var PESSOA = "Lucas"
var pessoa = "Paulo"
console.log(Pessoa) // cada qual a seu jeito, se tentar usar algo diferente que não esteja de acordo com o que foi definido ou que não
// está igual o código não roda e a interatividade não funciona.
// [5] comentando código \\
// --> uma única linha.
//  um conjunto de código .
// ===============================================================
// [6] variáveis \\
// VAR, o cara da bagunça.
// ambas as variávies guardam valores, o var permite reatribuição de valores, permite também usar duas variáveis e também pode
// ser usado em qualquer parte do código.
// ele não respeita hierarquia do código e pega tudo.
// LET, o cara certinho e justo.
// respeita hierarquia do código, é rígido ao usar duas variaveís [o que já foi criado não pode ser reutilizado mais de uma vez]
// permite reatribuição e ele é mais seguro.
// CONST, o militar.
// não permite repetição de variáveis já declaradas.
// não usa hierarquia de código.
// mais usado para objetos e pra servidores.
// ===============================================================
// [7] Operaodores no Javascript \\
// nos usamos eles para atribuir um valor a uma variável, realizar uma operação matemática, ou mesmo para comparar se aquilo é 
// verdadeiro ou falso.
// como operadores temos 6 dentro do javascript.
// aritméticos --> realizar contas matemáticas usando - + / * **.
// atribuição --> dar valor a uma variável ou mesmo reatribuir o valor.
// sequência --> sequência de concatenação por meio de strings, para formar uma frase ou mesmo escrever uma mensagem específica.
// comaparação --> para verificar se são iguais temos:
var a = 20
var b = 40
var c = a === b
alert(c) // c sai como falso pois não é igual: === --> mais de 2 sinal de igual além de comparar se são iguais, podemos impor uma 
// comparação muito mais rígida.
// condicional --> podemos impor condições ao nosso código e verificar se aquilo está de acordo ou não, pra isso podemos usar o if:
if (c = false) {
    alert("isso é falso e ambos são diferentes")
} else {
    alert("nada está errado eles são iguais")
}
// como pdoemos usar condicionais ternários tornando a instrução if mais compacta:
var a, b
a = 20
b = (a < 30) ? "isso é menor" : "isso é maior"
alert(b)
// a recebe 20 como valor, e b recebe a condição [a maior que 30], a interrogação é o if, logo ao lado temos 2 saídas, uma como 
// verdade e a outra como mentira, os dois pontos é o else do if.
// lógicos --> para continuar uma sentença em uma condição if, ou mesmo definir se aquilo pode fazer algo ou não:
// nos lógicos temos : && [e], ! [not], também o || [ou] e também o diferente !=.
var a = 20
var b = 40
var c = a + b
var d = c + 2
var e = d ** + c
if (c != d) {
    alert("são diferentes")
    if (d != e || c > d) {
        alert("esses valores são menores")
        if (e < d && c) {
            alert("o valor de [e] é muito maior do que [d] && [c]")
        }
    }
}
// ===============================================================
// [8] Funções no Javascript \\
// são executadas quando invocamos elas por meio de nomeDaFunção()
// função para somar.
function soma(v1, v2) {
    return v1 + v2
}
document.getElementById("texto").innerHTML = soma(10, 23);
// função para converter real para dólar.
function realParaDólar(real, dólar) {
    return real * dólar
}
var total = realParaDólar(10, 5.08)
alert("convertendo real para dolar...")
alert("aqui está : " + " U$ " + total);
// função que exibe uma janela popPup e mostra uma mensagem
function mensagem() {
    alert("KKKKKKKKKKKKKKKKK")
}
// conversor de fahrenheit para celsius
function celsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
var x = celsius(77)
alert("A temperatura é de " + x + " graus celsius");
// ===============================================================
// [9] Objetos no Javascript \\
// variáveis que armazenam uma grande quantidade de valores, juntos formam como se fosse um objeto que possui várias informações 
// sobre ele.
// exemplo de objeto :
const pessoa = {
    nome: "Pedro",
    idade: 24,
    profissao: "Desenvolvedor"
}
// os valores de um objeto são suas deternimadas propriedades então:
//nome:"pedro",
//idade:24,
//profissao:"Desenvolvedor"
// quando falamos de métodos dos objetos no javascript, dizemos que estamos em outras palavras coletando os dados de cada propredade
// definida dentro da variável obj.
// os objetos aceitam o uso de funções dentro deles onde, para poder uitlizar dessas funções nós a chamamos dentro do próprio objeto.
// =============================
// [10] Eventos no Javascript \\
// são usados quando o usuário interage com as páginas.
// quando manejamos de forma correta esses eventos, a interação dos usuários com a página torna-se dinâmica.
/*
============================================
onclick => disparado quando recebe um click.
ondblclick => disparado quando click duplo.
onmouseover => disparado quando o mouse está sobre.
onmouseout => disparado quando o mouse sai do objeto.
onmousemove => disparado quando o mouse é movido no elemento.
onmousedown => disparado quando o click do botão for pressionado.
onmouseup = > disparado quando o click do mouse é solto.
========================================================================
onfocus => disparado quando o elemento recebe o foco. Válido para input.
onchange => disparado quando há uma mudança no conteúdo. "Ao mudar".
onblur => disparado quando o elemento perde o foco.
======================================================
onkeydown => disparado quando uma tecla é pressionada.
onkeypress => disparado quando uma tecla é pressionada e solta.
onkeyup => disparado quando uma tecla é solta sobre o elemento.
====================================================================
onload => disparado quando a página terminou de ser carregada. Body.
onresize => disparado quando há um redimencionamento da janela.
===============================================================
*/
// =============================================================== 
// [16] Set timeout e set interval no Javascript \\
// set timeout -> usamos para definir a saída de uma determinada contagem de tempo.
// clear timeout -> usamos para definir uma pausa dessa contagem feita.
// set interval -> determinado intervalo que usamos para definir onde a cada 3 segundos um novo valor é inserido.
// clear interval -> usamos para parar esse intervalo.
function start() {
    counter();
    interval = setInterval(counter, 100)
}
function pause() {
    clearInterval(interval)
}
function reset() {
    clearInterval(interval)
    seconds = 0;
    minutes = 0;
    document.getElementById('counter').innerText = "00:00:00"
}
// ===============================================================
// [17] Classes do Javascript \\
// são funções especiais que atuam como uma fábrica, montadora de veículos, onde a partir de determinado objeto, podemos fabricar um novo objeto
// com as propriedades de outro automóvel, sendo assim é como se estivéssemos fabricando um novo carro na vida real.
class Carro {
    constructor(v1, v2, v3) {
        this.marca = v1;
        this.modelo = v2;
        this.ano = v3;
    }
}
const fusca = new Carro("volkswagen", "fusca", 1990)
console.log(fusca)
// ===============================================================
// [18] o Famoso JSON \\
// Json --> Javascript object notation.
// ele funciona como um conversor de objeto em textos através de 2 métodos:
// json.stringfy().
// json.parse().
// Com o json podemos transmitir dados entre sistemas de forma simples. já que mesmo sendo texto,
// A linguagem ainda lê.
// Convertendo objeto javascript para texto JSON :
// OBJETO QUALQUER :
const carro = {
    marca: "Ford",
    modelo: "F250",
    ano: 2014
}
// OBJETO CONVERTIDO EM TEXTO JSON :
let texto = JSON.stringify(carro);
document.getElementById('area').innerHTML = texto;
// TEXTO JSON CONVERTIDO EM OBJETO : 
let obj = JSON.parse(texto);
console.log(obj.ano);
// JSON NA PRÁTICA :
// TRANSMISSÃO DE DADOS DE UMA URL :
const ajax = new XMLHttpRequest();
ajax.open('GET', '');
ajax.send();
ajax.onload = function () {
    document.getElementById('area').innerHTML = this.responseText;
    alert(obj.ddd);
    let obj = JSON.parse(this.responseText);
}
// BUSCADOR DE CEP COM JSON :
// realiza uma solicitação ao site para obter os dados sem ser identificado.
function buscarCep() {
    let input = document.getElementById('cep').value;
    const ajax = new XMLHttpRequest();
    ajax.open("GET", 'URL' + input + '/json/');
    ajax.send();
    ajax.onload = function () {
        // document.getElementById('texto).innerHTML = this.responseText;
        // convertendo os dados em forma de objeto : 
        let obj = JSON.parse(this.responseText);
        // coleta de dados : 
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;
        document.getElementById('texto').innerHTML = "Logradouro: " + logradouro
            + "<br> Cidade: " + cidade + "<br> Estado: " + estado;
    }
}