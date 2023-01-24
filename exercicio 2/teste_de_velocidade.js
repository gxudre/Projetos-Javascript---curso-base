let veiculo1 = prompt("nome do primeiro veículo? ");
let veiculo2 = prompt("Nome do segundo veículo? ");
let velocidade_veiculo1 = parseFloat(
  prompt("velocidade do primeiro veiculo?(somente numeros em km/h)")
);
let velocidade_veiculo2 = parseFloat(
  prompt("velocidade do segundo veiculo?(somente numeros em km/h) ")
);

if (velocidade_veiculo1 > velocidade_veiculo2) {
  alert(`O ${veiculo1} é mais rápido e está a ${velocidade_veiculo1} KM/H`);
} else if (velocidade_veiculo2 > velocidade_veiculo1) {
  alert(`O ${veiculo2} é mais rápido e está a ${velocidade_veiculo2} KM/H`);
} else if (velocidade_veiculo1 == velocidade_veiculo2) {
  alert(
    `O ${veiculo1} e o ${veiculo2} estão na mesma velocidade andando a ${velocidade_veiculo2} KM/H`
  );
} else {
  alert(`Os valores digitados não são válidos`);
}
