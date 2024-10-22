console.log('test js dom')

const elementLampadina = document.getElementById('lampadina')

const elementBody = document.querySelector('body')

const elementTitle = document.querySelector('.main-title')

const onOffButton = document.getElementById('on-off')

// Configurazione

const IMG_LAMP_OFF = '../img/white_lamp.png';
const IMG_LAMP_ON = '../img/yellow_lamp.png';
const TEXT_ON = 'SPEGNI';
const TEXT_OFF = 'ACCENDI';
const BACKGROUND_ON = 'rgb(88, 183, 228)';
const BACKGROUND_OFF = 'rgb(5, 28, 90)';
const BUTTON_TEXT_COLOR_ON = 'black';
const BUTTON_TEXT_COLOR_OFF = 'white';





// mi creo una variabile che indica lo stato della lampadina
let lampStatus = true;

// Inizializzazione
let buttonText;
let background;
let color;
let imgContent;


// se lo stato è true(Accesa)
// Il messaggio del bottone è spegni
// L'immagine è della lampadina accesa
if (lampStatus) {
    buttonText = TEXT_ON
    imgContent = IMG_LAMP_ON
    background = BACKGROUND_ON
    color = BUTTON_TEXT_COLOR_ON
    elementLampadina.classList.add('lamp-on')

} else {
    buttonText = TEXT_OFF
    background = BACKGROUND_OFF
    color = BUTTON_TEXT_COLOR_OFF
    imgContent = IMG_LAMP_OFF
    elementLampadina.classList.add('lamp-off')
}

elementLampadina.src = imgContent
onOffButton.innerText = buttonText;
elementBody.style.backgroundColor = background
elementTitle.style.color = color


onOffButton.addEventListener('click', function () {
    lampStatus = !lampStatus;

    if (lampStatus) {
        buttonText = TEXT_ON
        imgContent = IMG_LAMP_ON
        background = BACKGROUND_ON
        color = BUTTON_TEXT_COLOR_ON
        elementLampadina.classList.add('lamp-on')
        elementLampadina.classList.remove('lamp-off')

    } else {
        buttonText = TEXT_OFF
        background = BACKGROUND_OFF
        color = BUTTON_TEXT_COLOR_OFF
        imgContent = IMG_LAMP_OFF
        elementLampadina.classList.add('lamp-off')
        elementLampadina.classList.remove('lamp-on')
    }

    elementLampadina.src = imgContent
    onOffButton.innerText = buttonText;
    elementBody.style.backgroundColor = background
    elementTitle.style.color = color
})
