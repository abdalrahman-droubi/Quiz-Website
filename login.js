// localStorage.setItem("formData", JSON.stringify(formData));
// window.localStorage.setItem("info",JSON.stringify({"username":"amro","password":"123456789Amro#","email":"amro.kh.alkhazaleh@gmail.com","position":"CSS"}))
let arr=JSON.parse(window.localStorage.getItem("formData"))
console.log(arr)

let login1 = document.getElementById("login1")
login1.addEventListener("submit", (event) => {
    event.preventDefault();


    let Email = event.target.email.value
    let Password = event.target.password.value

    
    if (Email == arr.email && Password == arr.password) {
        window.location.href = "./homePageUser.html";
        window.sessionStorage.setItem("info", JSON.stringify(arr))

    }


    else {
        alert("We couldn't find an account matching the login info you entered");

    }

    login1.reset()
})
