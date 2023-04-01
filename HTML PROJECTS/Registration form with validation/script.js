const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log()
 
    validate()
   
});
//         if (validate()) // Calling validation function
// {
// document.getElementById("form").submit(); //form submission
// alert(" Name : " + username + "Email : " + email + " Form : " + document.getElementById("form").getAttribute("id") + " Form Submitted Successfully......");
// }

const isEmail = (emailVal) => {
  var atsymbol = emailVal.indexOf('@');
  if (atsymbol < 1) return false;
  var dot = emailVal.lastIndexOf('.');
  if (dot <= atsymbol + 3) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};

const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  // validate username
  if (usernameVal === '') {
   setErrorMsg(username, 'Username cannot be blank');
  } else if (usernameVal.length <= 2) {
    setErrorMsg(username, 'Username min 3 char');
  } else {
    setSuccessMsg(username);
  }

  if (emailVal === '') {
    setErrorMsg(email, 'Email cannot be blank');
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, 'Email should contain @');
  } else {
    setSuccessMsg(email);
  }

  if (phoneVal === '') {
    setErrorMsg(phone, 'Phone cannot be blank');
  } else if (phoneVal.length != 10) {
    setErrorMsg(phone, 'Phone no. is not valid');
  } else {
    setSuccessMsg(phone);
  }

  if (passwordVal === '') {
    setErrorMsg(password, 'Password cannot be blank');
  } else if (passwordVal.length <= 5) {
    setErrorMsg(password, 'Min 6 character');
  } else {
    setSuccessMsg(password);
  }

  if (cpasswordVal === '') {
    setErrorMsg(cpassword, 'Confirm Password cannot be blank');
  } else if (passwordVal != cpasswordVal) {
    setErrorMsg(cpassword, 'Passwords are not matching');
  } else {
    setSuccessMsg(cpassword);
  }
};

function setErrorMsg(input, errorMsg) {
 
  const formControl = input.parentElement;
  const small = formControl.getElementsByClassName('small');
  small[0].innerText = errorMsg; 
  formControl.classList.remove("success");
  formControl.classList.add('error');

}

function setSuccessMsg(input) {
 const formControl = input.parentElement;
 formControl.classList.remove('error');
 formControl.classList.add("success");

}



