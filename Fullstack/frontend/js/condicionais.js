// condições if, else, else if e o switch;
// --------------------------------------------------------
//com if e etc...
function somar() {
    let valor1 = 20;
    let valor2 = 20;
    let valor_total = valor1 + valor2;
    validar_soma();
    function validar_soma() {
        if (valor_total == 40) {
            alert("verificando...");
            alert("tudo certo");
            console.log("nenhum erro encontrado");
        } else if (valor_total > 40) {
            alert("verificando...")
            alert("o valor não é o certo");
            console.log("erro encontrado [erro de cálculo]");
        } else {
            alert("nada de errado");
            console.log("nada de errado");
        }
    }
}
alert("calculando...");
alert("o resultado é : " + somar);
// --------------------------------------------------------
// com switch, o swtich é um condicional if mais compacto;
function somar() {
    let valor1 = 20;
    let valor2 = 20;
    let valor_total = valor1 + valor2;
    validar_soma();
    function validar_soma() {
        switch (valor_total) { // condição
            case 40: // se for o que é pra ser esperado.
                alert("nada de errado"); // feedback;
                break; // encerramento da validação;
            case 20: // se for o que é pra ser esperado.
                alert("erro encontrado, [erro de cálculo]");// feedback;
                break; // encerramento da validação;
            case 34283724658903455: // se for o que é pra ser esperado.
                alert("erro encontrado, [valor impossível]");// feedback;
                break; // encerramento da validação;
            default: // equivalente ao else;
                alert("nada de errado");// feedback;
                break; // encerramento da validação;
        }
    }
}
alert("calculando...");
alert("o resultado é : " + somar);
// --------------------------------------------------------