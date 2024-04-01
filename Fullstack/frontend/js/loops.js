/*Loops*/
/*For*/
for (let i = 0; i < 5; i++) { // valor inicial, valor máximo, incremento;
    console.log('Estou Aprendendo !' + i);
}
/*While*/
let l = 5; // valor inicial;
While(i >= 1); { // condição loop;
    if (i % 2 !== 0) {
        console.log(i);
    }
}
/*Do While*/
let i = 0; // valor inicial;
do { // função de inserir um novo valor a cada tanto tempo;
    console.log('digitando...' + i);
    i++;
} while (i < 10) // ação que define o valor máximo que deve ser alcançado;
/*For In*/
const indivíduo = {
    nome: 'Jhonatan',
    idade: 25
}
for (let chave in indivíduo) { //Key - Value // loop que usa como valores um objeto;
    console.log('chave');
}
const cores = ["Vermelho", "Azul", "Verde"]; // loop que usa um array ;
for (let indice in cores) {
    console.log(cores[indice]) // pegando seu índice;
}

// loops interessantes para prática, [for, while, do while] => cada loop serve pra cada cenário;