const signInBtn = document.getElementById("signInBtn");
const logInBtn = document.getElementById("logInBtn");
const greeting = document.getElementById("greeting");
const product = document.getElementById("product");


signInBtn.addEventListener("click", signInNewUser);
logInBtn.addEventListener("click", logInUser);

function signInNewUser() {
    document.getElementById("signInBtn").style.display = "none";
    document.getElementById("logInBtn").style.display = "block";


    const signInNewUserName = document.createElement("input");
    signInNewUserName.placeholder = "Användarnamn";
    const signInNewPassword = document.createElement("input");
    signInNewPassword.placeholder = "Lösenord";
    const signInNewUserBtn = document.createElement("button")
    signInNewUserBtn.innerHTML = "Skapa"

    signInNewUserBtn.addEventListener("click", () => {
        let newUser = {name: signInNewUserName.value, password: signInNewPassword.value};
        console.log(user);
    
        fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
        signInNewUserName.value = "";
        signInNewPassword.value = "";
    
    })

   
    product.innerHTML ="";
    product.append(signInNewUserName, signInNewPassword, signInNewUserBtn)
}


function logInUser() {
    document.getElementById("logInBtn").style.display = "none";
    document.getElementById("signInBtn").style.display = "block";
    
    const logInUserName = document.createElement("input");
    logInUserName.placeholder = "Användarnamn";
    const logInPassword = document.createElement("input");
    logInPassword.placeholder = "Lösenord";
    const logInUserBtn = document.createElement("button");
    logInUserBtn.innerHTML = "Logga in";


    product.innerHTML = "";
    product.append(logInUserName, logInPassword, logInUserBtn)
}

logInUser();
