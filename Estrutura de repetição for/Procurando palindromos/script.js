const palavra = prompt("Digite a palavra para verificar se ela é um palíndromo")
let palavraInvertida = ""

for(let i = palavra.length - 1; i>=0; i--){
    palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida){
    alert(palavra + " é um plaíndromo")
}else{
    alert(palavra + " não é um palíndromo\n\n" + palavra + " !== " + palavraInvertida)
}