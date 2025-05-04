const loginForm = document.querySelector(".login-form");
const emailInput = document.querySelector('[type="email"]');
const passwordInput = document.querySelector('[type="password"]');

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const { email: emailInput, password: passwordInput } =
        event.currentTarget.elements;

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    if (!email || !password) {
        alert("All form fields must be filled in");
        return;
    }

    const UserData = {
        email,
        password,
    };
    console.log(UserData);

    loginForm.reset();
});
