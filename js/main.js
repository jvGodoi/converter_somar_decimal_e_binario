
// Função Para Realizar o Cálculo da Conversão de Decimal para Binário

function calcDecParaBin(n1){
    let bin = []
    while(n1 > 0){
        var resto = n1 % 2;
        bin.push(resto);
        n1 = Math.floor(n1 / 2)
    }
    bin.reverse();
    return bin.join("")
}

// Função Para Retornar o Resultado da Conversão de Decimal para Binário

function resultCalcDecParaBin(){
    let dec = parseInt(document.getElementById("btn_bin").value)
    let bin = calcDecParaBin(dec)
    document.getElementById("result_convert--bin-dec").innerText = bin;
}

// Função Para Realizar o Cálculo da Conversão de Binário para Decimal

function calcBinParaDec(num){
    let tamanho = num.length
    let decimal = 0;
    let i;

    for(i = tamanho - 1; i >= 0; i--){
        var digito = parseInt(num[i])
        var potencia = Math.pow(2, tamanho - 1 - i);
        decimal = decimal + (digito * potencia)
    }
    return decimal
}

// Função Para Retornar o Resultado da Conversão de Binário para Decimal

function resultCalcBinParaDec(){
    let numeroBinario = document.getElementById("btn_dec").value
    let resultado = calcBinParaDec (numeroBinario)
    document.getElementById("result_convert--dec-bin").innerText = resultado
}

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

function resultSomaBin(){
    let binario1 = document.getElementById("bin_num1").value
    let binario2 = document.getElementById("bin_num2").value
    let resultado = soma(binario1, binario2)
    document.getElementById("resultado_soma").innerText = resultado
}