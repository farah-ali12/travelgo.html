const button = document.querySelector("button");

button.addEventListener("click", function() {

    const username = document.querySelector('input[type="text"]');
    const email = document.querySelector('input[type="email"]');
    const password = document.querySelector('input[type="password"]');

    if (username.value === "" || email.value === "" || password.value === "") {

        alert("Please fill in all fields");

    } else {

        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);

        alert("Account created successfully!");

        window.location.href = "index.html";
    }

});