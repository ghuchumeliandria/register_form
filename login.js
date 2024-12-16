const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")
const email = document.getElementById("emailInput")
const password = document.getElementById("passInput")
const submit = document.getElementById("submit")

function checkLogin(){
    if(email.value === userGetInfo.email && password.value === userGetInfo.password  ){
        passwordError.style.display = "none"
        alert("თქვენ წარმატებით გაიარეთ ავტორიზაცია")
    }else{
        passwordError.style.display = "block"
        passwordError.style.textAlign = "left"
        passwordError.textContent = "It looks like you email or password is not correct"
    }
}    
    let userGetInfo = JSON.parse(localStorage.getItem("user"))
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    checkLogin()
    email.value = ""
    password.value = ""
})