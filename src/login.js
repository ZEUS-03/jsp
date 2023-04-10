import { isValidEmail } from "./helper.js";

const logInEmail = document.getElementById("login-email");
const logInPass = document.getElementById("login-password");
const form = document.getElementById("login-form");
const wrongPassMessage = document.getElementById("wrong-pass");
const wrongEmailMessage = document.getElementById("wrong-email");

const userInfo = JSON.parse(localStorage.getItem("userinfo"));

form.addEventListener("submit", (e) => {
    const emailValue = logInEmail.value;
    const passValue = logInPass.value;
    let error = false;

    if (!isValidEmail(emailValue) || emailValue !== userInfo.emailAddress) {
        console.log("email not registered!");
        wrongEmailMessage.innerHTML = "Please Enter a valid email address!";
        error = true;
    } else {
        wrongEmailMessage.innerHTML = "";
    }
    if (passValue.length < 8 || passValue !== userInfo.pass) {
        console.log(userInfo.pass, passValue);
        console.log("password error");
        wrongPassMessage.innerHTML = "Password don't match!";

        error = true;
    } else {
        wrongPassMessage.innerHTML = "";
    }

    if (error === true) {
        e.preventDefault();
    } else {
        return True;
    }
});
