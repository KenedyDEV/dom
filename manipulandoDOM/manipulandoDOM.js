function addContact() {
  const contactSection = document.getElementById('contacts-list')
  //acessa o id da section permitindo manipulações 

  const h3 = document.createElement('h3')
  h3.innerText = "Contato"

  const ul = document.createElement('ul')

  const nameLi = document.createElement('li')
  nameLi.innerText = "Nome: "
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  nameLi.appendChild(nameInput) //adicionou o input como filho do li
  ul.appendChild(nameLi) //adicionou o li como filho de ul
  ul.appendChild(document.createElement('br')) //criou e adicionou a tag <br> para quebrar linha de um elementos para outro

  //mesmo caso acima, apenas mudaram os dados
  const phoneLi = document.createElement('li')
  phoneLi.innerText = "Telefone: "
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'
  phoneLi.appendChild(phoneInput)
  ul.appendChild(phoneLi)
  ul.appendChild(document.createElement('br'))

  //mesmo caso acima apenas com algumas alterações
  const addressLi = document.createElement('li')
  addressLi.innerHTML = '<label for="address">Endereço: </label>' //innerhtml permite criação de tags diretamente no seu valor
  const addressInput = document.createElement('input')
  addressInput.type = 'text'
  addressInput.name = 'address'
  addressInput.id = 'address' //adicionado um 'id' para dialogar com o label criado dinâmicamente
  addressLi.appendChild(addressInput)
  ul.appendChild(addressLi)
  ul.appendChild(document.createElement('br'))

  contactSection.append(h3, ul) //com 'append' é possível adicionar mais de um filho de uma só vez.
}

function removeContact() {
  const contactSection = document.getElementById('contacts-list')

  const titles = document.getElementsByTagName('h3') //selelciona os eleementos com a tag h3
  const contacts = document.getElementsByTagName('ul') //seleciona os slementos com a tag ul

  contactSection.removeChild(titles[titles.length -1]) //remove o filho na posição indicada pelos colchetes (no caso, o ultimo elememnto)
  contactSection.removeChild(contacts[contacts.length - 1]) //remove o filho na posição indcada nos colchetes
}