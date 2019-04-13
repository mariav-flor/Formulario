const nome = document.querySelector("#exampleFormControlInput1")
const email = document.querySelector("#exampleFormControlInput2")
const telefone = document.querySelector("#exampleFormControlInput3")
const text = document.querySelector("#exampleFormControlTextarea4")

const botaoEnviar = document.querySelector(".btn-enviar")

botaoEnviar.addEventListener('click', function(evento) {
    evento.preventDefault()
    
  if (nome.value.trim() == ""
  ||nome.value == undefined
  || nome.value.length < 2){
    alert("Por favor, digite um nome válido")
    nome.focus();
    return false;
  }

  if (telefone.value.trim() == ""
    || isNaN(telefone.value)
    || telefone.value.length < 9 ){
      console.log(telefone)
    alert("Por favor, digite um número de telefone válido");
    telefone.focus();
    return false;
  }

  if (email.value.trim() == "" 
  || email.value.indexOf("@")==-1 
  || email.value.indexOf(".")==-1) {
    alert("Por favor, digite um e-mail válido");
    email.focus();
    return false;
  }
  
  if (text.value.trim() == ""
  || text.value.length < 1){
    alert("Por favor, digite sua mensagem");
    text.focus();
    return false;
  }

  document.querySelector('form').submit()
  alert ("Mensagem enviada com realizado com sucesso!")
})