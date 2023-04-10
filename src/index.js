// elements
const form = document.getElementById("form");
const user = document.getElementById("user");
const lname = document.getElementById("lname");
const password = document.getElementById("pass");
const password2 = document.getElementById("confirm_pass");
const email = document.getElementById("email");
const activeBtn = document.getElementById("active");
const inActiveBtn = document.getElementById("inactive");

// variables

const MINIMUM_PASS_LENGTH = 8;
let onlineStatus = "";

const username = document.getElementById("username");
activeBtn.addEventListener("click", () => {
    onlineStatus = "active";
});

inActiveBtn.addEventListener("click", () => {
    onlineStatus = "inactive";
});

form.addEventListener("submit", (e) => {
    let error = false;

    const userValue = user.value.trim();
    const lnameValue = lname.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const emailValue = email.value.trim();

    if (userValue === "") {
        setError(user, "enter username!");
        error = true;
    } else {
        setSuccess(user);
    }
    if (lnameValue === "") {
        setError(lname, "enter last name!");
        error = true;
    } else {
        setSuccess(lname);
    }
    if (emailValue === "") {
        setError(email, "enter email!");
        error = true;
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Please enter a valid email.");
        error = true;
    } else {
        setSuccess(email);
    }
    if (passwordValue === "") {
        setError(password, "enter Password!");
        error = true;
    } else if (passwordValue.length < MINIMUM_PASS_LENGTH) {
        setError(password, "Password length is too short");
        error = true;
    } else {
        setSuccess(password);
    }
    if (password2Value === "") {
        setError(password2, "reenter password!");
        error = true;
    } else if (password2Value !== passwordValue) {
        setError(password2, "Password doesn't match!");
        error = true;
    } else {
        setSuccess(password2);
    }
    if (error === true) {
        console.log(error);
        e.preventDefault();
    } else {
        let userInfo = {
            firstName: userValue,
            lastName: lnameValue,
            emailAddress: emailValue,
            pass: passwordValue,
            status: onlineStatus,
        };
        localStorage.setItem("userinfo", JSON.stringify(userInfo));
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
};

const isValidEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email.toLowerCase()));
};
