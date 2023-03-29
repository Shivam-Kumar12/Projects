let signin=document.getElementById("signin")
let signup=document.getElementById("signup")
let namefield=document.getElementById("namefield")
let title=document.getElementById("title")

signin.onclick=function(){
    namefield.style.maxHeight='0';
    title.innerHTML="SIGN IN"
    signup.classList.add("disable")
    signin.classList.remove("disable")
}
signup.onclick=function(){
    namefield.style.maxHeight='60px';
    title.innerHTML="SIGN UP"
    signup.classList.remove("disable")
    signin.classList.add("disable")
}