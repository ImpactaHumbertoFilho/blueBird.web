import { userUrl } from '../Shared/Urls.js';

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
        const response = await fetch(userUrl,{
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