/*-----------------------------------------------------------------------*/
// json => javascript object notation;
// muito usado pra fazer a passagem de dados;
// entre servidores e as aplicações web;
// os arquivos json, funcionam com {key:value};
// ou {value1, value2, value3};
// no json usamos dois métodos;
// JSON.stringfy() = converte objetos em textos json;
// JSON.parse() = converte textos em objetos json;
/*-----------------------------------------------------------------------*/
/*cada constante contendo valores como nomes, idades e profissões*/
/*cada constante possui seu array contendo um objeto json com suas propriedades*/
const names = ["Sandy", "Bob", "John"];
const person1 = { "name": "Sandy", "age": 22, "work": "Developer" };
const people = [{ "name": "Sandy", "age": 22, "work": "Developer" },
{ "name": "Bob", "age": 32, "work": "Ethical Hacker" },
{ "name": "John", "age": 35, "work": "Military Soldier" }];
const jsonString = JSON.stringify(people);
console.log(jsonString);
const jsonNames1 = ["Sandy", "Bob", "John"];
const jsonPerson1 = { "name": "Sandy", "age": 22, "work": "Developer" };
const jsonPeople1 = [{ "name": "Sandy", "age": 22, "work": "Developer" },
{ "name": "Bob", "age": 32, "work": "Ethical Hacker" },
{ "name": "John", "age": 35, "work": "Military Soldier" }];
const parseData1 = JSON.parse(jsonNames1);
console.log(jsonNames1);
const jsonNames2 = ["Sandy", "Bob", "John"];
const jsonPerson2 = { "name": "Sandy", "age": 22, "work": "Developer" };
const jsonPeople2 = [{ "name": "Sandy", "age": 22, "work": "Developer" },
{ "name": "Bob", "age": 32, "work": "Ethical Hacker" },
{ "name": "John", "age": 35, "work": "Military Soldier" }];
const parseData2 = JSON.parse(jsonNames2);
console.log(jsonNames1);
const jsonNames3 = ["Sandy", "Bob", "John"];
const jsonPerson3 = { "name": "Sandy", "age": 22, "work": "Developer" };
const jsonPeople3 = [{ "name": "Sandy", "age": 22, "work": "Developer" },
{ "name": "Bob", "age": 32, "work": "Ethical Hacker" },
{ "name": "John", "age": 35, "work": "Military Soldier" }];
const parseData3 = JSON.parse(jsonNames3);
console.log(jsonNames3);
/*-----------------------------------------------------------------------*/
/*Busca os valores dentro de constantes json acessando o arquivo primeiro*/
/*Depois faz a coleta dos valores e pra cada valor exbibe um console, mostrando*/
/*a propriedade cujo diz respeito ao objeto json*/ 
/*para casos de erros, temos o catch que fará essa exibição caso ele não consiga os dados*/
/*usando o fetch fazemos o consumo dos recursos de uma api*/
fetch("jsonPeople1.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.work)))
    .catch(error => console.error(error))

fetch("jsonPeople2.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.work)))
    .catch(error => console.error(error))

fetch("jsonPeople3.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.work)))
    .catch(error => console.error(error))
/*-----------------------------------------------------------------------*/