const form = document.getElementById("form");
const user = document.getElementById("user");
const lname = document.getElementById("lname");
const password = document.getElementById("pass");
const password2 = document.getElementById("confirm_pass");
const email = document.getElementById("email");
MINIMUM_PASS_LENGTH = 8;

const username = document.getElementById("username");

const isValidEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email.toLowerCase()));
};

form.addEventListener("submit", (e) => {
    let flag = true;
    validateInputs();
    if (flag == false) {
        return false;
    } else {
        return true;
    }
});

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
    flag = false;
};

function validateInputs() {
    const userValue = user.value.trim();
    const lnameValue = lname.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const emailValue = email.value.trim();

    if (userValue === "") {
        setError(user, "enter username!");
    } else {
        setSuccess(user);
    }
    if (lnameValue === "") {
        setError(lname, "enter last name!");
    } else {
        setSuccess(lname);
    }
    if (emailValue === "") {
        setError(email, "enter email!");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Please enter a valid email.");
    } else {
        setSuccess(email);
    }
    if (passwordValue === "") {
        setError(password, "enter Password!");
    } else if (passwordValue.length < MINIMUM_PASS_LENGTH) {
        setError(password, "Password length is too short");
    } else {
        setSuccess(password);
    }
    if (password2Value === "") {
        setError(password2, "reenter password!");
    } else if (password2Value !== passwordValue) {
        setError(password2, "Password doesn't match!");
    } else {
        setSuccess(password2);
    }
}
