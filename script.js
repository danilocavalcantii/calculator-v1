let display = document.getElementById("display");

let numeroAnterior = "";
let operacaoAtual = "";
let novoNumero = false;

function colocarNumero(numero) {
    if (novoNumero) {
        display.value = "";
        novoNumero = false;
    }
    display.value += numero;
}

function limpar() {
    display.value = "";
    numeroAnterior = "";
    operacaoAtual = "";
}

function operacao(op) {
    numeroAnterior = display.value;
    operacaoAtual = op;
    novoNumero = true;
}

function calcular() {

    let numeroAtual = display.value;

    if (numeroAnterior === "" || numeroAtual === "") {
        return;
    }

    let resultado = 0;

    if (operacaoAtual === "+") resultado = Number(numeroAnterior) + Number(numeroAtual);
    if (operacaoAtual === "-") resultado = Number(numeroAnterior) - Number(numeroAtual);
    if (operacaoAtual === "*") resultado = Number(numeroAnterior) * Number(numeroAtual);
    if (operacaoAtual === "/") resultado = Number(numeroAnterior) / Number(numeroAtual);

    display.value = resultado;
}





