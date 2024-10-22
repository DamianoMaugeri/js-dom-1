console.log('test js dom')

const elementLampadina = document.getElementById('lampadina')

const elementBody = document.querySelector('body')

const elementTitle = document.querySelector('.main-title')

const onOffButton = document.getElementById('on-off')



// mi creo una variabile che indica lo stato della lampadina
let status = false

// Inizializzazione
let buttonText = 'ACCENDI'
let background = 'rgb(5, 28, 90)'
let color = 'white'
let imgContent = '../img/white_lamp.png'
elementLampadina.classList.add('lamp-off')


onOffButton.addEventListener('click',function(){
    
})


// se lo stato è true(Accesa)
// Il messaggio del bottone è spegni
// L'immagine è della lampadina accesa
if (status){
    buttonText = 'SPEGNI'
    imgContent ='../img/yellow_lamp.png'
    background='rgb(88, 183, 228)'
    color ='black'
    elementLampadina.classList.remove('lamp-off')
    elementLampadina.classList.add('lamp-on')
    
}

elementLampadina.src = imgContent
onOffButton.innerText = buttonText;
elementBody.style.backgroundColor = background
elementTitle.style.color = color

console.log(status)




