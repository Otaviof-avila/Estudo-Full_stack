let primeiroNumero = parseFloat(prompt("Digite o primeiro numero:"));
let operacao = prompt("selecione a operação Adiçao(+), Subtração(-), Multiplicação(*),Divisão(/)");
let segundoNumero = parseFloat(prompt("Digite o segiundo numero:"));    
let expr;

switch (operacao) {
    case "+":
        expr = primeiroNumero + segundoNumero;
        break;

    case "-":
        expr = primeiroNumero - segundoNumero;
        break;
    
    case "*":
        expr = primeiroNumero * segundoNumero;
        break;
    
    case "/":
        expr = primeiroNumero / segundoNumero;
        break;
    
    default:
        alert("Opção inválida");
        break;
}       

let printResultado = document.getElementById("resultado");
printResultado.innerHTML = "O resultado de " + primeiroNumero + " "  + operacao + " " + segundoNumero + " é igual à " + expr;