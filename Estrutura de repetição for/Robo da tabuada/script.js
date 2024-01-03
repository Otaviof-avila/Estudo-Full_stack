let numero = prompt("Digite o numero para ser executada as operações")
let resultado = ""

for(let i=1; i<=20;i++){
    resultado += "->" + numero + "*" + i + "=" + (numero * i) + "\n"
}

alert("Resultado da tabuada de " + numero + "\n\n" + resultado)