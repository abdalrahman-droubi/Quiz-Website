const form = document.getElementById("regForm");
const positionb = document.getElementById("spanier");
const submitButton = document.querySelector("button[type='submit']");
const checkbox = document.querySelector("input[type='checkbox']");
const usernameInput = document.querySelector("input[name='name']");
const passwordInput = document.querySelector("input[name='password']");
const emailInput = document.querySelector("input[name='email']");
const usernameRegex = /^\S+$/; 
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/; 
const emailRegex = /^\S+@\S+\.\S+$/; 

// Set a flag to keep track of whether an option has been selected from the dropdown menu
//let dropdownSelected = false;


form.addEventListener("submit", (event)=> {
    // Validate form fields
    if (!isFormValid()) {
        event.preventDefault();
        return;
    }

    // Save form data to local storage
    const formData = {
        username: usernameInput.value,
        password: passwordInput.value,
        email: emailInput.value,
        position: positionb.value
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    sessionStorage.setItem("info", JSON.stringify(formData));
    window.location.href = './homePageUser.html';

    // Show welcome message
    alert("Welcome " + formData.username);

    // Reset form
    form.reset();


});



function isFormValid() {
    if (!usernameInput.value.trim()) {
        alert("Please enter your username.");
        return false;
    }

    if (!usernameRegex.test(usernameInput.value)) {
        alert("Username should not contain spaces.");
        return false;
    }

    if (!passwordInput.value.trim()) {
        alert("Please enter your password.");
        return false;
    }

    if (!passwordRegex.test(passwordInput.value)) {
        alert("Password should have at least 8 characters with at least 1 number, uppercase, and special characters.");
        return false;
    }

    if (!emailInput.value.trim()) {
        alert("Please enter your email address.");
        return false;
    }

    if (!emailRegex.test(emailInput.value)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!checkbox.checked) {
        alert("Please agree to the license terms.");
        return false;
    }

    return true;
}
