
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

    // Text Area
    contacttextarea = document.getElementById('contact_textarea');
    messageerror = document.getElementById('messageerror');

    contacttextarea.addEventListener('blur', function () {
        // check => 
        if (!isusermessagevalid()) {
            contacttextarea.focus();
            contacttextarea.select();
            contacttextarea.classList.add("error");
            messageerror.style.display = "block";

        }
        else {
            contacttextarea.classList.remove("error");
            messageerror.style.display = "none";
        }
    });


    // form sumbit 
    document.forms[0].addEventListener('submit', function (e) {

        if (!(isusernamevalid() && isusermessagevalid() && iseuseemailvalid())) {
            e.preventDefault();
        } else {
            window.location.href = "index.html";
        }
    });

}); // end of load


function isusernamevalid() {
    var userexpression = /^[a-zA-Z]{6,20}$/;
    if (usernameInput.value.match(userexpression)) return true;
    else return false;
}

function iseuseemailvalid() {
    var emailExpr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (useremail.value.match(emailExpr)) return true;
    else return false;
}

function isusermessagevalid() {
    var messageexpression = /^[a-zA-Z0-9._-]{10,100}$/;
    if (contacttextarea.value.match(messageexpression)) return true;
    else return false;
}




