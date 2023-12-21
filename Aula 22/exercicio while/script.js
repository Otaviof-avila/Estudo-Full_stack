let turista = prompt("Digite seu nome:")
let cidades = ""
let contagem = 0

let continuar = prompt("Você já visitou alguma cidade?(Sim/Não)")

while (continuar === "Sim"){
    let cidade = prompt("Qual foi a cidade visitada?")
    cidades += " - " + cidade + "\n"
    contagem ++
    continuar = prompt("Você visitou alguma outra cidade ?(Sim/Não)")
}

alert(
    "Turista: " + turista +
    "\nQuantidade de cidade visitadas: " + contagem +
    "\nListas de cidades visitadas: \n" + cidades
)


