console.log("Escolha o seu sistema operacional")
console.log("1- CMD")
console.log("2- Terminal Linux")
let opcao = Number(prompt("Digite a opção desejada: "))
if (opcao == 1){
    console.log("Você escolheu o CMD")
    let comando = prompt("Digite o comando desejado: ").toLowerCase()
    switch (true){
        case comando == "dir":
            console.log("Você escolheu o comando dir")
            console.log("O comando dir serve para listar os arquivos de uma pasta")
            console.log("dir e o nome da pasta")
            break
        case comando == "mkdir":
            console.log("Você escolheu o comando mkdir")
            console.log("Assim como o md, os dois criam novos diretórios")
            console.log("mkdir e o nome do diretório")
            break
        case comando == "del":
            console.log("Você escolheu o comando del")
            console.log("Esse comando é usado para excluir os arquivos")
            console.log("del arquivo.txt - del *.txt (remove todos os arquivos com extensão de .txt)")
            break
        case comando == "rename":
            console.log("Você escolheu o comando rename")
            console.log("Assim como o ren, os dois renomeiam arquivos ou pastas")
            console.log("rename arquivo.txt novo_arquivo.txt - rename Pasta VelhaPasta")
            break
            case comando == "move":
            console.log("Você escolheu o comando move")
            console.log("O comando move serve para mover arquivos e pastas em outro diretório")
            console.log("move arquivo.txt C:\Usuarios\Publico - .txt: move *.txt C:\Backup (move todos os arquivos .txt para a pasta) - move NovaPasta C:\Backup")
            break;
            case comando == "ipconfig":
            console.log("Você escolheu o comando ipconfig")
            console.log("Esse comando serve para exibir informações de rede")
            console.log("ipconfig /all")
            break
            default:
            console.log("Opção invalida")
    }
    }
    else if (opcao == 2){
    console.log("Você escolheu o Terminal Linux")
        let comando = prompt("Digite o comando desejado: ").toLowerCase()
    switch (true){
        case comando == "pwd":
        console.log("Você escolheu o comando pwd")
        console.log("Ele é usado para exibir o diretório atual")
        console.log("pwd <diretório>")
        break
        case comando == "rmdir":
        console.log("Você escolheu o comando rmdir")
        console.log("Ele é utilizado para remover um diretório vazio")
        console.log("rmdir <diretório>")
        break
        case comando == "touch":
        console.log("Você escolheu o comando touch")
        console.log("Esse comando é utilizado para criar um arquivo vazio")
        console.log("touch <arquivo>")
        break
        case comando == "cp":
        console.log("Você escolheu o comando cp")
        console.log("O comando cp é utilizado para copiar um arquivo")
        console.log("cp <origem> <destino>")
        break
        case comando == "rm":
        console.log("Você escolheu o comando rm")
        console.log("Ele serve para remover um arquivo")
        console.log("rm <arquivo>")
        break
        default:
    console.log("Opção inválida")
    }
}

