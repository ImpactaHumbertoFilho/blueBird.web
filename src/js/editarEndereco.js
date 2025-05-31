async function editar(id) {
    const endereco = {
        "title": document.getElementById('titulo-input').value,
        "cep": document.getElementById('cep-input').value,
        "address": document.getElementById('rua-input').value,
        "number": document.getElementById('numero-input').value,
        "complement": document.getElementById('complemento-input').value
    };

    console.log("Enviando para a API:", endereco); 

    const token = localStorage.getItem("token");

    if (!token) {
        console.error("Token não encontrado. Certifique-se de que o usuário está autenticado.");
        return;
    }

    const resposta = await fetch("https://go-wash-api.onrender.com/api/auth/address/"+ id, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(endereco)
    });

    if (!resposta.ok) {
        const erro = await resposta.json();
        console.error("Erro ao editar endereço:", erro);
        return;
    }

}

async function coletarDetalhes(id) {
    let token = localStorage.getItem("token");
    let api = await fetch("https://go-wash-api.onrender.com/api/auth/address/" + id, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });

    if (api.ok) {
        let data = await api.json();
        console.log(data);

        document.getElementById('titulo-input').value = data.data.title || '';
        document.getElementById('cep-input').value = data.data.cep || '';
        document.getElementById('rua-input').value = data.data.address || '';
        document.getElementById('numero-input').value = data.data.number || '';
        document.getElementById('complemento-input').value = data.data.complement || '';
    } else {
        console.error("Erro ao buscar endereços");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const enderecoId = params.get('id');

    if (enderecoId) {
        coletarDetalhes(enderecoId);
    }

    const form = document.getElementById('Form');
    if (form && enderecoId) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            editar(enderecoId);
        });
    }
});