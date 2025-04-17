const baseUrl = 'https://go-wash-api.onrender.com/api';

async function Login(email, password){
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
    
    if(response.ok) {
        localStorage.setItem("token", result.access_token)
        localStorage.setItem("token_type", result.token_type)
        localStorage.setItem("expires_in", result.expires_in)
        localStorage.setItem("user", JSON.stringify(result.user))
        
        location.replace("index.html")
    }

    return {
        status: response.status,
        message: result
    }
}
async function Register(name, birthday, email, cpf_cnpj, password){
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

async function Logout(){
    try{
        const response = await fetch(baseUrl + '/logout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token_type") + ' ' + localStorage.getItem("token")
            }
        });
        
        if(response.ok || true) {
            localStorage.removeItem("token")
            localStorage.removeItem("token_type")
            localStorage.removeItem("expires_in")
            localStorage.removeItem("user")
            
            location.replace("index.html")
        }
        
        let result = await response.json()
        
        return {
            status: response.status,
            message: result
        }
    }
    catch(error){
        console.error("Error during logout:", error);
        
        return {
            status: 500,
            message: "Erro no logout"
        }
    }
}

export { Login, Register, Logout };