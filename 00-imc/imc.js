/* todas as variáveis serão usadas pela única função 'imc', portanto, elas devem ser posicionadas dentro da função (variáveis locais). */

const calcular = document.getElementById('calcular');    /* pega o conteúdo id="calcular" */

function imc () {
    const nome = document.getElementById('nome').value;       /* pega o valor id="nome"         */
    const altura = document.getElementById('altura').value;   /* pega o valor id="altura"       */
    const peso = document.getElementById('peso').value;       /* pega o valor id="peso"         */
    const resultado = document.getElementById('resultado');   /* pega o conteúdo id="resultado" */

    if ((nome !== '') && (altura !== '') && (peso !== '')) {   /* Verificação - campos preenchidos */
        const valorIMC = (peso / (altura*altura)).toFixed(1);  /* .toFixed(2): resultado com 1 casas decimal */
        
        let classificacao = '';
        
        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        }

            else if (valorIMC < 25) {
                classificacao = 'com peso ideal. Parabéns!';
            }

            else if (valorIMC < 30) {
                classificacao = 'levemente acima do peso.';
            }

            else if (valorIMC < 35) {
                classificacao = 'com obesidade grau I.';
            }

            else if (valorIMC < 40) {
                classificacao = 'com obesidade grau II.';
            }

                else {
                    classificacao = 'com obesidade grau III. Cuidado!';
                }
        
                resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
    } 
    
    else {
        resultado.textContent = 'Preencha todos os campos.';   /* textContent usa o conteúdo de dentro da div */
    }
}

calcular.addEventListener('click', imc); /* quando o usuário clicar em 'calcular', a função 'imc' é chamada */