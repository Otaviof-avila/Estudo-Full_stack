saldoInicial = parseFloat(prompt("Digite o saldo inicial:"))
novoValor = 0
operacao = ""

do {
    operacao = prompt(
        "Escollha uma das opções:\n"+
        "1. Adicionar dinheiro\n"+
        "2. Subtrair dinheiro\n"+
        "3. Encerrar"
    )

    switch (operacao) {
        case "1":
            novoValor = parseFloat(prompt(" Digite o valor que vai ser adicionado:"))
            saldoInicial += novoValor
            alert("O novo saldo é de "+ saldoInicial)
            break;
        case "2":
            novoValor = parseFloat(prompt(" Digite o valor que vai ser subtraido:"))
            saldoInicial -= novoValor
            alert("O novo saldo é de "+ saldoInicial)
            break;
    
        default:
            break;
    }
    
} while (operacao !== "3");