const fnameElement = document.getElementById("fname");
const lnameElement = document.getElementById("lname");
const emailElement = document.getElementById("email");
const statusElement = document.getElementById("status");
const userName = document.getElementById("username");

let user = JSON.parse(localStorage.getItem("userinfo"));

user.firstName === ""
    ? (userName.textContent = "Guest")
    : (userName.textContent = user.firstName);

fnameElement.textContent = user.firstName;
lnameElement.textContent = user.lastName;
emailElement.textContent = user.emailAddress;
user.status === ""
    ? (statusElement.textContent = "none")
    : (statusElement.textContent = user.status);
