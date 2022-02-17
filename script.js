const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function Enviar() {

  var nome = document.getElementById("nomeid");

  if (nome.value != "") {
      alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
  }

}

function toggleSignup(){
  document.getElementById("login-toggle").style.backgroundColor="#fff";
   document.getElementById("login-toggle").style.color="#222";
   document.getElementById("signup-toggle").style.backgroundColor="#57b846";
   document.getElementById("signup-toggle").style.color="#fff";
   document.getElementById("login-form").style.display="none";
   document.getElementById("signup-form").style.display="block";
}

function toggleLogin(){
   document.getElementById("login-toggle").style.backgroundColor="#57B846";
   document.getElementById("login-toggle").style.color="#fff";
   document.getElementById("signup-toggle").style.backgroundColor="#fff";
   document.getElementById("signup-toggle").style.color="#222";
   document.getElementById("signup-form").style.display="none";
   document.getElementById("login-form").style.display="block";
}
