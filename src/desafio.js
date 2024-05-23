// Variáveis para armazenar nome e XP do herói
let nome;
let xp;

// Validação de entrada para nome
do {
  nome = prompt("Digite o nome do seu herói:");
} while (!nome || nome.trim() === "");

// Validação de entrada para XP
do {
  xp = parseInt(prompt("Digite a quantidade de XP do seu herói:"));
} while (isNaN(xp) || xp < 0);

// Estrutura de decisão para determinar o nível do herói
let nivel;
if (xp < 1000) {
  nivel = "Ferro";
} else if (xp < 2001) {
  nivel = "Bronze";
} else if (xp < 5001) {
  nivel = "Prata";
} else if (xp < 7001) {
  nivel = "Ouro";
} else if (xp < 8001) {
  nivel = "Platina";
} else if (xp < 9001) {
  nivel = "Ascendente";
} else if (xp < 10001) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// Exibe a mensagem final
console.log(`O herói ${nome} tem ${xp} de XP e está no nível ${nivel}`);
