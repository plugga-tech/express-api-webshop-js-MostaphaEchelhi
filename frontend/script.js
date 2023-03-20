const signInBtn = document.getElementById("signInBtn");
const logInBtn = document.getElementById("logInBtn");
const greeting = document.getElementById("greeting");
const product = document.getElementById("product");


signInBtn.addEventListener("click", signInNewUser);
logInBtn.addEventListener("click", logInUser);

function signInNewUser() {
    const signInNewUserName = document.createElement("input");
    signInNewUserName.placeholder = "Användarnamn";
    const signInNewPassword = document.createElement("input");
    signInNewPassword.placeholder = "Lösenord";
    const signInNewUserBtn = document.createElement("button")
    signInNewUserBtn.innerHTML = "Skapa"

    /*let usersList = document.createElement("ul");
    usersList.innerHTML = "";

    users.map(user => {
        let li = document.createElement("li")
        li.id = user.id;
        li.innerText = user.name;
        usersList.appendChild(li);
    })*/

    product.append(signInNewUserName, signInNewPassword, signInNewUserBtn)
}


function logInUser() {
    const logInUserName = document.createElement("input");
    logInUserName.placeholder = "Användarnamn";
    const logInPassword = document.createElement("input");
    logInPassword.placeholder = "Lösenord";
    const logInUserBtn = document.createElement("button");
    logInUserBtn.innerHTML = "Logga in";

    if (click > 1) {
        
    }

    product.append(logInUserName, logInPassword, logInUserBtn)
}
