
    case 1:
        let hora = 20
        console.log(hora *1)
        break 
    case 2:
    let hora1 = 40
        console.log(hora1 *2)
        break 
    case 3:
    let hora2 = 60
        console.log(hora2 *3)
        break
    case 4:
    let hora3 = 80
        console.log(hora3 *4)
    default:
    console.log("Opção invalida")
}
let dificuldade = Number(prompt("Qual é a dificuldade desse jogo? "))
switch(dificuldade){
    case 1:
        console.log("Esse jogo é fácil")
        break
    case 2:
        console.log("Esse jogo é médio")
        break
    case 3:
        console.log("Esse jogo é difícil")
}
console.log("1- Aula de yoga \n 2- Musculação\n 3- Personal trainer") 
let academia = Number(prompt("Escolha uma categoria: "))
switch(academia){
    case 1:
        console.log("Aula de yoga")
        break
    case 2:
        console.log("Musculação")
        break
    case 3:
        console.log("Personal trainer")
    default:
    console.log("Resposta incorreta")
}

console.log("Categorias")
console.log("1- Estudante")
console.log("2- Meia entrada")
console.log("3- Inteira")
let opcao = prompt("Digite a categoria: ")
switch(true){
   case opcao == "estudante":
    console.log("O valor do ingresso é 15 reais ")
    break
   case opcao == "meia entrada":
 console.log("O valor do ingresso é 10 reais")
   break
   case opcao=="inteira":
    console.log("O valor do ingresso é 5 reais")
    break
 default:
 console.log("Essa categoria não existe")
}
console.log("Exercícios físicos")
console.log("1- Atletismo")
console.log("2- Natação")
console.log("3- Ginástica")
let exercicio = prompt("Qual esporte você quer praticar? ")
switch(true){
    case exercicio == "Atletismo":
    console.log("Esse exercício é difícil")
    break
    case exercicio == "Natação":
    console.log("Esse exercício é fácil")
    break
    case exercicio == "Ginástica":
    console.log("Esse exercício é médio")
    break
    default:
    console.log("Não temos esse exercício")
}

console.log("Cursos de tecnologia")
console.log("1- Front-end")
console.log("2- Back-end")
console.log("3- Mobile")
let curso = prompt("Em quais áreas esses cursos são feitos? ")
switch(true){
    case curso == "Front-end":
    console.log("Suas áreas são: HTML, CSS e JavaScript")
    break
    case curso == "Back-end":
    console.log("Suas áreas são: Python, Java, JavaScript (com Node.js), PHP, C#, Ruby e outras")
    break
    case curso == "Mobile":
    console.log("Suas áreas são: Java, Kotlin (Android), Swift e Objective-C (iOS), além de outras como JavaScript, Dart (Flutter), C# (Xamarin) e Python")
    break
    default:
    console.log("Esse curso não existe na nossa lista")
}
/*
console.log("Instrumentos musicais")
console.log("1- Violão")
console.log("2- Bateria")
console.log("3- Flauta")
let instrumento = prompt("Qual instrumento você quer tocar? ")
switch(true){
    case instrumento == "Violão":
    console.log("Esse instrumento precisa de muita prática no seu gênero musical")
    break
    case instrumento == "Bateria":
    console.log("Esse instrumento é bem simples no seu gênero musical")
    break
    case instrumento == "Flauta":
    console.log("Esse instrumento precisa de pouca prática no seu gênero musical")
    break
    default:
    console.log("Não temos esse instrumento na lista")
}

console.log("Cursos de tecnologia")
console.log("1- Front-end")
console.log("2- Back-end")
console.log("3- Mobile")
let curso = prompt("Em quais áreas esses cursos são feitos? ")
switch(true){
    case curso == "Front-end":
    console.log("Suas áreas são: HTML, CSS e JavaScript")
    break
    case curso == "Back-end":
    console.log("Suas áreas são: Python, Java, JavaScript (com Node.js), PHP, C#, Ruby e outras")
    break
    case curso == "Mobile":
    console.log("Suas áreas são: Java, Kotlin (Android), Swift e Objective-C (iOS), além de outras como JavaScript, Dart (Flutter), C# (Xamarin) e Python")
    break
    default:
    console.log("Esse curso não existe na nossa lista")
}

console.log("Níveis de habilidade em esportes")
console.log("Caminhada")
console.log("tênis de mesa")
console.log("Futebol")
let habilidade = prompt("Quantos anos você precisa ter pra fazer esses esportes? ")
switch(true){
    case habilidade == "Caminhada":
    console.log("Não existe uma idade mínima ou máxima para praticar caminhada")
    break
    case habilidade == "tênis de mesa":
    console.log("Não existe idade mínima para praticar tênis de mesa")
    break
    case habilidade == "Futebol":
    console.log("a idade ideal costuma ser entre os 12 e 13 anos")
    break
    default:
    console.log("Não temos esse esporte na nossa lista")
}

console.log("Níveis de habilidade em esportes")
console.log("básico")
console.log("intermediário")
console.log("avançado")
let habilidade = prompt("Qual é a dificuldade de fazer ? ")
switch(true){
    case habilidade == "básico":
    console.log("1 + 1 ")
    break
    case habilidade == "intermediário":
    console.log("Pi = 3,14")
    break
    case habilidade == "avançado":
    console.log("Área = 5 Perímetro = 10")
    break
    default:
    console.log("Não existe esse exercício")
}
*/
