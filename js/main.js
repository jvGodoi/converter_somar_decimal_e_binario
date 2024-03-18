
// Função Para Realizar o Cálculo da Conversão de Decimal para Binário

function calcDecParaBin(n1) {
    let bin = []
    while (n1 > 0) {
        var resto = n1 % 2;
        bin.push(resto);
        n1 = Math.floor(n1 / 2)
    }
    bin.reverse();
    return bin.join("")
}

// Função Para Retornar o Resultado da Conversão de Decimal para Binário

function resultCalcDecParaBin() {
    let dec = parseInt(document.getElementById("btn_bin").value)
    let bin = calcDecParaBin(dec)
    document.getElementById("result_convert--bin-dec").innerText = bin;
}

// Função Para Realizar o Cálculo da Conversão de Binário para Decimal

function calcBinParaDec(num) {
    let tamanho = num.length
    let decimal = 0;
    let i;

    for (i = tamanho - 1; i >= 0; i--) {
        var digito = parseInt(num[i])
        var potencia = Math.pow(2, tamanho - 1 - i);
        decimal = decimal + (digito * potencia)
    }
    return decimal
}

// Função Para Retornar o Resultado da Conversão de Binário para Decimal

function resultCalcBinParaDec() {
    let numeroBinario = document.getElementById("btn_dec").value
    let resultado = calcBinParaDec(numeroBinario)
    document.getElementById("result_convert--dec-bin").innerText = resultado
}

// Função para realizar a soma entre os binários

function soma(bin1, bin2) {
    var resultado = ""
    var carry = 0;
    var i = bin1.length - 1
    var j = bin2.length - 1

    while (i >= 0 || j >= 0 || carry > 0) {

        var bit1 = 0
        var bit2 = 0

        if (i >= 0) {
            bit1 = parseInt(bin1[i])
            i -= 1
        }
        if (j >= 0) {
            bit2 = parseInt(bin2[j])
            j -= 1
        }

        var soma = bit1 + bit2 + carry
        resultado = (soma % 2) + resultado
        carry = Math.floor(soma / 2)
    }
    return resultado
}

// Função para retornar a soma dos binários

function resultSomaBin() {
    let binario1 = document.getElementById("bin_num1").value
    let binario2 = document.getElementById("bin_num2").value
    let resultado = soma(binario1, binario2)
    document.getElementById("resultado_soma").innerText = resultado
}

// Função para calcular a subtração entre dois binários

function subtracao(bin1, bin2) {

    while (bin1.length < bin2.length) {
        bin1 = "0" + bin1;
    }
    while (bin2.length < bin1.length) {
        bin2 = "0" + bin2;
    }

    var resultado = "";
    var emprestimo = 0;

    for (var i = bin1.length - 1; i >= 0; i--) {
        var bit1 = parseInt(bin1[i]);
        var bit2 = parseInt(bin2[i]);

        bit1 -= emprestimo;

        if (bit1 < bit2) {
            bit1 += 2;
            emprestimo = 1;
        } else {
            emprestimo = 0;
        }

        var diferenca = bit1 - bit2;
        resultado = diferenca.toString() + resultado;
    }

    if (resultado === "") {
        resultado = "0";
    }

    return resultado;
}

// Função para retornar o resultado da subtração entre dois binários
function resultSubBin() {
    let binario1 = document.getElementById("bin_sub_1").value
    let binario2 = document.getElementById("bin_sub_2").value
    let resultado = subtracao(binario1, binario2)
    document.getElementById("resultado_sub").innerText = resultado
}

function multBinarios (binario1, binario2){
    let int1 = parseInt(binario1, 2)
    let int2 = parseInt(binario2, 2)
    return (int1 * int2).toString(2)
}

function resultMultBinarios(){
    let binario1 = document.getElementById("bin_num1").value
    let binario2 = document.getElementById("bin_num2").value
    let resultado = multBinarios(binario1, binario2)
    document.getElementById("resultado_mult").innerText = resultado
}