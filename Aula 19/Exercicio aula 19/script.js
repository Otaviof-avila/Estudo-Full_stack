const medida = parseFloat(prompt("Digite a medida em metros:"))

const unidade = parseFloat(prompt(
    "Digite para qual medida deseja transformar:" +
    "\n1) Milímetro (mm)" +
    "\n2) Centímetro (cm)" + 
    "\n3) Decímetro (dm)" +
    "\n4) Decânmetro (dam)" +
    "\n5) Hectômetro (hm)" +
    "\n6) Quilômetro (km)"
    ))



switch (unidade){
    case 1 :
        alert(medida + " metros transformados em mm é igual a " + medida * 1000 + "mm")
        break;

    case 2 :
        alert(medida + " metros transformados em cm é igual a " + medida * 100 + "cm")
        break;

    case 3 :
        alert(medida + " metros transformados em dm é igual a " + medida * 10 + "dm")
        break;

    case 4 :
        alert(medida + " metros transformados em dam é igual a " + medida / 10 + "dam")
        break;

    case 5 :
        alert(medida + " metros transformados em hm é igual a " + medida / 100 + "hm")
        break;

    case 6 :
        alert(medida + " metros transformados em km é igual a " + medida / 1000 + "km")
        break;

    default:
        alert("Opção Invalida!")
        break
} 


