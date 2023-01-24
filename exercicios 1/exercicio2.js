let valor1 = parseInt(prompt("digite o primeiro valor? "));
let valor2 = parseInt(prompt("digite o segundo valor? "));

let soma = 0,
  subtracao = 0,
  multiplicacao = 0,
  divisao = 0;

soma = valor1 + valor2;
subtracao = valor1 - valor2;
multiplicacao = valor1 * valor2;
divisao = valor1 / valor2;

alert(
  `A soma dos valores é: ${soma} \nA subtração dos valores é: ${subtracao} \nA multiplicação dos valores é ${multiplicacao} \nA divisão dos valores é: ${divisao} `
);
