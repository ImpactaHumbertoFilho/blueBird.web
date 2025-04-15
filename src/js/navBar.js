document.addEventListener("DOMContentLoaded", () => {
    const navLogin = document.getElementById("nav-login");

    const userCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('user='));
    
    if (userCookie) {
        const user = JSON.parse(decodeURIComponent(userCookie.split('=')[1]));

        console.log(user)

        navLogin.innerHTML = `<a href="profile.html">Olá, ${user.name}</a>`;
    } else {
        navLogin.innerHTML = `<a href="login.html">Entrar</a>`;
    }
    });