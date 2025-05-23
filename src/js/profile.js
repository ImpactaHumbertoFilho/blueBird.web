document.addEventListener("DOMContentLoaded", () => {
    const nomeUser = document.getElementById("profile-name");
    const userJson = localStorage.getItem("user");

    if (userJson) {
        const user = JSON.parse(decodeURIComponent(userJson));

        nomeUser.innerHTML = `
            <figure class="user-icon-profile">
                <svg id="open-menu-icon" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e3e3e3"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/></svg>
            </figure>
            <h3>Olá, ${user.name}</h3>
            `;
    }
    return none;
})