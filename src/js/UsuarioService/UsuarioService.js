const usuario = {
    name: "Humberto",
    email: "indre3383@uorak.com",
    user_type_id: 1,
    password: "123456",
    cpf_cnpj: "11796588091",
    terms: 1,
    birthday: "2001-05-23"
}

const cadastroUsuario = {
    "name": usuario.name,
    "email": usuario.email,
    "user_type_id": usuario.user_type_id,
    "password": usuario.password,
    "cpf_cnpj": usuario.cpf_cnpj,
    "terms": usuario.terms,
    "birthday": usuario.birthday
}

const loginUsuario = {
    "email": usuario.email,
    "password": usuario.password,
    "user_type_id": usuario.user_type_id
}

async function FazerCadastro(){
    const headers = {
        'Content-Type': 'application/json'
    }

    try {    
        const response = await fetch('https://go-wash-api.onrender.com/api/user',{
            method: "POST",
            headers: headers,
            body: JSON.stringify(cadastroUsuario)
        });
        
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        
        return
    } catch (error) {
        console.error('Erro:', error);
    }
}

async function FazerLogin(){
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