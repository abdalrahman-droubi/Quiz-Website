// localStorage.setItem("formData", JSON.stringify(formData));
// window.localStorage.setItem("info",JSON.stringify({"username":"amro","password":"123456789Amro#","email":"amro.kh.alkhazaleh@gmail.com","position":"CSS"}))
const emailError = document.getElementById('email-error');
let arr=JSON.parse(window.localStorage.getItem("formData"))
console.log(arr)

let login1 = document.getElementById("login1")
login1.addEventListener("submit", (event) => {
    event.preventDefault();


    let Email = event.target.email.value
    let Password = event.target.password.value

    
    if (Email == arr.email && Password == arr.password) {
        window.location.href = "../html/homePageUser.html";
        window.sessionStorage.setItem("info", JSON.stringify(arr))

    }


    else  {
        emailError.style.color = 'red';
        emailError.style.fontSize = '10px';
        emailError.style.padding = '5px 10px';

        emailError.textContent = 'We could not find an account matching the login info you entered';
        Email.style.borderColor = 'red';
        // alert("We couldn't find an account matching the login info you entered");

    }

    login1.reset()
})


// if (!passwordInput.value.trim()) {
//     passwordInput.classList.toggle('input-error')

//     passError.textContent = 'Please enter your password.';
//     // alert("Please enter your password.");
//     return false;
// }else{
//     passwordInput.classList.remove('input-error')
//     passError.textContent = '';
// }
