
window.addEventListener('load', function () {
    // get username
    //=> get input of usertext

    // usernameInput.focus();

    // => User Name
    usernameInput = document.getElementById('username');
    usernameerror = document.getElementById('usernameerror');

    usernameInput.addEventListener('blur', function () {
        // check => 
        if (!isusernamevalid()) {
            usernameInput.focus();
            usernameInput.select();
            usernameInput.classList.add("error");
            usernameerror.style.display = "block";

        }
        else {
            usernameInput.classList.remove("error");
            usernameerror.style.display = "none";
        }

    });


    // Email
    useremail = document.getElementById('useremail');
    useremailerror = document.getElementById('useremailerror');

    useremail.addEventListener('blur', function () {
        // check => 
        if (!iseuseemailvalid()) {
            useremail.focus();
            useremail.select();
            useremail.classList.add("error");
            useremailerror.style.display = "block";
        }
        else {
            useremail.classList.remove("error");
            useremailerror.style.display = "none";
        }

    });

    // Password
    password = document.getElementById('password');
    userpasserror = document.getElementById('userpasserror');

    password.addEventListener('blur', function () {
        // check => 
        if (!isuserpassvalid()) {
            password.focus();
            password.select();
            password.classList.add("error");
            userpasserror.style.display = "block";

        }
        else {
            password.classList.remove("error");
            userpasserror.style.display = "none";
        }
    });

    // Confim Password
    confpassword = document.getElementById('confpassword');
    userconfimpasserror = document.getElementById('userconfimpasserror');

    confpassword.addEventListener('blur', function () {
        // check => 
        if (!isuserconfpassvalid()) {
            confpassword.focus();
            confpassword.select();
            confpassword.classList.add("error");
            userconfimpasserror.style.display = "block";
        }

        else {
            confpassword.classList.remove("error");
            userconfimpasserror.style.display = "none";
        }
    });


    // form sumbit 
    document.forms[0].addEventListener('submit', function (e) {
        conf_password = document.getElementById('confpassword');
        if (!(isusernamevalid() && isuserpassvalid() && isuserconfpassvalid() && iseuseemailvalid())) {
            e.preventDefault();
        } else {
            e.preventDefault();
            console.log("Done");
            window.location.href = "index.html";
        }
    });

}); // end of load


function isusernamevalid() {
    var userexpression = /^[a-zA-Z]{6,20}$/;
    if (usernameInput.value.match(userexpression)) return true;
    else return false;
}

function isuserpassvalid() {
    var userpassexpression = /^[1-9]{6,9}$/;
    if (password.value.match(userpassexpression)) return true;
    else return false;
}

function isuserconfpassvalid() {
    var userpassexpression = /^[1-9]{6,9}$/;
    if ((password.value.match(userpassexpression)) && (password.value === confpassword.value)) return true;
    else return false;
}

function iseuseemailvalid() {
    var emailExpr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (useremail.value.match(emailExpr)) return true;
    else return false;
}







$(document).ready(function () {

    displaylogin();
    useremail = document.getElementById('useremail');




    var signup = document.getElementById('signup');
    signup.addEventListener('click', function () {

        useremail = document.getElementById('useremail');



        window.localStorage.setItem('newu', useremail.value);
        window.localStorage.setItem('flag', 1);



    });



});
