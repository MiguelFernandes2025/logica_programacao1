let numero1 = Number(prompt("Digite o primeiro numero: "))
let numero2 = Number(prompt("Digite o segundo numero: "))
console.log("1- Soma")
console.log("2- Multiplicação")
console.log("3- Divisão")
console.log("4- Subtração")

let opcao = prompt("Digite uma opção: ").toLowerCase()

function soma() {
    let result = numero1 + numero2
    return result
}
function Multiplicacao() {
    let result = numero1 * numero2
    return result
}
function Divisao() {
    let result = numero1 / numero2
    return result
}
function Subtracao() {
    let result = numero1 - numero2
    return result
}
if (opcao == 1 || opcao == "Soma") {
     console.log("Resultado: ",soma())
}
else if (opcao == 2 || opcao == "Multiplicacao") {
    console.log("Resultado: ",Multiplicacao())
}
else if (opcao == 3 || opcao == "Divisao") {
    console.log("Resultado: ",Divisao())
}
else if (opcao == 4 || opcao == "Subtracao") {
    console.log("Resultado: ",Subtracao())
}

