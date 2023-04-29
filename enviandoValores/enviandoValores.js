function register(element){
  //irá receber a section
  console.log(element)
  //podemos pegar vqalores diretamente da section dessa forma. exemplo:
  const username = element.children.username.value
  const password = element.children.password.value
  const passwordConfirmation = element.children.passwordConfirmation.value
                              //section.filhoDaSection.idDoInputPasswordConfirmation.valorInseridoNoInput
  console.log({username, password, passwordConfirmation})
  if(password !== passwordConfirmation){
    alert('As senhas não conferem!')
  } else {
    alert('Usuário registrado.')
  }
}