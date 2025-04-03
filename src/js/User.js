const baseUrl = 'https://go-wash-api.onrender.com/api';

async function FazerLogin(){
    let email = document.getElementById("email-input").value
    let password = document.getElementById("password-input").value 
    
    let userLogin =  {
        "email": email,
        "password": password,
        "user_type_id": 1
    }

    const headers = {
        'Content-Type': 'application/json'
    }

    const response = await fetch(baseUrl + '/login',{
        method: "POST",
        headers: headers,
        body: JSON.stringify(userLogin)
    });
    
    let result = await response.json()
    
    return {
        status: response.status,
        message: result
    }
}
async function Register(){
    let name = document.getElementById("name-input").value
    let birthday = document.getElementById("birthday-input").value
    let email = document.getElementById("email-input").value
    let cpf_cnpj = document.getElementById("cpf_cnpj-input").value
    let password = document.getElementById("password-input").value 
    
    let userRegistration =  {
        "name": name,
        "email": email,
        "user_type_id": 1,
        "password": password,
        "cpf_cnpj": cpf_cnpj,
        "terms": 1,
        "birthday": birthday
    }

    const response = await fetch(baseUrl + '/user', {
        method: "POST",
        body: JSON.stringify(userRegistration),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    let result = await response.json()
    
    return {
        status: response.status,
        message: result
    }
}

export { FazerLogin, Register };
