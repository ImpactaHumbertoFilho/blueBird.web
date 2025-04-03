const form = document.getElementById('Form');

const nameInput = document.getElementById("name-input")
const birthdayInput = document.getElementById("birthday-input")
const cpf_cnpjInput = document.getElementById("cpf_cnpj-input")
const termsInput = document.getElementById("terms-input")
const emailInput = document.getElementById('email-input');
const senhaInput = document.getElementById('password-input');

const error_message = document.getElementById('error-message');

const allInputs = [emailInput, senhaInput, nameInput, birthdayInput, cpf_cnpjInput, termsInput].filter(input => input !== null);
allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorreto')) {
            input.parentElement.classList.remove('incorreto');
            error_message.innerText = '';
        }
    })
})

form.addEventListener('submit', (e) => {

    let erros = [];

    if(nameInput){
        erros = coletarCadastroFormErros(emailInput.value, senhaInput.value, nameInput.value, birthdayInput.value, cpf_cnpjInput.value, termsInput.value)
    }
    else{
        erros = coletarLoginFormErros(emailInput.value, senhaInput.value)
    }

    console.log(erros)
    if (erros.length > 0) {
        error_message.innerText = erros.join('. ');
    }
    
    e.preventDefault();
})

function coletarLoginFormErros(email, senha) {
    let erros = [];

    if (!/\S+@\S+\.\S+/.test(email)) {
        erros.push('Por favor, insira um endereço de e-mail válido');
        emailInput.parentElement.classList.add('incorreto');
    }

    if (senha.length < 6) {
        erros.push('A senha deve ter pelo menos 6 caracteres');
        senhaInput.parentElement.classList.add('incorreto');
    }

    return erros;
}

function coletarCadastroFormErros(email, senha, nome, aniversario, cpf_cnpj, termos) {
    let erros = [];

    if (nome === '') {
        erros.push('O nome é obrigatório');
        nameInput.parentElement.classList.add('incorreto');
    }
    

    if (!/\S+@\S+\.\S+/.test(email)) {
        erros.push('Por favor, insira um endereço de e-mail válido');
        emailInput.parentElement.classList.add('incorreto');
    }

    if (senha.length < 6) {
        erros.push('A senha deve ter pelo menos 6 caracteres');
        senhaInput.parentElement.classList.add('incorreto');
    }

    return erros;
}