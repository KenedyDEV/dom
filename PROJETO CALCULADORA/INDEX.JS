const keys = ["9","8","7","6","5","4","3","2","1","0",".","(",")",",","^","-","+"]
const numberResult = document.getElementById('number-result')
numberResult.focus
const resultInput = document.getElementById('result-input')
numberResult.addEventListener('keydown', function(event){
event.preventDefault()

  if(keys.includes(event.key)){
    numberResult.value += event.key
    return
  }
  if(event.key === 'Enter'){
    igualdade()
    }
  if(event.key === 'Backspace'){
    backspace()
  }
 
  })

document.querySelectorAll('.btn-content').forEach(function(btn){
  btn.addEventListener('click', function(){
    const valueDataset =  btn.dataset.value 
    numberResult.value += valueDataset
  })
})

document.getElementById('clear').addEventListener('click', function(){
  numberResult.value =''
})
const equal = document.getElementById('equal')
equal.addEventListener('click', igualdade)

const apagar = document.getElementById('clear-one')
apagar.addEventListener('click', backspace)

function igualdade(){
  
  resultInput.value = eval(numberResult.value)
  resultInput.style.fontSize = '2em'
}

function backspace(){
  numberResult.value = numberResult.value.slice(0, -1)
}


const changeToDark = document.getElementById('changeToDark')
changeToDark.addEventListener('click', function(){
  numberResult.style.backgroundColor = 'black'
  document.querySelectorAll('.btn-content').forEach(function(element){
    element.style.backgroundColor = 'rgb(2, 3, 32)';
    element.style.color = 'white'
    element.style.borderColor = 'White'
  })
  document.getElementById('clear').style.backgroundColor = 'rgb(2, 3, 32)'
  document.getElementById('clear').style.color = 'white'
  document.getElementById('clear').style.borderColor = 'white'

  numberResult.style.color = 'White'
  numberResult.style.borderColor = 'White'


  document.getElementById('clear-one').style.backgroundColor = 'rgb(2, 3, 32)'
  document.getElementById('clear-one').innerHTML = '<img src="IMG/image-removebg-preview.png"></img>'
  document.getElementById('clear-one').style.borderColor = 'White'

  document.getElementById('equal').style.backgroundColor = 'yellow'
  document.getElementById('equal').style.borderColor = 'white'


})

const changeToLight = document.getElementById('changeToLight')
changeToLight.addEventListener('click', function(){
  numberResult.style.backgroundColor = 'bisque'
  numberResult.style.color = 'black'

  document.querySelectorAll('.btn-content').forEach(function(element){
    element.style.backgroundColor = 'white';
    element.style.color = 'black'
    element.style.borderColor = 'black'
  })
  document.getElementById('clear').style.backgroundColor = 'white'
  document.getElementById('clear').style.color = 'black'
  document.getElementById('clear').style.borderColor = 'black'


  document.getElementById('clear-one').style.backgroundColor = 'white'
  document.getElementById('clear-one').innerHTML = '<img src="img/png-clipart-computer-icons-icon-design-backspace-button-rectangle-logo-removebg-preview.png"></img>'
  document.getElementById('clear-one').style.borderColor = 'black'

  document.getElementById('equal').style.backgroundColor = 'rgb(121, 222, 231)'
  document.getElementById('equal').style.borderColor = 'black'


})

document.getElementById('copy').addEventListener('click', function(event){
  const buttom = event.currentTarget
  if(buttom.innerText === 'Copiar'){
    buttom.innerText = 'Copiado'
    navigator.clipboard.writeText(resultInput.value)
  } else{alert('Problema')}
  })