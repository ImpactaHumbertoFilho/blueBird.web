async function FazerLogin(event){
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const loginUsuario = {
        email: formData.get('loginEmail'),
        password: formData.get('loginPassword'),
        user_type_id: 1
    };

    const headers = {
        'Content-Type': 'application/json'
    }

    try {    
        const response = await fetch('https://go-wash-api.onrender.com/api/login',{
            method: "POST",
            headers: headers,
            body: JSON.stringify(loginUsuario)
        });
        
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        
        return
    } catch (error) {
        console.error('Erro:', error);
    }
}