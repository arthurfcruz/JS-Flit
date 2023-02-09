//1.5 - 1

var nome = ""
var senha = ""

function Cadastro() {
    var nome = prompt("Digite seu nome")
    var senha = prompt("Digite sua senha")
}

//1.5 - 2

function SolicitarDados(nome,senha) {
    var nome2 = prompt("Digite seu nome")
    var senha2 = prompt("Digite sua senha")

    if (nome2 == nome && senha2 == senha) {
        return true
    }else{
        return false
    } 
}
