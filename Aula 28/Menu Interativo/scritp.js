let opcao = ""


do {
    opcao = prompt(
        "EScolha uma das opções:\n" +
        "1. Opção Um\n" + 
        "2. Opção Dois\n" +
        "3. Opção Três\n" +
        "4. Opção Quatro\n" +
        "5. Sair"
        )

        switch (opcao) {
            case "1":
                alert("Você escolheu a opçâo 1")
                break;
             case "2":
                alert("Você escolheu a opçâo 2")
                break;
             case "3":
                alert("Você escolheu a opçâo 3 ")
                break;
             case "4":
                alert("Você escolheu a opçâo 4")
                break;
             case "5":
                alert("Você escolheu a opçâo 5")
                break;   
            default:
                break;
        }




} while (opcao !== "5");