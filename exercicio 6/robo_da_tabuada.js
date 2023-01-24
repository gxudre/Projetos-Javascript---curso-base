let numero = parseFloat(
  prompt(`Digite o numero a ser multiplicado? (entre 1 a 20)`)
);
let numeros = 0;
let contagem = 0;

for (let i = 1; numero >= 1 && numero <= 20; i < 20) {
  numeros = numero * (i + contagem) + "\n";
  contagem++;
}

alert(
  `Os resultados das multiplicações de 1 a 20 com o numero informado são: \n ${numero}`
);
