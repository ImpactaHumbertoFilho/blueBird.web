const url = 'https://go-wash-api.onrender.com/api/user';

async function Register(event){
    event.preventDefault();

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
    if (password.length < 6) {
        alert('A senha deve ter 6 dígitos')
        return
    }

    if (cpf_cnpj.length < 11 || cpf_cnpj.length > 15 ){
        alert('Verifique a quantidade de dígitos do cpf cnpj')
        return
    }

    try {    
        const response = await fetch(url, {
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
