let listaDePacintes = []
let opcao = ""


do {
    let pacientes = ""
    for(let i = 0; i < listaDePacintes.length; i++){
        pacientes += (i+1) + "º - " + listaDePacintes[i] + "\n"
    }

    opcao = prompt("Pacientes:\n" + pacientes + "Escollha uma opção\n1.Novo paciente\n 2.Consultar paciente\n 3.Sair" )
    switch (opcao) {
        case "1":
            const novoPaciente = prompt("Digite o nome do paciente:")
            listaDePacintes.push(novoPaciente)
            break;
        case "2":
            const pacienteConsultado = listaDePacintes.shift()
            alert(pacienteConsultado + " removido da fila")
            break
        case "3":
            alert("Encerrando programa...")
            break;
        default:
            alert("Opção inválida!")
            break;
    }
} while (opcao !=="3");