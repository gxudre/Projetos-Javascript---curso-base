let opcao = 0;

do {
  opcao = parseFloat(
    prompt(
      `Esta é a calculadora Geométrica. \n Qual calculo deseja fazer ? \n\n1)Área do Triângulo \n2)Área do Retângulo \n3)Área do Quadrado \n4)Área do Trapézio \n5)Área do Círculo \n6)Sair `
    )
  );

  switch (opcao) {
    case 1:
      function areaTriangulo(base, altura) {
        let areaTriangulo = (base * altura) / 2;
        alert(`A área do triângulo é: ${areaTriangulo}`);
        return;
      }
      areaTriangulo(
        parseFloat(prompt(`Qual o valor da base do triângulo?`)),
        parseFloat(prompt(`Qual o valor da altura do triângulo?`))
      );
      break;
    case 2:
      function areaRetangulo(base, altura) {
        let areaRetangulo = base * altura;
        alert(`A área do retangulo é: ${areaRetangulo}`);
        return;
      }
      areaRetangulo(
        parseFloat(prompt(`Qual o valor da base do retângulo?`)),
        parseFloat(prompt(`Qual o valor da altura do retângulo?`))
      );
      break;
    case 3:
      function areaQuadrado(lado) {
        let areaQuadrado = lado * lado;
        alert(`A área do quadrado é: ${areaQuadrado}`);
        return;
      }
      areaQuadrado(parseFloat(prompt(`Qual o valor do lado do Quadrado? `)));
      break;
    case 4:
      function areaTrapezio(baseMenor, baseMaior, altura) {
        let areaTrapezio = ((baseMaior + baseMenor) * altura) / 2;
        alert(`A área do trapézio é: ${areaTrapezio} `);
        return;
      }
      areaTrapezio(
        parseFloat(prompt(`Valor da base MENOR do Trapézio? `)),
        parseFloat(prompt(`Valor da base MAIOR do trapézio? `)),
        parseFloat(prompt(`Valor da altura do trapézio? `))
      );
      break;
    case 5:
      function areaCirculo(raio, pi = 3.14) {
        let areaCirculo = raio * raio * pi;
        alert(`A área do círculo é: ${areaCirculo}`);
        return;
      }
      areaCirculo(parseFloat(prompt(`Qual o valor do raio do círculo? `)));
      break;
    case 6:
      alert(`Finalizando...`);
      break;
    default:
      alert(`Valor Invalido`);
      break;
  }
} while (opcao != 6);

alert(`O programa foi finalizado com sucesso! :)`);
