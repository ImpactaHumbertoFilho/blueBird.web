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

async function Register(userRegistrationForm){
    const userRegistration = {
        name: userRegistrationForm.name,
        email: userRegistrationForm.email,
        user_type_id: 1,
        password: userRegistrationForm.password,
        cpf_cnpj: userRegistrationForm.cpf_cnpj,
        terms: userRegistrationForm.terms,
        birthday: userRegistrationForm.birthday
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