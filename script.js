function mostrarDiv(id) {
  document.getElementById(id).style.display = "block";
}

function pertenceFibonacci(numero) {
  let a = 0,
    b = 1;
  while (b < numero) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  return b === numero || numero === 0;
}

function verificarFibonacci() {
  let num = parseInt(document.getElementById("numFibonacci").value);
  let resultado = document.getElementById("resultadoFibonacci");

  if (isNaN(num) || num < 0) {
    resultado.innerText = "Por favor, digite um número válido.";
    resultado.style.color = "red";
  } else {
    resultado.innerText = pertenceFibonacci(num)
      ? `O número ${num} pertence à sequência de Fibonacci.`
      : `O número ${num} NÃO pertence à sequência de Fibonacci.`;
    resultado.style.color = pertenceFibonacci(num) ? "green" : "red";
  }

  mostrarDiv("divFibonacci");
}

function inverterString(str) {
  let invertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }
  return invertida;
}

function inverterTexto() {
  let texto = document.getElementById("textoInvertido").value;
  let resultado = document.getElementById("resultadoTexto");

  if (texto.trim() === "") {
    resultado.innerText = "Digite um texto válido para inverter.";
    resultado.style.color = "red";
  } else {
    resultado.innerText = `Texto invertido: ${inverterString(texto)}`;
    resultado.style.color = "blue";
  }

  mostrarDiv("divTexto");
}

function calcularFaturamento() {
  const faturamentoDiario = [
    100, 200, 0, 300, 500, 0, 700, 800, 0, 400, 1000, 50, 0, 150,
  ];
  let diasValidos = faturamentoDiario.filter((valor) => valor > 0);

  if (diasValidos.length === 0) return;

  let menor = Math.min(...diasValidos);
  let maior = Math.max(...diasValidos);
  let media =
    diasValidos.reduce((sum, val) => sum + val, 0) / diasValidos.length;
  let diasAcimaMedia = diasValidos.filter((valor) => valor > media).length;

  document.getElementById(
    "resultadoFaturamento"
  ).innerText = `Menor faturamento: R$${menor}\nMaior faturamento: R$${maior}\nDias acima da média: ${diasAcimaMedia}`;

  mostrarDiv("divFaturamento");
}

function calcularPercentuais() {
  const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  let total = Object.values(faturamentoEstados).reduce(
    (sum, val) => sum + val,
    0
  );
  let resultado = "Percentual de faturamento por estado:\n";

  for (let estado in faturamentoEstados) {
    let percentual = ((faturamentoEstados[estado] / total) * 100).toFixed(2);
    resultado += `${estado}: ${percentual}%\n`;
  }

  document.getElementById("resultadoPercentual").innerText = resultado;

  mostrarDiv("divPercentual");
}
