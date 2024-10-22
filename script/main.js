console.log('test js dom')

const elementLampadina = document.getElementById('lampadina')

const elementBody = document.querySelector('body')

const elementTitle = document.querySelector('.main-title')

const onOffButton = document.getElementById('on-off')



// mi creo una variabile che indica lo stato della lampadina

// Inizializzazione
// se lo stato è true(Accesa)
// Il messaggio del bottone è spegni
// L'immagine è della lampadina accesa



  
onOffButton.addEventListener('click', function () {
    onOffButton.classList.toggle('active')
    let buttonText = 'ACCENDI'
    let imgContent = './img/white_lamp.png'
    let background = 'rgb(5, 28, 90)'
    let color = 'white'


    if (onOffButton.classList.contains('active')){

        elementLampadina.classList.remove('lamp-off')
        elementLampadina.classList.add('lamp-on')
        buttonText = 'SPEGNI'
        imgContent ='./img/yellow_lamp.png'
        background='rgb(88, 183, 228)'
        color ='black'


    }else{
        elementLampadina.classList.remove('lamp-on')
        elementLampadina.classList.add('lamp-off')
        
    }

    onOffButton.innerText = buttonText;
    elementLampadina.src = imgContent
    elementBody.style.backgroundColor = background
    elementTitle.style.color = color
    
  

  });