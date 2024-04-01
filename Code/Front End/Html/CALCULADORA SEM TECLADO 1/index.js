function somar_com() {
  let valor1 = Number(document.getElementById("valorUniversal").value);
  let valor2 = Number(document.getElementById("valorUm").value);
  let cálculo = valor1 + valor2;
  alert("resultado do cálculo é: " + cálculo);
}

function subtrair_com() {
  let valor1 = Number(document.getElementById("valorUniversal").value);
  let valor2 = Number(document.getElementById("valorDois").value);
  let cálculo = valor1 - valor2;
  alert("resultado do cálculo é: " + cálculo);
}

function dividir_com() {
  let valor1 = Number(document.getElementById("valorUniversal").value);
  let valor2 = Number(document.getElementById("valorTres").value);
  let cálculo = valor1 / valor2;
  alert("resultado do cálculo é: " + cálculo);
}

function multiplicar_com() {
  let valor1 = Number(document.getElementById("valorUniversal").value);
  let valor2 = Number(document.getElementById("valorQuatro").value);
  let cálculo = valor1 * valor2;
  alert("resultado do cálculo é: " + cálculo);
}

function calcular_tudo() {
  somar_com();
  subtrair_com();
  dividir_com();
  multiplicar_com();
}

function limpar_tudo() {
  let valor0 = Number(document.getElementById("valorUniversal").value);
  document.getElementById("valorUniversal").value = "";
  let valor1 = Number(document.getElementById("valorUm").value);
  document.getElementById("valorUm").value = "";
  let valor2 = Number(document.getElementById("valorDois").value);
  document.getElementById("valorDois").value = "";
  let valor3 = Number(document.getElementById("valorTres").value);
  document.getElementById("valorTres").value = "";
  let valor4 = Number(document.getElementById("valorQuatro").value);
  document.getElementById("valorQuatro").value = "";
}

function limpar_valor_inicial() {
  let valor0 = Number(document.getElementById("valorUniversal").value);
  document.getElementById("valorUniversal").value = "";
}
