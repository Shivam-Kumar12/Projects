
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
// import { getDatabse } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDsMZBPfIi9539zwH4f5tqFQ2qzmwBllGI",
//   authDomain: "first-form-9c83c.firebaseapp.com",
//   databaseURL: "https://first-form-9c83c-default-rtdb.firebaseio.com",
//   projectId: "first-form-9c83c",
//   storageBucket: "first-form-9c83c.appspot.com",
//   messagingSenderId: "855396073921",
//   appId: "1:855396073921:web:504df9ae19cfdc69072f40",
//   measurementId: "G-DM4Q6XHGLQ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database=getDatabse(app)
let pass=document.getElementById("pass")
let Register=document.getElementById("Register")
let signin=document.getElementById("signin")
let signup=document.getElementById("signup")
let namefield=document.getElementById("namefield")
let title=document.getElementById("title")
let text=document.getElementById("text")
let text1=document.getElementById("text1")
signin.onclick=function(e){
  
  // namefield.style.maxHeight='60px';
  // namefield.style.visibility='visible'
  // Register.style.visibility='hidden'
  // title.innerHTML="LOGIN FORM"
  signin.innerText="LOGIN"
  // signup.classList.remove("disable")
  // signin.classList.add("disable")
  if(form==null)
    alert("please fill the Mandatory field")
  else if(form=={user,email,passsword})
  alert("Your Account Created Successfully")
}
signup.onclick=function(){
  namefield.style.maxHeight='0';
  namefield.style.visibility='hidden'
  title.innerText="LOGIN FORM"
  // Register.style.visibility='hidden'
  signin.style.visibility='visible'
  text.style.visibility="hidden"
  text1.style.visibility="visible"
  signup.innerHTML="Register"

  pass.style.visibility="visible"
//   signup.classList.add("disable")
//   signin.classList.remove("disable")
 }

text1.onclick=function(){
  namefield.style.maxHeight='60px';
  namefield.style.visibility='visible'
  title.innerHTML="SIGNUP FORM"
  pass.style.visibility="hidden"
  text1.style.visibility="hidden"
}


const form = document.querySelector("form");
eField = form.querySelector(".email"),
  eInput = eField.querySelector("input"),
  pField = form.querySelector(".password"),
  pInput = pField.querySelector("input");

form.onsubmit = (e) => {
  e.preventDefault();
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(() => {
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = () => { checkEmail(); }
  pInput.onkeyup = () => { checkPass(); }

  function checkEmail() {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!eInput.value.match(pattern)) {
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");

      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    } else {
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass() {
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!pInput.value.match(pattern)) {
      pField.classList.add("error");
      pField.classList.remove("valid");
      let errorTxt = pField.querySelector(".error-txt");

      (pInput.value != "") ? errorTxt.innerText = "must contain 8 characters, atleast one number, one uppercase letter and one lowercase letter" : errorTxt.innerText = "Password can't be blank";
    } else {
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
    window.location.href = form.getAttribute("action");
  }
}

