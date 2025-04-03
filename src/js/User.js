const baseUrl = 'https://go-wash-api.onrender.com/api/user';

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

    try {
        const response = await fetch(baseUrl + '/login',{
            method: "POST",
            headers: headers,
            body: JSON.stringify(userLogin)
        });
        
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        
        return
    } catch (error) {
        console.error('Erro:', error);
    }
}
async function Register(){
    let name = document.getElementById("name").value
    let birthday = document.getElementById("birthday").value
    let email = document.getElementById("email").value
    let cpf_cnpj = document.getElementById("cpf_cnpj").value
    let password = document.getElementById("password").value 
    
    let userRegistration =  {
        "name": name,
        "email": email,
        "user_type_id": 1,
        "password": password,
        "cpf_cnpj": cpf_cnpj,
        "terms": 1,
        "birthday": birthday
    }

    if (userRegistration.password < 6) {
        alert("A senha deve ter 6 dígitos")
        return
    }

    try {    
        const response = await fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(userRegistration),
            headers: {
                'Content-Type': 'application/json'
            }
            
        });
        
        if (!response.ok) {
            alert("Erro de cadastro! Valide seus dados")
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        
        console.log(`${response.status} Cadastro realizado`)
        alert('Cadastro realizado! Verifique seu e-mail')
        return
    } catch (error) {
        console.error('Erro:', error);
    }
}
