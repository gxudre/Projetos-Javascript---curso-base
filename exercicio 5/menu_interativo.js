do {
  let opcao = parseFloat(
    prompt("Digite a opção desejada: \n1) \n2) \n3) \n4) \n5)Encerrar")
  );

  switch (opcao) {
    case 1:
      alert(`você escolheu a opção 1`);
      break;
    case 2:
      alert(`você escolheu a opção 2`);
      break;
    case 3:
      alert(`você escolheu a opção 3`);
      break;
    case 4:
      alert(`você escolheu a opção 4`);
      break;
    case 5:
      alert(`Finalizando`);
      break;
    default:
      alert(`valor invalido`);
      break;
  }
} while (opcao !== 5);

alert(`O programa foi finalizado! :)`);
