const atacante = prompt("Qual é o nome do personagem atacante")
const pontosDeAtaque = parseFloat(prompt("Quantos pontos de ataque ele possui?")) 

const defensor = prompt("Digite o nome do defensor:")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele tem:"))
const pontosDeDefesa = parseFloat(prompt("Quais seus pontos de defesa:"))
const shield = prompt("Ele possui escudo?[Sim/Não}")

let danoCausado = 0

if (pontosDeAtaque > pontosDeDefesa && shield === "Não"){
    danoCausado = pontosDeAtaque - pontosDeDefesa 
}
else if (pontosDeAtaque > pontosDeDefesa && shield === "Sim"){
    danoCausado = (pontosDeAtaque - pontosDeDefesa) / 2 
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)