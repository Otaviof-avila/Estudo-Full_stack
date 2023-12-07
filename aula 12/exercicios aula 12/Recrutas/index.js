let anoAtual = new Date().getFullYear();



let firstName = prompt("Qual o seu primeiro nome?");
let surname = prompt("E seu Sobrenome?");
let study = prompt("Qual sua area de estudos ?");
let yearOfBirth = prompt("Digite o ano em que nasceu:");
let age = anoAtual - yearOfBirth;


var firstname = document.getElementById("nameUser");
firstname.innerHTML = "Seu nome é:" + firstName;

var printSurname = document.getElementById("sobrenome");
printSurname.innerHTML = "Seu sobrenome é:" + surname;

var printAtuacao = document.getElementById("atuacao");
printAtuacao.innerHTML = "A sua area de atuação é:" + study;

var printAge = document.getElementById("idade");
printAge.innerHTML = "Sua idade é " + age;