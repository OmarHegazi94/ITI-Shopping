window.addEventListener('load', function () {
    window.oncontextmenu = function (e) { alert(" Context Menu Is Prevented !"); e.preventDefault(); }



    // // get username
    // //=> get input of usertext
    // usertxt = document.getElementById('usertxt');
    // usertxt.focus();
    // // => usernameerror
    // usernameerror = document.getElementById('usernameerror');

    // //=> register blur with usertxt
    // usertxt.addEventListener('blur', function () {
    //     // check => 
    //     if(!isusernamevalid())
    //     {
    //         usertxt.focus();
    //         usertxt.select();
    //         usertxt.classList.add("error");
    //         usernameerror.style.display = "block";
           
    //     }
    //     else {
    //         usertxt.classList.remove("error");
    //         usernameerror.style.display = "none";
    //     } 





    });
    // get userpass
    password = document.getElementById('password');
    password.addEventListener('blur', function () {
        // check => 
        if (!isuserpassvalid()) {
            password.focus();
            password.select();
            password.classList.add("error");
            passworderror.style.display = "block";

        }
        else {
            userpass.classList.remove("error");
            userpasserror.style.display = "none";
        }





    });


    // get          email

    contact_company = document.getElementById('contact_company');
    contact_company.addEventListener('blur', function () {
        // check => 
        if (!iseuseemailvalid()) {
            contact_company.focus();
            contact_company.select();
            contact_company.classList.add("error");
            contact_companyerror.style.display = "block";

        }
        else {
            contact_company.classList.remove("useremailerror");
            contact_companyerror.style.display = "none";
        }





    });


    // form sumbit 
    document.forms[0].addEventListener('submit', function (e) {
        if(!(ispasswordvalid() && iscontact_companyvalid()))
        {
            e.preventDefault();
        }
        
        // if (!isusernamevalid()) {
        //     usertxt.focus();
        //     usertxt.select();
        //     usertxt.classList.add("error");
        //     usernameerror.style.display = "block";

        // }
        if (!isuserpassvalid()) {
            password.focus();
            password.select();
            password.classList.add("error");
            passworderror.style.display = "block";

        }
                // email
        if (!iseuseemailvalid()) {
            contact_company.focus();
            contact_company.select();
            contact_company.classList.add("error");
            contact_companyerror.style.display = "block";

        }

    });
    // form reset

    document.forms[0].addEventListener('reset', function (e) {
        if (!confirm("U R Sure ?")) {
            e.preventDefault();
        }
    });


// end of load


// function isusernamevalid()
// {
//     var userexpression = /^[a-zA-Z]{6,8}$/;
//     if (usertxt.value.match(userexpression)) return true;
//     else return false;
// }
function ispasswordvalid(){
    var passwordexpression = /^[1-9]{6,9}$/;
    if (password.value.match(passwordexpression)) return true;
    else return false;
}

function iscontact_companylvalid()
    {
     var emailExpr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
     if (contact_company.value.match(emailExpr)) return true;
     else return false;
    }