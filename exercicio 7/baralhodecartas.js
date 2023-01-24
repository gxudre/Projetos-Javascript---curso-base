const cartas = ["A espadas", " 2 de ouro"];
let baralho = 0;

while (baralho != 3) {
  baralho = parseFloat(
    prompt(
      `Essas são suas Cartas: \n ${cartas}. \n O que deseja fazer ? \n1)Adicionar carta ao topo \n2)Puxar uma carta \n3)Sair `
    )
  );

  switch (baralho) {
    case 1:
      cartas.unshift(prompt(`Digite a carta a ser adicionada? `));
      alert(`Sua nova lista de cartas é: ${cartas}`);
      break;
    case 2:
      let puxarcarta = cartas.shift();
      alert(` A carta puxada é ${puxarcarta}`);
      break;
    case 3:
      alert(`Finalizando...`);
  }
}

alert(`O programa foi finalizado :)`);
