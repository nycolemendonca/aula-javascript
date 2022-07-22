const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

// indexOf: Método que procura uma string dentro de determinada string.
function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

// troca a imagem da lâmpada
function lampOn() {
    if (!isLampBroken()) { // liga/desliga apenas se a lâmpada não estiver quebrada
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg';
}

function lampOnOff() {
    if (turnOnOff.textContent == 'Ligar') {
        lampOn();
        turnOnOff.textContent = 'Desligar'; // muda o texto pada 'desligar'
    } else {
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}

// pegar ação do botão 'ligar/desligar'
turnOnOff.addEventListener('click', lampOnOff);

// ação do mouse liga/desliga a lâmpada
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseout', lampOff);

// double click quebra a lâmpada
lamp.addEventListener('dblclick', lampBroken);