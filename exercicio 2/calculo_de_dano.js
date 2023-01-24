let nome_personagem1 = prompt("Digite o nome do primeiro personagem? ");
let ataque_personagem1 = parseFloat(
  prompt("Digite o poder de ataque do primeiro personagem? ")
);
let nome_personagem2 = prompt("Digite o nome do segundo personagem? ");
let vida_personagem2 = parseFloat(
  prompt("Digite os pontos de vida do segundo personagem? ")
);
let defesa_personagem2 = parseFloat(
  prompt("Digite os pontos de defesa do segundo personagem? ")
);
let escudo_personagem2 = confirm(
  "O segundo personagem possui um escudo? (ok para sim e cancel para não)"
);

//inicializar variavel dano
let dano = 0;

if (ataque_personagem1 > defesa_personagem2 && escudo_personagem2 == false) {
  //se o poder de ataque for maior do que a defesa e o defensor nao possuir escudo, então o dano causado é a diferença entre o ataque e a defesa
  dano = ataque_personagem1 - defesa_personagem2;
} else if (
  ataque_personagem1 > defesa_personagem2 &&
  escudo_personagem2 == true
) {
  //se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.

  dano = (ataque_personagem1 - defesa_personagem2) / 2;
} else if (ataque_personagem1 <= defesa_personagem2) {
  //se poder de ataque for menor ou igual a defesa, o dano será 0.
  dano = 0;
}

vida_personagem2 = vida_personagem2 - dano;

alert(
  `O personagem ${nome_personagem1} atacou o personagem ${nome_personagem2} com a quantidade de ${dano} pontos. \nA nova vida de ${nome_personagem2} é de ${vida_personagem2}`
);
