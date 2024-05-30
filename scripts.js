const correct_username = "test@luxpmsoft.com";
const correct_password = "test1234!";

function isPasswordValid(str) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    
    return regex.test(str);
}

var password_input = document.getElementById("login-password");

password_input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("login-button").click();
    }
});

document.getElementById("login-button").onclick = function () {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    if (!isPasswordValid(password)) {
        document.getElementById("password-alert").style.display = "block";
    }

    if (username != correct_username || password != correct_password) {
        alert("the provided password is wrong");

        return;
    }

    location.href = "page.html";
};