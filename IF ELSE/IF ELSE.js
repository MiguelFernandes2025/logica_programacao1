let idade = 
if (idade >=18){
    console.log  ("maior de idade")
} else{
    console.log("menor de idade")
}

let horario = prompt("digite o horário: ")
if (horario <= 12){
    console.log("bom dia")
}
else if (horario <= 18 ){
    console.log("boa tarde")
}
else if (horario >= 18){
    console.log("boa noite")
}

let idade = 18
if (idade <=16){
    console.log ("menores de 16 anos não podem entrar")
}
else{
    console.log ("pode entrar")
}

let n1 = prompt("Digite o numero 1: ")
let n2 = prompt("Digite o numero 2: ")
if (n1 > n2){
    console.log("N1 é maior")
}
else{
    console.log("N2 é maior")
}

let temperatura = prompt("Digite a temperatura: ")
if (temperatura <= 20){
    console.log("está muito frio")
}
else if (temperatura <= 30){
    console.log("está bem térmico")
}
else if (temperatura <= 40){
    console.log("está muito quente")
}

let felicidade = prompt("Digite a palavra correta: ")
if(felicidade === "feliz"){
    console.log("Palavra correta")
}
else{
    console.log("Palavra incorreta")
}

let num = prompt("quantas moedas você tem? ")
if(num <= 10){
    console.log("Poucas moedas")
}
else if (num >= 10 && num<= 20){
    console.log("Quantidade média")
}
else if (num >= 20){
    console.log("Muitas moedas")
}

let temperatura = prompt("Digite a temperatura: ")
if(temperatura >= 30){
    console.log("Muito quente")
}
else if(temperatura >= 20 && temperatura<= 30){
    console.log("Calor")
}
else if(temperatura<= 20){
    console.log("Frio")
}

let num = prompt("Digite um número: ")
if (num <0){
    console.log("Número negativo")
}
else{
    console.log("Número positivo")
}

let nota = prompt("Você tirou: ")
if (nota >= 7){
    console.log("Aprovado")
}
else if (nota <= 7){
    console.log("Reprovado")
}

let animal = prompt("O animal é: ")
let animal1 = "Cachorro"
let animal2 = "Gato"
let animal3 = "Pássaro"
if (animal1 === "Cachorro" && animal2 === "Gato" && animal3 === "Pássaro"){
    console.log("Animal correto")
}
else{
    console.log("Animal não listado")
}

let num = prompt("Dia da semana: ")
if (num >6){
    console.log("Fim de semana")
}
else{
    console.log("Dia útil")
}

let idade = prompt("Quantos anos de experiência você tem? ")
if (idade >2){
    console.log("Experiente")
}
else if (idade <2){
    console.log("Iniciante")
}

let num = prompt("Digite um número dentro de 10 e 20: ")
if (num <=20){
    console.log("Dentro do intervalo")
} 
else if (num >=10){
    console.log("Fora do intervalo")
}

let idade = prompt("Quantos anos você tem? ")
if (idade >=18){
    console.log("Você já pode tirar a sua carteira de motorista")
}
else if (idade <=18){
    
    console.log ("Não é permitido")
}


let num = prompt("Digite um número: ")
if (num >0){
    console.log("Maior do que zero")
}
else{
    console.log("Menor do que zero")
}
if (num >=0){
    console.log("Zero")
}
