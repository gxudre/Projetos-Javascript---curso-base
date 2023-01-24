let nome = prompt("digite seu nome: ");
let sobrenome = prompt("Digite seu sobrenome: ");
let estudo = prompt("digite seu campo de estudo: ");
let nascimento = prompt("digite seu ano de nascimento: ");

//INICIA A VARIAVEL IDADE
let idade = 0;
idade = 2023 - nascimento

let confirmacao = confirm("ja fez aniversário esse ano (2023)? ");
//SE JA FEZ ANIVERSARIO ESSE ANO ENTÃO IMPRIME A IDADE

if (confirmacao == true) {
  alert(`Seu nome é ${nome} ${sobrenome} 
\nSeu campo de estudo é: ${estudo}
\nSua idade é: ${idade}`);
} else {
  //SE NAO FEZ ANIVERSARIO ENTÃO PEGA A IDADE - 1 ANO
  idade--;
  alert(`Seu nome é ${nome} ${sobrenome} 
\nSeu campo de estudo é: ${estudo}
\nSua idade é: ${idade}`);
}

