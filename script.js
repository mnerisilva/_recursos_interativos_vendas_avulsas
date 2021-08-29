let input_altura = document.querySelector('#altura');
let input_peso   = document.querySelector('#peso');
const calcular = document.querySelector('.calcular');
const resultado = document.querySelector('.resultado');

let imc = 0;
let altura = 0;
let peso = 0;

calcular.addEventListener('click', function(event){
    altura = input_altura.value/100;
    peso = preparaValor(input_peso.value);
    console.log(altura*altura);
    console.log(peso);
    imc = peso / parseFloat(( altura * altura ), 2);
    console.log(imc.toFixed(2));

    if(imc > 40){
        resultado.innerHTML = '<h1>Obesidade III (mórbida)</h1>';
    } else if(imc >= 35.0 && imc <= 39.9){
        resultado.innerHTML = '<h1>Obesidade grau II (severa)';
    } else if(imc >= 30.0 && imc <= 34.9){
        resultado.innerHTML = '<h1>Obesidade grau I';
    } else if(imc >= 25.0 && imc <= 29.9){
        resultado.innerHTML = '<h1>Levemente acima do peso</h1>';
    } else if(imc >= 18.6 && imc <= 24.9){
        resultado.innerHTML = '<h1>Peso ideal (parabéns)';
    }
});

function preparaValor(valor){
    valor = parseFloat(valor);
    return valor.toFixed(2);
}