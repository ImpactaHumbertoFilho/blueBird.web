async function deletar(id) {
    const token = localStorage.getItem("token");

    const resposta = await fetch(`https://go-wash-api.onrender.com/api/auth/address/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!resposta.ok) {
        console.error("Erro ao deletar endereço:", await resposta.text());
    } else {
        console.log("Endereço deletado com sucesso.");
    }
}
