let turista = prompt("Digite o nome do turista? ");
let cidades = "";
let contagem = 0;

let visita = prompt(
  `${turista}, você já visitou alguma cidade? ( sim  ou não) `
);

while (visita === "sim") {
  let cidade = prompt(`${turista}, digite o nome da cidade visitada? `);
  cidades += "\n" + cidade;
  contagem++;
  visita = prompt(
    `${turista}, deseja adicionar alguma outra cidade que visitou? ( sim ou nao)`
  );
}

alert(
  `${turista}, você visitou um total de ${contagem} cidades. \n As cidades são: ${cidades}`
);
