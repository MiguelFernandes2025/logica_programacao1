/*let usuario = prompt("Digite o usuário: ")
while (usuario !== "Kovac"){
    console.log("Usuário errado!")
    usuario = prompt("Digite o usuário: ")
}
console.log("Você acertou!")

let senha = Number(prompt("Digite a senha: "))
while (senha !== 0909){
    console.log("Senha incorreta")
    senha = Number(prompt("Digite a senha: "))
}
console.log("Senha feita com sucesso")

let senha = prompt("Digite a senha: ")
let confirmacao = prompt("Confirme a nova senha: ")
while (senha !== confirmacao){
    console.log("Senha errada")
    senha = prompt("Digite a senha: ")
    confirmacao = prompt("Confirme a nova senha: ")
}
console.log("Senha correta")

let usuario = prompt("Digite o usuário: ")
let senha = Number(prompt("Digite a senha: "))
while (usuario !== "Admin" && senha !== 1234){
    console.log("Erro")
    usuario = prompt("Digite o usuário: ")
    senha = Number(prompt("Digite a senha: "))
}
console.log("Usuário e senha digitados com sucesso")

let usuario = prompt("Digite o usuário: ")
let senha = Number(prompt("Digite a senha: "))
while (usuario !== "Admin" && senha !== 1234){
    console.log("Usuário ou senha incorretos.")
    usuario = prompt("Digite o usuário: ")
    senha = Number(prompt("Digite a senha: "))
}
console.log("Digitados corretamente")

let limite = 0
let usuario = prompt("Digite o usuário: ")
let senha = Number(prompt("Digite a senha: "))

while (usuario !== "Sesi" && senha !== 240){
    console.log("Tente novamente.")
    usuario = prompt("Digite o usuário: ")
    senha = Number(prompt("Digite a senha: "))
    limite++
    if (limite >=2){
        console.log("Acesso bloqueado.")
        break
    }
}
console.log("Senha correta")
 
let nome = prompt("Digite o seu nome: ")
let senha = Number(prompt("Digite a sua senha: "))

while (nome !== "Miguel" && senha !== 1234){
    console.log("Dados errados")
    nome = prompt("Digite o seu nome: ")
    senha = Number(prompt("Digite a sua senha: "))
}
console.log("Login efetuado")

let usuario = prompt("Digite o usuário: ")
let senha = prompt("Digite a senha: ")
while(usuario !== "Corinthians" && senha !== "Fiel"){
    let opcao = prompt("Esqueceu a senha? (sim/não)")
        if (opcao == "s"){
            console.log("A sua senha é Fiel")
        }
        usuario = prompt("Digite o usuário: ")
        senha = prompt("Digite a senha")
}
console.log("Login feito")
*/    
let usuario = prompt("Digite o usuário: ")
let senha = Number(prompt("Digite a senha: "))
while(usuario !== "Lula" && senha !== 13){
    console.log("Tente de novo!")
    usuario = prompt("Digite o usuário: ")
    senha = Number(prompt("Digite a senha: "))
}
    console.log("Você está logado!")
    console.log("Sair")
