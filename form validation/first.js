let validateForm = () => {
    let name = document.querySelector("#name").value;
    let num = document.querySelector("#number").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#password2").value;

    let inp = document.querySelectorAll("input");

    // Validate Name
    if (name === "") {
        inp[0].style.border = "12px solid red";
        alert("Name field cannot be empty");
        return false;
    }
    if (!/^[A-Za-z\s]+$/.test(name)) { // Check if the name contains only letters and spaces
        inp[0].style.border = "12px solid red";
        alert("Please enter only letters in the name field");
        return false;
    }

    // Validate Number
    if (num === "") {
        inp[1].style.border = "12px solid red";
        alert("Number field cannot be empty");
        return false;
    }
    if (num.length !== 10) { // Ensure the number is exactly 10 digits
        inp[1].style.border = "12px solid red";
        alert("Number must be exactly 10 digits");
        return false;
    }
    if (isNaN(num)) { // Ensure the input is numeric
        inp[1].style.border = "12px solid red";
        alert("Please enter only numbers in the number field");
        return false;
    }

    // Validate Email
    if (!isValidEmail(email)) {
        inp[2].style.border = "12px solid red";
        alert("Please enter a valid email address ending with '@gmail.com'");
        return false;
    }

    // Validate Password
    if (password === "") {
        inp[3].style.border = "12px solid red";
        alert("Password field cannot be empty");
        return false;
    }
    if (confirmPassword === "") {
        inp[4].style.border = "12px solid red";
        alert("Confirm Password field cannot be empty");
        return false;
    }
    if (password !== confirmPassword) {
        inp[3].style.border = "12px solid red";
        inp[4].style.border = "12px solid red";
        alert("Passwords do not match");
        return false;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    return true;
};

// Updated isValidEmail Function
function isValidEmail(email) {
    let count = 0;
    let keep = 0;
    let foundAt = false;

    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            if (i === 0) {
                return false; // @ at the beginning
            }
            if (!foundAt) {
                keep = i;
                foundAt = true;
            }
            count++;
        }
    }

    let comp = "@gmail.com";

    if (count !== 1) {
        return false;
    }

    let sub = email.substring(keep);

    if (sub !== comp) {
        return false;
    }

    for (let i = 0; i < keep; i++) {
        if (email[i] === '.' || email[i] === ',' || email[i] === '/' || email[i] === '#') {
            return false;
        }
    }

    return true;
}