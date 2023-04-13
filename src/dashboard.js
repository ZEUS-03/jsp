const fnameElement = document.getElementById("fname");
const lnameElement = document.getElementById("lname");
const emailElement = document.getElementById("email");
const statusElement = document.getElementById("status");
const userName = document.getElementById("username");
const logOutBtn = document.getElementById("logout");

let user = JSON.parse(sessionStorage.getItem("loggedInUser"));

// (user===null) ? document.createElement("")

user.firstName === ""
    ? (userName.textContent = "Guest")
    : (userName.textContent = user.firstName);

fnameElement.textContent = user.firstName;
lnameElement.textContent = user.lastName;
emailElement.textContent = user.emailAddress;
user.status === ""
    ? (statusElement.textContent = "none")
    : (statusElement.textContent = user.status);

logOutBtn.addEventListener("click", () => {
    sessionStorage.clear();
    history.pushState(null, null, "login.html");
    window.location.replace("login.html");
});
