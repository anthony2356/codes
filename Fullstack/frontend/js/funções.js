// funções de construção, fábrica, compacta e comum;

function mostrar_idade() {
    let ano_atual = 2024;
    let ano_nascimento = 2005;
    let cálculo = ano_atual - ano_nascimento;
    alert("a sua idade é de : " + cálculo);
}
mostrar_idade(); // função básica que através de valores armazenados ou coletados, exibe ao usuário a sua idade;

function criar_jogador(vida, força, velocidade) {
    this.vida = vida;
    this.força = força; // campo de construção;
    this.velocidade = velocidade;
    // apresentação do produto;
    alert("ola jogador1, a sua vida é de " + 200 + " e sua força é de " + 4732658989 + " contando com sua velocidade que é de " + 47358900);
}
criar_jogador(); // função de construção que não retorna nada, apenas "constroí aquilo que estamos oferecendo como dados;"

function fabricar_carro(ano, preço, marca) {
    return {
        ano,
        preço, // campo de fabrcação;
        marca,
    }
    // aprensentação do produto;
    alert("o carro a ser criado é de " + 2020 + " no entanto seu preço está avaliado em " + 10.000 + "R$");
    alert("e sua marca é da volkswagen");
}

const idade = () => {
    let ano_atual = 2024;
    let ano_nascimento = 2005;
    let cálculo = ano_atual - ano_nascimento;
    switch (cálculo) {
        case 30:
           alert("idade inadequada [erro de cálculo");
            break;
        case 19:
            alert("idade correta");
            break;
        default:
            alert("nada de errado");
            break;
    }
} 

// a função compacta permite o uso do mesmo porém sem se exibir muito, as arrow functions apenas,
// são aceitas em variáveis constantes, ela acaba sendo útil em ambientes de servidores, ou mesmo,
// validação de dados cujo, foram guardados no banco de dados, são valores constantes;  