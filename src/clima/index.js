console.log("Estou funcionando!");
function buscarClima() {
    const botaoBuscar = document.querySelector('.search button');
    const pesquisarInput = document.querySelector('#pesquisarInput');

    botaoBuscar.addEventListener('click', (e) => {
        e.preventDefault();
        const local = pesquisarInput.value;

        if (local === '') {
            return;
        }

        preverTempo(local);
    });
}

async function preverTempo(local) {
    let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=7140f293d3a5fc6fee0ff8b4a23ffe8e&lang=pt_br&units=metric`);

    if (api.ok) {
        let resposta = await api.json();
        console.log(resposta);
        exibirClima(resposta);
    } else {
        console.error("Erro ao buscar clima");
    }
}

function exibirClima(clima) {
    const climaContainer =  document.querySelector('.clima');
    climaContainer.innerHTML = `
        <h2>Clima em ${clima.name}</h2>
        <div class="clima-info">
            <p>Temperatura:  ${Math.round(clima.main.temp)}°C</p>
        </div>
    `;

}
document.addEventListener("DOMContentLoaded", () => {
    buscarClima();
});
