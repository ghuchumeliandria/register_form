const name = document.getElementById("nameInput")
const lastname = document.getElementById("lastnameInput")
const email = document.getElementById("emailInput")
const password = document.getElementById("passInput")
const submit = document.getElementById("submit")
const form = document.getElementById("form")
const nameError = document.getElementById("nameError")
const name2Error = document.getElementById("name2Error")
const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")
let  = false;
let passwordTrue = false;
let nameTrue = false;
let lastnameTrue = false;



function errorInput(){

    let passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    let emailValid = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    
    if(name.value == ""){
        name.classList.add("input_error")
        nameError.style.display = "block"
        nameTrue = false
    }else{
        name.classList.remove("input_error")
        nameError.style.display = "none"
        nameTrue = true
    }
    
    if(lastname.value == ""){
        lastname.classList.add("input_error")
        name2Error.style.display = "block"
        lastnameTrue = false
    }else{
        lastname.classList.remove("input_error")
        name2Error.style.display = "none"
        lastnameTrue = true
    }
    if(!emailValid.test(email.value)){
        email.classList.add("input_error")
        emailError.style.display = "block"
        emailTrue = false
    }else{
        email.classList.remove("input_error")
        emailError.style.display = "none"
        emailTrue = true;
        
    }
    if(!passwordValid.test(password.value)){
        password.classList.add("input_error")
        passwordError.style.display = "block"
        passwordTrue = false
    }else{
        password.classList.remove("input_error")
        passwordError.style.display = "none"
        passwordTrue = true
    }
}



submit.addEventListener("click" , (e) =>{
    e.preventDefault();
    errorInput();
    let userInfo = {
        email: email.value,
        name: name.value,
        password: password.value,
        lastname: lastname.value
    }
    localStorage.setItem("user" , JSON.stringify(userInfo));
  
    if(emailTrue == true && passwordTrue == true && nameTrue == true && lastnameTrue == true){
        password.value = ""
        email.value = ""
        name.value = ""
        lastname.value = ""
        window.open("./login.html")
    }else{

    }

})
let userGetInfo = JSON.parse(localStorage.getItem("user"))
console.log(userGetInfo)














// form.addEventListener("submit", (e) => {
//     e.preventDefault();
    
    
//     let user = {
//         mail: email.value,
//         password: password.value,
//     };
//     localStorage.setItem("item", JSON.stringify(user));
//   email.value = "";
//   password.value = "";
// });

// let registerUser = JSON.parse(localStorage.getItem("item"))
// scndForm.addEventListener("submit" , (e) =>{
//     e.preventDefault()
//     if(loginEmail.value == registerUser.mail && loginPass.value == registerUser.password ){
//         alert("sagol ymandria")
//     }
//     else{
//         alert("veraaa")
//     }
// })
