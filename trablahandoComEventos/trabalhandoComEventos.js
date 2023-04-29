const buttonRegister = document.getElementById('register-button')
const buttonRemove = document.getElementById('remove-event')

function register(event){
  const sectionElement = event.currentTarget.parentNode
  const username = sectionElement.children.username.value
  const password = sectionElement.children.password.value
  const passwordConfirmation = sectionElement.children.passwordConfirmation.value

  console.log({username, password, passwordConfirmation})

  if(password === passwordConfirmation){
    alert('Usuário registrado!')
  } else{
    alert('Revise seus dados.')
  }

}
buttonRegister.addEventListener('click', register)

buttonRemove.addEventListener('click', function(){
  buttonRegister.removeEventListener('click', register)
  console.log('event removed')
})






//button.addEventListener('click', function(){
//  alert('Botão clicado!')
//}) evento com uma função de callback