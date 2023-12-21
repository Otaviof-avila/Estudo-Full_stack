let saldoInicial = parseFloat(prompt("Informe o saldo inicial:"))
let novoValor = 0
let operacao = ""

do {
    operacao = prompt(

        "Saldo disponivel: R$ "+saldoInicial+
        "\n1. Adicionar dinheiro"+
        "\n2. Subtrair dinheiro"+
        "\n3. Encerrar"
    )

    switch (operacao) {
        case "1":
            novoValor = parseFloat(prompt(" Digite o valor que vai ser adicionado:"))
            saldoInicial += novoValor
            alert("O novo saldo é de "+ saldoInicial)
            break;
        case "2":
            novoValor = parseFloat(prompt(" Digite o valor que vai ser subtraido:"))
            saldoInicial -= novgtioValor
            alert("O novo saldo é de "+ saldoInicial)
            break;
    
        default:
            break;
    }

} while (operacao !== "3");