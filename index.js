//Valores
const user = document.getElementById('user');
const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('register');
const verifyOne = document.getElementById('verifyOne');
const verifyTwo = document.getElementById('verifyTwo');
const verifyTree = document.getElementById('verifyTree');
var emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var redirectionOne = true;
var redirectionTwo = true;
var redirectionTree = true;

//Funciones

function clear() {
  verifyOne.innerHTML = '';
  verifyTwo.innerHTML = '';
  verifyTree.innerHTML = '';
}

function redirect() {
  if (redirectionOne) {
    if (redirectionTwo) {
      if (redirectionTree) {
        window.location = 'http://example.com/'
      }
    }
  }
}

function verification() {
  if (user.value.length < 5) {
    verifyOne.innerHTML = 'Nombre muy corto';
    verifyOne.className = 'warning';
    redirectionOne = false;
  }else {
    verifyOne.innerHTML = 'Verificado';
    verifyOne.className = 'none';
    redirectionOne = true;
  }
  if (password.value.length < 8) {
    verifyTree.innerHTML = 'Contraseña minima de 8 caracteres';
    verifyTree.className = 'warning';
    redirectionTwo = false;
  } else {
    verifyTree.innerHTML = 'Verificado';
    verifyTree.className = 'none';
    redirectionTwo = true;
  }
  if (emailValidation.test(email.value)) {
    verifyTwo.innerHTML = 'Verificado';
    verifyTwo.className = 'none';
    redirectionTree = true;
  } else {
    verifyTwo.innerHTML = 'Email invalido';
    verifyTwo.className = 'warning';
    redirectionTree = false;
  }
}

button.addEventListener('click', function() {
  clear();
  verification();
  redirect();
})
