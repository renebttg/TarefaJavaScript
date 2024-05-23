function Calcular() {
    let num1 = 10;
    let num2 = 100;

    let soma = parseFloat(num1) + parseFloat(num2);
    let subtracao = parseFloat(num1) - parseFloat(num2);
    let multiplicacao = parseFloat(num1) * parseFloat(num2);
    let divisao = parseFloat(num1) / parseFloat(num2);

    document.getElementById('soma').value = soma;
    document.getElementById('subt').value = subtracao;
    document.getElementById('divi').value = divisao;
    document.getElementById('multi').value = multiplicacao;

    console.log(soma);
    console.log(subtracao);
    console.log(multiplicacao);
    console.log(divisao);


}

function Loop() {
    let loopV = "";

    for (let i = 1; i <= 100; i++) {
        loopV += i + "";
    }

    console.log(loopV)
    document.getElementById('loop').value = loopV;
}

function Tabuada() {
    let tabuada = "";

    for (let i = 1; i <= 10; i++) {
        const num5 = 5;
        tabuada += num5 + " x " + i + " = " + (num5 * i) + "<br>";
        console.log(tabuada)

    }

    document.getElementById('tabuada').innerHTML = tabuada;
}

function TabuadaUm() {
    let tabuadaUm = "";
    let numT = parseInt(document.getElementById('numT').value);

    for (let i = 1; i <= 10; i++) {
        tabuadaUm += numT + " x " + i + " = " + (numT * i) + "<br>";
        console.log(tabuadaUm)

    }

    document.getElementById('tabuadaUm').innerHTML = tabuadaUm;
}

function Calculadora() {
    let numC1 = parseFloat(document.getElementById('numC1').value);
    let numC2 = parseFloat(document.getElementById('numC2').value);
    let op = document.getElementById('operacoes').value;
    let resultado;

    if (op === "+") {
        resultado = numC1 + numC2;
    } else if (op === "-") {
        resultado = numC1 - numC2;
    } else if (op === "*") {
        resultado = numC1 * numC2;
    } else if (op === "/") {
        resultado = numC1 / numC2;
    }

    document.getElementById('resultado').value = resultado;


}

function NumPar() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    document.getElementById('array').value = numeros;

    let pares = '';

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares += numeros[i] + ' ';
        }
    }
    document.getElementById('pares').value = pares;

}

function CustoCarro() {
    let custoFabrica = parseFloat(document.getElementById('custoFabrica').value);
    let percDistribuidor = parseFloat(document.getElementById('percDistribuidor').value);
    let percImpostos = parseFloat(document.getElementById('percImpostos').value);

    let valorTotal = custoFabrica + (custoFabrica * (percDistribuidor / 100)) + (custoFabrica * (percImpostos / 100));

    document.getElementById('valorFinal').value = valorTotal;
    
    console.log(valorTotal)
}