let veiculo = prompt("Digite o primeiro veiculo:");
let velocidadeVeiculo = parseFloat(prompt("Digite a velocidade do veiculo"));

let segundoVeiculo = prompt("Digite  o  segundo veiculo:");
let velocidadeSegundoVeiculo = parseFloat(prompt("Digite a velocidade do veiculo:"));


if (velocidadeVeiculo > velocidadeSegundoVeiculo){
    alert("O " + veiculo + "É mais rápido que o "+ segundoVeiculo)
}
else{
    alert("O " + segundoVeiculo + "É mais rápido que  "+ veiculo)
}