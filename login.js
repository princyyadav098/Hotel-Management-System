document.getElementById("loginForm").addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Get registered users
    const users = JSON.parse(localStorage.getItem("hotelUsers")) || [];

    // Check whether user exists
    const user = users.find(function (u) {
        return u.email.toLowerCase() === email &&
               u.password === password;
    });

    if (user) {

        // Save logged-in user
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        message.style.color = "green";
        message.textContent = "Login successful!";

        // Open dashboard
        setTimeout(function () {
            window.location.href = "dashboard.html";
        }, 500);

    } else {

        message.style.color = "red";
        message.textContent = "Invalid email or password.";

    }

});