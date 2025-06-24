function logIn(){
    var loginForm = document.getElementById("login-form");

    var username = loginForm.username.value;
    var password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        hideErrorMsg();
        alert("You have successfully logged in.");
        localStorage.setItem('username', username);
        location.reload();
    } else {
        loginForm.username.value = '';
        loginForm.password.value = '';
        showErrorMsg();
    }
}

function showErrorMsg(){
    var loginErrorMsg = document.getElementById("invalid-login-box");
    loginErrorMsg.style.display = 'block';
}

function hideErrorMsg(){
    var loginErrorMsg = document.getElementById("invalid-login-box");
    loginErrorMsg.style.display = 'none';
}

function closeRegisterMenu(){
    var registerMenu = document.getElementById("register-box");
    var registerMenuBlur = document.getElementById("register-box-blur");

    registerMenu.style.display = 'none';
    registerMenuBlur.style.display = 'none';
}

function openRegisterMenu(){
    alert('Registration feature is in progress and therefore is unavailable');

    var registerMenu = document.getElementById("register-box");
    var registerMenuBlur = document.getElementById("register-box-blur");

    registerMenu.style.display = 'block';
    registerMenuBlur.style.display = 'block';
}