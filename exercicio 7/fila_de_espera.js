const fila = [];
let opcao = 0;

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "° - " + fila[i] + "\n";
  }

  opcao = parseFloat(
    prompt(
      `Essa é a lista de pacientes: \n ${pacientes}. \n O que deseja fazer ? \n1)Novo paciente \n2)Consultar Paciente \n3)Sair `
    )
  );

  switch (opcao) {
    case 1:
      const novoPaciente = prompt(
        `Digite o nome do paciente a ser adicionado? `
      );
      fila.push(novoPaciente);
      alert(`Sua nova lista de pacientes é: ${pacientes} \n ${novoPaciente}`);

      break;
    case 2:
      let consultar = fila.shift();
      alert(`${consultar} pode ir ao consultorio! `);
      break;
    case 3:
      alert(`Finalizando...`);
      break;
    default:
      alert(`Opção inválida`);
      break;
  }
} while (opcao != 3);

alert(`O programa foi finalizado :)`);
