function colorTransition (elementSelector) {
  const element = document.querySelector(elementSelector);
  const originalColor = element.style.color;
  element.style.color = 'rgb(255, 51, 0)';
  setTimeout(function() {
    element.style.color = originalColor;
  }, 1500);

}

function validateForm() {
  const userEmail = document.getElementById('userEmail');
  const userPassword = document.querySelector('input#userPassword');
  const savePassword = document.querySelector('input.check');
  if(userEmail.value === '' && userPassword.value === '') { 
    colorTransition('label#forEmail');
    colorTransition('label#forPassword');
    return false;
  } else if(userEmail.value === '') {
    colorTransition('label#forEmail');
    return false;
  } else if(userPassword.value === '') {
    colorTransition('label#forPassword');
    return false;
  } else {
    const userLogin = {
      email: userEmail.value,
      password: userPassword.value,
      savePassword: savePassword.value,
    }
    userEmail.value = "";
    userPassword.value = "";
    savePassword.checked = false;
    return userLogin;
  }
}

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const login = validateForm();
  form.reset;
  if(login != false) {
    console.log(login);
  }
});

const menu = document.querySelector('img#menu-btn');
menu.addEventListener('click', function (event) {
  const navList = document.querySelector('ul#navList');
  if(navList.style.display == 'none') {
    navList.style.display = 'flex';
  } else {
    navList.style.display = 'none';
  }
})