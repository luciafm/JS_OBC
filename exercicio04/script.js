let nome01 = prompt("Digite o nome do personagem: ");
let ataque = parseInt(prompt("Digite o poder de ataque: "));

let nome02 = prompt("Digite o nome do personagem: ");
let pdeVidas = parseInt(prompt("Digite os pontos de vida: "));
let defesa = parseInt(prompt("Digite o poder de defesa: "));
let escudo = prompt("O personagem tem escudo? (sim/não): ");

let dano = 0;

if (ataque > defesa && escudo.toLowerCase() !== "sim") {
    dano = ataque - defesa;
    pdeVidas -= dano;
} else if (ataque > defesa && escudo.toLowerCase() === "sim") {
    dano = (ataque - defesa) / 2;
    pdeVidas -= dano;
} else {
    dano = 0;
}

alert(
    "Dano causado: " + dano +
    "\nINFORMAÇÕES ATUALIZADAS: " +
    "\nPersonagem 01: " + nome01 +
    "\nAtaque: " + ataque +
    "\nPersonagem 02: " + nome02 +
    "\nPontos de vida: " + pdeVidas +
    "\nDefesa: " + defesa +
    "\nEscudo: " + escudo
)
