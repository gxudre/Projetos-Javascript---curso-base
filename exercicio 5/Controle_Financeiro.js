let din_inicial = parseFloat(
  prompt("Digite o montante de dinheiro inicial disponivel? ")
);
let adicionar = 0;
let remover = 0;
let opcao = 0;

do {
  opcao = parseFloat(
    prompt(
      `Voce possui ${din_inicial}. O que deseja Fazer: \n1)Depositar \n2)Sacar \n3)Finalizar Operação`
    )
  );

  switch (opcao) {
    case 1:
      adicionar = parseFloat(prompt(`Qual quantia deseja depositar? `));
      din_inicial += adicionar;
      break;
    case 2:
      remover = parseFloat(prompt(`Qual quantia deseja sacar? `));
      din_inicial -= remover;
      break;
    case 3:
      alert(`Finalizando...`);
      break;
    default:
      alert(`valor invalido`);
      break;
  }
} while (opcao !== 3);

alert(`A operação foi finalizada, Tenha um bom dia ! :)`);
