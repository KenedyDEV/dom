const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
  input.value = 'Olá, mundo!'

  console.log(input.value)
  //input.value irá pegar o valor em tempo real 
  console.log(input.getAttribute('value'))
  //getAttribute pega o valor inicial
})

document.getElementById('type').addEventListener('click', function () {
  // input.type = input.type !== 'date' ? 'date' : 'text'
  input.setAttribute('type', 'radio')
  //setAttribut seta o valor para o tipo desejado
})

document.getElementById('placeholder').addEventListener('click', function () {
  input.placeholder = 'Digita algo...'
  //altera o placeholder(texto translúcido do input)
})

document.getElementById('disable').addEventListener('click', function () {
  input.setAttribute('disabled', !input.disabled)
  //foi atribuido o valor disabled (booleano) para o valor 'não disabled', ou seja passou a ser disabled
})

document.getElementById('data').addEventListener('click', function () {
  const data = input.dataset.somethingElse
  //atributo data armazena informações dentro do html, é referenciado como dataset
  console.log("O valor do atributo data-something-else é: " + data)
  input.dataset.somethingElse = 'Algum outro valor'
  console.log("O valor do atributo data-something-else agora é: " + input.dataset.somethingElse)
})