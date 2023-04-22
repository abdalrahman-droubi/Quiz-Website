
let Info = JSON.parse(sessionStorage.getItem("info"));

let welcomeMessage = document.getElementById("welcomUser").innerHTML = `Welcome ${Info.username}`;
console.log(welcomeMessage);

let welcomeMessage2 = document.getElementById("welcomUser1").innerHTML = `Welcome ${Info.username}`;
console.log(welcomeMessage2);

function signout() {

        sessionStorage.clear();
        window.location.href = "../index.html";;
}

