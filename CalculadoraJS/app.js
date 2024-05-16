let num1 = 10;
let num2 = 100;

let soma = num1 + num2;
let subtracao = num2 - num1;
let divisao = num2 / num1;
let multiplicacao = num1 * num2;

alert(`Soma: ${soma}, Subtração: ${subtracao}, Divisão: ${divisao}, Multiplicação: ${multiplicacao}`);

for (let i = 10; i <= 100; i++) {
    console.log(i); 
}


let valorFixo = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${valorFixo} x ${i} = ${valorFixo * i}`); 
}


function calcular() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operacao = document.getElementById('operacao').value;
    let resultado;

    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operação inválida";
    }

    document.getElementById('resultado').innerText = resultado;
}

let array = [1,2,3,4,5,6,7,8,9,10];
let valoresPares = document.getElementById('valoresPares');
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        let li = document.createElement('li');
        li.textContent = array[i];
        valoresPares.appendChild(li);
    }
}


function calcularCustoFinal() {
    let custoFabrica = parseFloat(document.getElementById('custoFabrica').value);
    let percDistribuidor = parseFloat(document.getElementById('percDistribuidor').value);
    let percImpostos = parseFloat(document.getElementById('percImpostos').value);

    let custoFinal = custoFabrica + (custoFabrica * (percDistribuidor / 100)) + (custoFabrica * (percImpostos / 100));

    document.getElementById('valorFinal').innerText = custoFinal;
}
