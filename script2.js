const form = document.querySelector("#loginForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (email.value === "" || password.value === "") {

        alert("Please fill in all fields");

    } else if (email.value === savedEmail && password.value === savedPassword) {

        alert("Signed in successfully!");

        window.location.href = "home.html";

    } else {

        alert("Wrong email or password");

    }

});