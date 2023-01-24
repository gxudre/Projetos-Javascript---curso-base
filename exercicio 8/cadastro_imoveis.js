let imovel = [];
let opcao = 0;
let lista = "";

do {
  opcao = parseFloat(
    prompt(
      `Essa é sua quantidade total de imoveis: ${imovel.length}. \n O que deseja fazer ? \n\n1)Salvar Imovel \n2)Lista de imoveis \n3)Sair `
    )
  );

  switch (opcao) {
    case 1:
      const infoImovel = {};
      infoImovel.proprietario = prompt(
        `Digite o nome do proprietário do imóvel? `
      );
      infoImovel.quartos = prompt(`Digite a quantidade de quartos do imóvel? `);
      infoImovel.banheiros = prompt(
        `Digite a quantidade de banheiros do imóvel? `
      );
      infoImovel.garagem = prompt(`O imóvel possui garagem ? (Sim/Não)`);

      let confirmacao = confirm(
        `deseja salvar este imovel ? \n
        Proprietário: ${infoImovel.proprietario} \n Quartos: ${infoImovel.quartos} \n Banheiros: ${infoImovel.banheiros} \n Possui garagem? ${infoImovel.garagem}`
      );

      if (confirmacao) {
        imovel.push(infoImovel);
        alert(`Imóvel salvo com sucesso!`);
      } else {
        alert(`Voltando ao menu.`);
      }

      break;
    case 2:
      for (let i = 0; i < imovel.length; i++) {
        lista +=
          "Imóvel: " +
          (i + 1) +
          "\nNome do proprietário: " +
          imovel[i].proprietario +
          "\nQuantidade de quartos: " +
          imovel[i].quartos +
          "\nQuantida de banheiros: " +
          imovel[i].banheiros +
          "\nPossui garagem: " +
          imovel[i].garagem +
          "\n\n";
      }
      alert(lista);
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
