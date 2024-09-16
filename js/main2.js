const formi = document.querySelector("#form-desktop");
const modal =document.querySelector("#section_des")

formi.addEventListener("submit", abrirmodalD);

function abrirmodalD(e) {
  e.preventDefault();
  let varemail = new FormData(formi);
  let email = varemail.get("emailEnviar");
  let arrayEmail = email.split("@");
  const email_usuario= document.querySelector("#emailusuario")
  const msj_error = document.querySelector("#msj_error")

  if (email.includes("@") && arrayEmail.length <= 2 && arrayEmail[1].includes(".")) {
    email_usuario.innerHTML=email;
    msj_error.style.visibility='hidden';
    modal.classList.add("mostrar_todo");
    modal.classList.add("modal")
    console.log(modal)
  }
  else
   {
    msj_error.style.visibility='visible';
   }
   formi.reset()
}


const dismissBtn2 = document.querySelector(".dismiss-btn");
dismissBtn2.addEventListener("click",cerrar);

function cerrar() {
    modal.classList.remove("modal")
    console.log(modal)
}

