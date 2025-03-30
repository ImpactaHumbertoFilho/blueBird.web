const baseUrl = 'https://go-wash-api.onrender.com/api';

//Usuario que criei pra testarmos
//indre3383@uorak.com
//123456 

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

// async function FazerLogin(event){
//     event.preventDefault();

//     let email = document.getElementById("email").value
//     let senha = document.getElementById("senha").value 
    

//     let loginUsuario =  {
//         "email": email,
//         "password": password
//     }

//     const headers = {
//         'Content-Type': 'application/json'
//     }

//     try {    
//         const response = await fetch(baseUrl + '/login',{
//             method: "POST",
//             headers: headers,
//             body: JSON.stringify(loginUsuario)
//         });
        
//         if (!response.ok) {
//             throw new Error(`Erro HTTP! Status: ${response.status}`);
//         }
        
//         return
//     } catch (error) {
//         console.error('Erro:', error);
//     }
// }

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

    const headers = {
        'Content-Type': 'application/json'
    }

    try {    
        const response = await fetch(baseUrl + '/user', {
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
