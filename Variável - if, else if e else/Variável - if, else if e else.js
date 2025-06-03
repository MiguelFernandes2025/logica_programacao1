const nome = "Fernanda";
let categoria;
let idade = 27;
if (idade < 12) {
categoria = "criança"
}else if (idade > 12 && idade <= 18){
categoria = "adolescente";
}else if (idade > 18 && idade < 60){
categoria = "adulta";
}else if (idade >= 60){
categoria = "idosa";
 }
 console.log("categoria: ” + categoria);
Os códigos if e else if  verificam a idade da pessoa de acordo com as categorias acima e a variável, que verifica qualquer coisa (como exemplo, a idade)
let idade = 25
if (idade >= 16 && idade < 18 || idade >= 70)
console.log("Voto facultativo.")
else if (idade >= 18 && idade < 70) {
console.log("Voto obrigatório.")
} else {
console.log("Não vota")
}
Os códigos verificam a idade certa de uma pessoa para votar, agora com else, caso for uma idade diferente, respondendo de acordo com a variável acima
let numero = -5;
if (numero < 0)
console.log("Negativo");
else if (numero > 0) {
console.log("Positivo");
} else {
let numero = 0;
else if (numero = 0) {
console.log("Zero");
}
Esse código verificou se o número acima é negativo ou é positivo de acordo com a variável mostrada acima
let combustivel = "Gasolina"; // Altere para testar
if (combustivel === "Gasolina")
console.log("Você escolheu Gasolina");
else if (combustivel === "Álcool") {
console.log("Você escolheu Álcool");
} else {
if (combustivel === "Diesel")
console.log("Opção inválida");
}
O código acima verificou usando a variável combustível, qual das categorias acima você deve escolher
let velocidade = 70; // Altere para testar
if (velocidade <= 80)
console.log("Atenção");
else if (velocidade <= 60) {
    console.log("Dentro do limite");
} else {
console.log("Multado");
}
O código apresentado acima verifica a velocidade do seu carro em forma de variável, como está escrito acima
