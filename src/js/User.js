const baseUrl = 'https://go-wash-api.onrender.com/api';

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
        const response = await fetch(baseUrl + '/login',{
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

async function Register(event){
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);

    const termos = 0
    if(formData.get("terms") == "True"){
        termos = 1
    }
    console.log(formData.get("terms"))

    const userRegistration = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        cpf_cnpj: formData.get("cpf_cnpj"),
        terms: termos,
        birthday: formData.get("birthday"),
        user_type_id: 1
    };

    const headers = {
        'Content-Type': 'application/json'
    }

    try {    
        const response = await fetch(baseUrl + "/user",{
            method: "POST",
            headers: headers,
            body: JSON.stringify(userRegistration)
        });
        
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        
        return
    } catch (error) {
        console.error('Erro:', error);
    }
}