let medida = parseFloat(
  prompt("digite o valor de medida a ser convertido?(em M) ")
);

let conversor = prompt(
  "escolha a unidade de conversao: \n mm para milimetros \n cm para centímetros \n dm para decímetro \n dam para decâmetro \n hm para hectometro \n km para kilômetro"
);

switch (conversor) {
  case "mm":
    medida = medida * 1000;
    alert(`O valor em mm é ${medida}`);
    break;
  case "cm":
    medida = medida * 100;
    alert(`O valor em cm é ${medida}`);
    break;
  case "dm":
    medida = medida * 10;
    alert(`O valor em dm é ${medida}`);
    break;
  case "dam":
    medida = medida * 0.1;
    alert(`O valor em dam é ${medida}`);
    break;
  case "hm":
    medida = medida * 0.01;
    alert(`O valor em hm é ${medida}`);
    break;
  case "km":
    medida = medida * 0.001;
    alert(`O valor em km é ${medida}`);
    break;
  default:
    alert(`Opção inválida`);
    break;
}
