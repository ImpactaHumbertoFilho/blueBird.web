document.addEventListener("click", async (e) => {
    if (e.target.closest(".deletar-endereco")) {
        const id = e.target.closest(".deletar-endereco").getAttribute("data-id");
        if (confirm("Tem certeza que deseja deletar este endereço?")) {
            await deletar(id);
            listagem(); 
        }
    }
});
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
