document.addEventListener("DOMContentLoaded", () => {
    const navLogin = document.getElementById("nav-login");
    const userJson = localStorage.getItem("user");

    if (userJson) {
        const user = JSON.parse(decodeURIComponent(userJson));

        navLogin.innerHTML = `<a href="profile.html">Olá, ${user.name}</a>`;
    } else {
        navLogin.innerHTML = `<a href="login.html">Entrar</a>`;
    }
    });