document.querySelector(".myform").addEventListener('submit',(event) => {
    event.preventDefault();
    let form = event.target;
    let username = form.username;
    let email = form.email;
    let password = form.password;
    let age = form.age;

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