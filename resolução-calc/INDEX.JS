const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
const numberResult = document.getElementById('number-result')

document.querySelectorAll('.btn-content').forEach(function(charKeyBtn){
  charKeyBtn.addEventListener('click', function(){
    const value = charKeyBtn.dataset.value
    numberResult.value += value
  })

})

document.getElementById('clear').addEventListener('click', function(){
  numberResult.value = ''
})

numberResult.addEventListener('keydown', function(event){
  event.preventDefault()

  if(allowedKeys.includes(event.key)){
    numberResult.value += event.key
    return
  }
  if(event.key === 'Backspace'){
    numberResult.value = numberResult.value.slice(0, -1)
  }
  if(event.key === 'Enter'){
    calculate()
  }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate(){
  const result = eval(numberResult.value)
  numberResult.value = result
}