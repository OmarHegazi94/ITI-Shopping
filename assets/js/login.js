
window.addEventListener('load', function () {

    // useremail.focus();
    // Email
    useremail = document.getElementById('useremaill');
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

    // form sumbit 
    document.forms[0].addEventListener('submit', function (e) {

        if (!(iseuseemailvalid() && isuserpassvalid())) {
            e.preventDefault();
        } else {
            window.location.href = "index.html";
        }
    });

}); // end of load

function iseuseemailvalid() {
    var emailExpr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (useremail.value.match(emailExpr)) return true;
    else return false;
}

function isuserpassvalid() {
    var userpassexpression = /^[a-zA-Z1-9]{6,9}$/;
    if (password.value.match(userpassexpression)) return true;
    else return false;
}




// log in in local 



lsusermail = window.localStorage.getItem('newu');
// lsusermail=JSON.parse(lsusermail);

var login = document.getElementById('login');
var useremaill = document.getElementById('useremaill');
login.addEventListener('click', function (e) {
    e.preventDefault();
    if (useremaill.value == lsusermail) {

        window.location.href = 'index.html';
        window.localStorage.setItem('flag', 1);

    } else {
        alert('sign up first');
        window.location.href = 'SignUp.html';

    }

});

