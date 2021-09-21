let input_altura = document.querySelector('#altura');
let input_peso   = document.querySelector('#peso');
const calcular = document.querySelector('.calcular');
const resultado = document.querySelector('.resultado');
const bt_enviar_texto = document.querySelector('.bt-enviar-texto');
const bt_limpar = document.querySelector('.bt-limpar');
const textarea_normaliza = document.querySelector('#normaliza-texto');
const resultado_normalizacao = document.querySelector('.resultado-normalizacao p');
let inputElement = document.querySelector('#texto');
let invertido = document.querySelector('.invertido');
let texto = '';
console.log(texto);
let bt_enviar = document.querySelector('.bt-enviar');
let arr = [];


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

bt_enviar_texto.addEventListener('click' , function(){
    console.log('clicou botão enviar');
    let texto_textarea = textarea_normaliza.value;
    resultado_normalizacao.textContent = normalizaTexto(texto_textarea);
})

bt_limpar.addEventListener('click' , function(){
    console.log('clicou botão enviar');
    textarea_normaliza.value = '';
    resultado_normalizacao.textContent = '';
})

function preparaValor(valor){
    valor = parseFloat(valor);
    return valor.toFixed(2);
}





function normalizaTexto(texto){

    let t_final = '';
    t_final = texto;   
    t_final = t_final.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '')
    //t_final = t_final.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    //t_final = t_final.replaceAll(',','').trim();
    //t_final = t_final.replaceAll(' ','_').trim();
    //t_final = t_final.replaceAll(':','_').trim();
    t_final = t_final.trim();
    t_final = t_final.replaceAll(' ','_');
    t_final = t_final.toLowerCase();
    return t_final;

}


bt_enviar.addEventListener('click', function(){
    texto = inputElement.value;
    console.log('entrou aqui ' + texto);
    if(texto.length > 0){
        console.log('depois aqui');
        texto = texto.split('');
        texto.map(elemento => arr.unshift(elemento));
        texto = arr.toString();
        texto = texto.replaceAll(',','');
        console.log(texto);
        invertido.textContent = texto;
    } else {
        alert('Preencha o campo texto!');
    }
});

