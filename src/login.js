import { isEmailExists } from "./helper.js";

const logInEmail = document.getElementById("login-email");
const logInPass = document.getElementById("login-password");
const form = document.getElementById("login-form");
const wrongPassMessage = document.getElementById("wrong-pass");
const wrongEmailMessage = document.getElementById("wrong-email");
let ORIGINAL_PASS = "";

form.addEventListener("submit", (e) => {
    const emailValue = logInEmail.value;
    const passValue = logInPass.value;
    let error = false;
    let user = JSON.parse(localStorage.getItem("finalTest"));

    if (!isEmailExists(emailValue)) {
        wrongEmailMessage.innerHTML = "email not registered!";
        error = true;
    } else {
        wrongEmailMessage.innerHTML = "";
        ORIGINAL_PASS = user[[emailValue]]?.userInfo?.pass;
    }
    if (passValue.length < 8 || passValue !== ORIGINAL_PASS) {
        wrongPassMessage.innerHTML = "Password don't match!";

        error = true;
    } else {
        wrongPassMessage.innerHTML = "";
    }

    if (error === true) {
        e.preventDefault();
    } else {
        sessionStorage.setItem(
            "loggedInUser",
            JSON.stringify(user[[emailValue]].userInfo)
        );
        return true;
    }
});
