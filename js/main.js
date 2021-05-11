let body = document.body;
body.style.backgroundColor = "#24353F";

let logo = document.querySelector('#logo');
logo.style.cssText = "color:#1aa2b8;text-align:center;margin-top:25px;margin-bottom:20px;";

// --------------------Start login Page-------------------

let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let loginBtn = document.getElementById("btnLogin");

// --------------------End login Page-------------------


// --------------------Start Register Page-------------------

let firstName = document.getElementById("firstName");
let LastName = document.getElementById("LastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let rePassword = document.getElementById("rePassword");
let registerBtn = document.getElementById("registerBtn");
let worngMsg = document.getElementById("worngMsg");
let InputsClear = document.querySelectorAll("input");
let signOutBtn = document.getElementById("signOutBtn");
let username = localStorage.getItem("sessionUserName");
let alertMsg = document.getElementById("alertMsg");
let generalPassword;
let usersDB = [];


// ----- check DataStorge Value -----

if (localStorage.getItem("UsersDetalis") == null) {

    usersDB = [];

}

else {
    usersDB = JSON.parse(localStorage.getItem("UsersDetalis"));
};


// ------ Start Function -----

function addUsers() {

    if (firstName.value != "" && LastName.value != "" && email.value != "" && password.value != "" && rePassword.value != "") {
        let inputsData =
        {
            firstName: firstName.value,
            LastName: LastName.value,
            email: email.value,
            password: password.value,
            rePassword: rePassword.value

        }
        usersDB.push(inputsData);
        localStorage.setItem("UsersDetalis", JSON.stringify(usersDB));
    }
    else {
        removeItem("href", "registerMsg.html");
    }


};

function login() {

    if (loginEmail.value != "" && loginPassword.value != "") {

        for (i = 0; i < usersDB.length; i++) {
            if (usersDB[i].email.toLowerCase() == loginEmail.value.toLowerCase()
                && usersDB[i].password.toLowerCase() == loginPassword.value.toLowerCase()) {

                localStorage.setItem("sessionUserName", usersDB[i].firstName);
                loginBtn.setAttribute("href", "welcome.html");
            }
            else {
                worngMsg.classList.remove("d-none");
                worngMsg.classList.add("d-flex");

            }
        }

    }

    else {
        loginBtn.classList.add("disabled");
        worngMsg.classList.remove("d-none");
        worngMsg.classList.add("d-flex");
    }
}


function welcome() {
    document.getElementById("welcometxt").innerHTML = `<h2>Welcome ${username}</h2>`;

}


function clear() {
    for (i = 0; i < InputsClear.length; i++) {
        InputsClear[i].value = "";
    }
}


// ------ End Function -----

// ----- Start Buttoms -----

registerBtn.addEventListener("click", function () {

    addUsers();
    clear();
    this.setAttribute("href", "registerMsg.html");

});

loginBtn.addEventListener("click", function () {

    login();
    clear();
    loginEmail.classList.remove("is-invalid");
    loginEmail.classList.remove("is-valid");

});

signOutBtn.addEventListener("click", function () {
    localStorage.removeItem("sessionUserName");
    this.setAttribute("href", "index.html");
});


// --------------------End Buttoms-------------------

// --------Start validation --------

loginEmail.onkeyup = function () {



    if (loginEmail.value.toLowerCase() != "" || loginPassword.value != "") {
        worngMsg.classList.remove("d-flex");
        worngMsg.classList.add("d-none");
        btnLogin.classList.remove("disabled");

    }


    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let textInput = regex.test(loginEmail.value);
    if (!textInput) {
        loginEmail.classList.add("is-invalid");
        loginEmail.classList.remove("is-valid");


    }
    else {
        loginEmail.classList.remove("is-invalid");
        loginEmail.classList.add("is-valid");

    }
}


firstName.onkeyup = function () {

    let regex = /^[a-zA-Z]{2,}$/;

    let textInput = regex.test(firstName.value);
    if (!textInput) {
        faAlertMsg.classList.remove("d-none");
        faAlertMsg.classList.add("d-flex");
        firstName.classList.add("is-invalid");
        registerBtn.classList.add("disabled");

    }

    else {
        faAlertMsg.classList.remove("d-flex");
        faAlertMsg.classList.add("d-none");
        firstName.classList.add("is-valid");
        firstName.classList.remove("is-invalid");
        registerBtn.classList.remove("disabled");
    }
}

LastName.onkeyup = function () {
    let regex = /^[a-zA-Z]{2,}$/;

    let textInput = regex.test(LastName.value);
    if (!textInput) {
        lsAlertMsg.classList.remove("d-none");
        lsAlertMsg.classList.add("d-flex");
        LastName.classList.add("is-invalid");
        registerBtn.classList.add("disabled");


    }

    else {
        lsAlertMsg.classList.remove("d-flex");
        lsAlertMsg.classList.add("d-none");
        LastName.classList.add("is-valid");
        LastName.classList.remove("is-invalid");
        registerBtn.classList.remove("disabled");


    }
}

email.onkeyup = function () {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let textInput = regex.test(email.value);
    if (!textInput) {
        emlAlertMsg.classList.remove("d-none");
        emlAlertMsg.classList.add("d-flex");
        email.classList.add("is-invalid");
        registerBtn.classList.add("disabled");

    }

    else {
        emlAlertMsg.classList.remove("d-flex");
        emlAlertMsg.classList.add("d-none");
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
        registerBtn.classList.remove("disabled");


    }
}


rePassword.onkeyup = function () {

    if (password.value != rePassword.value || rePassword.value != password.value) {
        pswAlertMsg.classList.remove("d-none");
        pswAlertMsg.classList.add("d-flex");
        password.classList.add("is-invalid");
        rePassword.classList.remove("is-valid");
        registerBtn.classList.add("disabled");




    }

    else {
        pswAlertMsg.classList.remove("d-flex");
        pswAlertMsg.classList.add("d-none");
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
        rePassword.classList.add("is-valid");
        registerBtn.classList.remove("disabled");

    }

}

// --------End validation --------