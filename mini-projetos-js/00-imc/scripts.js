const calcular = document.getElementById('calcular');

function imc() {
    
    // Capturar todos os dados necessários (todos esses elementos precisam tem um 'id' para serem capturados)
    const nome = document.getElementById('nome').value; // .value: pega o valor do elemento (campo preenchido)
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    // Validação - campos preenchidos
    if ((nome !== '') && (altura !== '') && (peso !== '')) {
        
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        
        let classificacao = '';

        if (valorIMC < 18.5) classificacao = 'abaixo do peso.';
        else if (valorIMC < 25) classificacao = 'com o peso ideal. Parabéns!';
        else if (valorIMC < 30) classificacao = 'levemente acima do peso.';
        else if (valorIMC < 35) classificacao = 'com obesidade grau I.';
        else if (valorIMC < 40) classificacao = 'com obesidade grau II.';
        else classificacao = 'com obesidade grau III.';

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`; // .textContent: define ou obtém um conteúdo de texto


    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }
}

// quando houver interação com o botão 'calcular', a função 'imc' será chamada
calcular.addEventListener('click', imc);