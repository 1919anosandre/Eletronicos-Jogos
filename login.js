
// se nao possuir conta ou nao estiver cadastra-do entao ira se cadastrar
document.addEventListener('DOMContentLoaded', () => {
    const cadastrar = document.querySelector('.cadastre-se');
    const autenticacaoCadastrar = document.querySelector('.container-autenticacao-cadastrar');
    const autenticacaoLogar = document.querySelector('.container-autenticacao-login');

    // Inicialmente, exibe a tela de login
    autenticacaoLogar.style.display = 'flex';
    autenticacaoCadastrar.style.display = 'none'

    // Evento para alternar entre as telas
    cadastrar.addEventListener('click', (event) => {
        event.preventDefault(); // Previne o comportamento padrão do link
        autenticacaoCadastrar.style.display = 'flex';
        autenticacaoLogar.style.display = 'none';
    });
});


//validar e-mail para enviar notificação
let inputEmail = document.querySelector('#registerEmail');
let registrarSenhaInput = document.querySelector('#registerPassword');
let confirmarSenhaInput = document.querySelector('#confirmPassword');

function validacao() {
    const email = inputEmail.value;

    if (email === '') {
        alert('Preencha todos os campos !!');
        return false;
    }
    return validarEmail(inputEmail);
}

function validarEmail(field) {
    const usuario = field.value.substring(0, field.value.indexOf("@"));
    const dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") === -1) &&
        (dominio.search("@") === -1) &&
        (usuario.search(" ") === -1) &&
        (dominio.search(" ") === -1) &&
        (dominio.search(".") !== -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        inputEmail.style.border = '2px solid green';
        return true;
    } else {
        alert("E-mail inválido");
        inputEmail.style.border = '2px solid red';
        return false;
    }
}

function senhasCadastrar() {
    const registrarSenha = registrarSenhaInput.value;
    const confirmarSenha = confirmarSenhaInput.value;

    if (registrarSenha.length < 8) {
        alert('A senha precisa conter no mínimo 8 caracteres');
        registrarSenhaInput.style.border = '2px solid red';
        return false;
    }
    if (registrarSenha !== confirmarSenha) {
        alert('As senhas não são iguais');
        registrarSenhaInput.style.border = '2px solid red';
        confirmarSenhaInput.style.border = '2px solid red';
        return false;
    }

    const senhaForte = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&()_+{}\[\]:;<>,.?~\\/-])/;
    if (senhaForte.test(registrarSenha)) {
        registrarSenhaInput.style.border = '2px solid green';
        return true;
    } else {
        registrarSenhaInput.style.border = '2px solid red';
        alert('A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial');
        return false;
    }
}

// Função de login
function login() {
    const inputEmailLogin = document.querySelector('#loginEmail');
    const inputSenhaLogin = document.querySelector('#loginPassword');

    const email = inputEmailLogin.value;
    const senha = inputSenhaLogin.value;

    if (email === '' || senha === '') {
        alert('Preencha todos os campos de login!');
        return false;
    }

    // Validação do e-mail
    if (!validarEmail(inputEmailLogin)) {
        return false;
    }

    // Validação da senha
    if (senha.length < 8) {
        alert('A senha precisa conter no mínimo 8 caracteres');
        inputSenhaLogin.style.border = '2px solid red';
        return false;
    }

    const senhaForteLogin = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&()_+{}\[\]:;<>,.?~\\/-])/;
    if (senhaForteLogin.test(senha)) {
        inputSenhaLogin.style.border = '2px solid green';
        alert('Login realizado com sucesso!');
        return true;
    } else {
        inputSenhaLogin.style.border = '2px solid red';
        alert('A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial');
        return false;
    }
}document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');

    // Função para validar o formulário de registro
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const email = document.getElementById('registerEmail').value;
        const senhaInput = document.getElementById('registerPassword');
        const confirmarSenhaInput = document.getElementById('confirmPassword');

        const senha = senhaInput.value;
        const confirmarSenha = confirmarSenhaInput.value;

        // Validação simples
        if (email === '' || senha === '' || confirmarSenha === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (senha.length < 8) {
            alert('A senha precisa conter no mínimo 8 caracteres');
            senhaInput.style.border = '2px solid red'; 
            return false;
        }

        if (senha !== confirmarSenha) {
            alert('As senhas não são iguais');
            senhaInput.style.border = '2px solid red'; 
            confirmarSenhaInput.style.border = '2px solid red'; 
            return false;
        }

        const senhaForte = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&()_+{}\[\]:;<>,.?~\\/-])/;
        if (senhaForte.test(senha)) {
            senhaInput.style.border = '2px solid green'; // Corrigido para usar o elemento correto
            // Se tudo estiver certo, redirecionar
            window.location.href = 'http://127.0.0.1:5500/station-games/index.html'; // Altere para a URL desejada
        } else {
            senhaInput.style.border = '2px solid red'; // Corrigido para usar o elemento correto
            alert('A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial');
            return false;
        }
    });
});
const loginForm = document.getElementById('loginForm');

    // Função para validar o formulário de login
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const email = document.getElementById('loginEmail').value;
        const senha = document.getElementById('loginPassword').value;

        // Validação simples
        if (email === '' || senha === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (senha.length < 8) {
            alert('A senha precisa conter no mínimo 8 caracteres');
            registrarSenhaInput.style.border = '2px solid red';
            return false;
        }

        // Se tudo estiver certo, redirecionar
        window.location.href = 'http://127.0.0.1:5500/station-games/index.html'; // Altere para a URL desejada
    });

