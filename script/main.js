console.log('test js dom')

const elementLampadina = document.getElementById('lampadina')

const elementBody = document.querySelector('body')

const elementTitle = document.querySelector('.main-title')

const onOffButton = document.getElementById('on-off')







  
onOffButton.addEventListener('click', function () {
    onOffButton.classList.toggle('active');
    elementLampadina.classList.remove('lamp-on')
    elementLampadina.classList.add('lamp-off')
    onOffButton.innerText = 'ACCENDI'
    elementLampadina.src='./img/white_lamp.png'
    elementBody.style.backgroundColor='rgb(5, 28, 90)'
    elementTitle.style.color='white'



    if (onOffButton.classList.contains('active')){
        onOffButton.innerText = 'SPEGNI'
        elementLampadina.src='./img/yellow_lamp.png'
        elementLampadina.classList.remove('lamp-off')
        elementLampadina.classList.add('lamp-on')
        elementBody.style.backgroundColor='rgb(88, 183, 228)'
        elementTitle.style.color='black'


    }
    
  

  });