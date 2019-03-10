var forms = document.querySelectorAll(".validate");
for(var i = 0; i< forms.length;i++){
    forms[i].setAttribute('novalidate',true);
}

let username = document.getElementById("username");

username.addEventListener('change',function() {
    console.log(username.validity)
})
document.querySelector(".myform").addEventListener('submit',(event) => {
    event.preventDefault();
    let form = event.target;
    let username = form.username;
    let email = form.email;
    let password = form.password;
    let age = form.age;
    console.log(form.gender.value);
    

    if(username.value == ''){
        username.style.border = "dotted 3px red"
        document.getElementById('username_error').innerText = "Username required";  
    }
    if(email.value == ''){
        email.style.border = "dotted 3px red"
        document.getElementById('email_error').innerText = "Email required"   
    }
    if(password.value == ''){
        password.style.border = "dotted 3px red"
        document.getElementById('password_error').innerText = "Password required"   
    }
    if(age.value == ''){
        age.style.border = "dotted 3px red"
        document.getElementById('age_error').innerText = "Age required"   
    }

    if(username.value != '' && email.value != '' && age.value != '' & password.value != '' ){
        location.href = 'welcome.html'
    }
})


// Another way to get values from form
// document.forms["myform"]["gender"].value
//var signupform  = document.forms.myform
// signupform.elements.email

// var v = document.querySelector("input")
// var validityState = v.validity;