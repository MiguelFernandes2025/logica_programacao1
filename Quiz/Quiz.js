let respostaCorreta = 0
let respostaIncorreta = 0

//Pergunta1
console.log("1-Em qual ano estamos?")
console.log("A - 2050")
console.log("B - 2025")
console.log("C - 2030")
console.log("D - 2060")
let pergunta1 = prompt("Digite a alternativa correta: ")
if(pergunta1 =="B" || pergunta1 == "2025"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alernativa errada! ")
    respostaIncorreta ++
}

//Pergunta2
console.log("2-Quem descobriu a América?")
console.log("A - Dom Pedro")
console.log("B - Pedro Álvares Cabral")
console.log("C - Cristovão Colombo")
console.log("D - Napoleão")
let pergunta2 = prompt("Digite a alternativa correta: ")
if(pergunta2 =="C" || pergunta2 == "Cristovão Colombo"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alernativa errada! ")
    respostaIncorreta ++
}

//Pergunta3
console.log("3-Quanto vale o valor de Pi?")
console.log("A - 3,14")
console.log("B - 1,11")
console.log("C - 5,12")
console.log("D - 7,06")
let pergunta3 = prompt("Digite a alternativa correta: ")
if(pergunta3 =="A" || pergunta3 == "3,14"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alernativa errada! ")
    respostaIncorreta ++
}

//Pergunta4
console.log("4-Quem é a maior potência do mundo?")
console.log("A - Brasil")
console.log("B - França")
console.log("C - China")
console.log("D - Estados Unidos")
let pergunta4 = prompt("Digite a alternativa correta: ")
if(pergunta4 =="D" || pergunta4 == "Estados Unidos"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alernativa errada! ")
    respostaIncorreta ++
}

//Pergunta5
console.log("5-Em qual direção a bússola sempre aponta?")
console.log("A - Sul")
console.log("B - Oeste")
console.log("C - Leste")
console.log("D - Norte")
let pergunta5 = prompt("Digite a alternativa correta: ")
if(pergunta5 =="D" || pergunta5 == "Norte"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alernativa errada! ")
    respostaIncorreta ++
}

//Pergunta6
console.log("6-Como se chamam os insetos que coletam mel?")
console.log("A - Pássaros")
console.log("B - Abelhas")
console.log("C - Cavalos")
console.log("D - Peixes")
let pergunta6 = prompt("Digite a alternativa correta: ")
if(pergunta6 =="B" || pergunta6 == "Abelhas"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alernativa errada! ")
    respostaIncorreta ++
}

//Pergunta7
console.log("7-Qual é o maior parque temático do mundo?")
console.log("A - Universal")
console.log("B - Beto Carrero")
console.log("C - Disney")
console.log("D - Hopi Hari")
let pergunta7 = prompt("Digite a alternativa correta: ")
if(pergunta7 =="C" || pergunta7 == "Disney"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alernativa errada! ")
    respostaIncorreta ++
}

//Pergunta8
console.log("8-Qual é o país que mais conquistou as copas do mundo?")
console.log("A - Brasil")
console.log("B - Argentina")
console.log("C - Alemanha")
console.log("D - Itália")
let pergunta8 = prompt("Digite a alternativa correta: ")
if(pergunta8 =="A" || pergunta8 == "Brasil"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alernativa errada! ")
    respostaIncorreta ++
}

//Pergunta9
console.log("9-Qual jogador de futebol foi considerado o rei do futebol?")
console.log("A - Maradona")
console.log("B - Pelé")
console.log("C - Mbapé")
console.log("D - Cristiano Ronaldo")
let pergunta9 = prompt("Digite a alternativa correta: ")
if(pergunta9 =="B" || pergunta9 == "Pelé"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alernativa errada! ")
    respostaIncorreta ++
}

//Pergunta10
console.log("10-Quando ocorreu a primeira transmissão de TV no Brasil?")
console.log("A - Setembro de 1950")
console.log("B - Março de 1948")
console.log("C - Julho de 1935")
console.log("D - Dezembro de 1961")
let pergunta10 = prompt("Digite a alternativa correta: ")
if(pergunta10 =="A" || pergunta10 == "Setembro de 1950"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alernativa errada! ")
    respostaIncorreta ++
}
//Exibir Resultado
console.log("\n Resumo Final")
console.log("Respostas corretas: " + respostaCorreta)
console.log("Respostas incorretas: " + respostaIncorreta)
