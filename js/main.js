const form = document.querySelector("#form-mobile"); ////formulario mobile
const modalmobile = document.querySelector("#section-mobile")///modal
const inputmobile=document.querySelector("#email")
form.addEventListener("submit", abrirmodal);

function abrirmodal(e) {
  e.preventDefault();
  let varemail = new FormData(form);
  let email = varemail.get("email");
  let arrayEmail = email.split("@");
  const email_enviado = document.querySelector("#email_enviado")
  const errorEmailM = document.querySelector("#error_email")

  if (email.includes("@") && arrayEmail.length <= 2 && arrayEmail[1].includes(".")) {
    email_enviado.innerHTML=email;
    errorEmailM.style.visibility='hidden';
    modalmobile.classList.toggle("mostrar_todo");
    modalmobile.classList.toggle("modal") // Mostrar el modal
  }
  else
  {
    errorEmailM.style.visibility='visible';
    inputmobile.classList.add("rojoalerta")

    /*errorEmailM.innerHTML="Valid email required";*/
  }
  form.reset()
}

// Cerrar el modal al hacer clic en el botón "Cerrar"
const dismissBtn = document.querySelector(".btn-dismissMob");
dismissBtn.addEventListener("click",cerrar);

function cerrar() {
  modalmobile.classList.toggle("mostrar_todo");
  modalmobile.classList.toggle("modal")
  console.log(modalmobile)
}


/*email_enviado*/