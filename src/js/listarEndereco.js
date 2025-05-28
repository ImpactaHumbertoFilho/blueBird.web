async function listagem() {
    let token = localStorage.getItem("token");
    let api = await fetch("https://go-wash-api.onrender.com/api/auth/address", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });

    if (api.ok) {
        let response = await api.json();
        console.log(response);
        exibirEnderecos(response.data);
    } else {
        console.error("Erro ao buscar endereços");
    }
}

function exibirEnderecos(enderecos) {
    const listaDeEnderecos = document.getElementById("lista-de-endereco");
    listaDeEnderecos.innerHTML = "<h2>Endereços cadastrados</h2>";

    enderecos.forEach(endereco => {
        listaDeEnderecos.innerHTML += `
            <div class="endereco-item">
                <p>Tipo: ${endereco.title}: Rua: ${endereco.address}, nº ${endereco.number} - ${endereco.cep}</p>
                <div class="icon-container-endereco">
                    <figure class="icon-endereco">
                        <!-- Ícone editar -->
                        <!-- (svg do editar aqui) -->
                    </figure>
                    <figure class="icon-endereco deletar-endereco" data-id="${endereco.id}">
                        <!-- Ícone excluir -->
                        <!-- (svg do excluir aqui) -->
                    </figure>
                </div>
            </div>
        `;
    });
}

// Delegação do clique para deletar
document.addEventListener("click", async (e) => {
    if (e.target.closest(".deletar-endereco")) {
        const id = e.target.closest(".deletar-endereco").getAttribute("data-id");
        if (confirm("Tem certeza que deseja deletar este endereço?")) {
            await deletar(id);
            listagem(); // Atualiza lista após deletar
        }
    }
});

listagem(); // inicia
