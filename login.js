import { app } from "./firebase";
import { 
    signInWithEmailAndPassword, 
    getAuth, 
    signOut, 
    signInWithPopup,
    createUserWithEmailAndPassword, // Corrigido: sem espaço
    sendPasswordResetEmail,
    GoogleAuthProvider 
} from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const loginComEmailESenha = async (email, senha) => {
    try {
        await signInWithEmailAndPassword(auth, email, senha);
        alert("Login bem-sucedido!");
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        alert("Falha no login: " + error.message);
    }
};

const registrarComEmailESenha = async (email, pwd) => { // Removi o 'name' que não é utilizado
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pwd); // Corrigido aqui
        const user = userCredential.user;
        alert("Cadastro bem-sucedido!");
    } catch (error) {
        console.error("Erro ao registrar:", error);
        alert("Falha no cadastro: " + error.message);
    }
};

const recuperarSenha = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Email de recuperação enviado");
    } catch (error) {
        console.error("Erro ao recuperar senha:", error);
        alert("Erro ao enviar email de recuperação: " + error.message);
    }
};

const logout = async () => {
    try {
        await signOut(auth);
        alert("Usuário desconectado");
    } catch (error) {
        console.error("Erro ao fazer logout:", error);
    }
};

const entrarComGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        alert("Login com Google bem-sucedido!");
    } catch (error) {
        console.error("Erro ao fazer login com Google:", error);
    }
};

// Event listeners para o envio dos formulários
document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Previne o envio padrão do formulário
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
    }

    await registrarComEmailESenha(email, password);
});

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Previne o envio padrão do formulário
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    await loginComEmailESenha(email, password);
});

// Event listeners for form submissions
document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
    }

    await registrarComEmailESenha(email, password);
});

document.getElementById('loginForm').addEventListener('submit', async (event) => {
   event.preventDefault(); // Prevent form submission
   const email = document.getElementById('loginEmail').value;
   const password = document.getElementById('loginPassword').value;

   await loginComEmailESenha(email, password);
});
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

let inputemail = document.querySelector('#registerEmail')

function validacao() {
    const email = document.querySelector('#registerEmail').value;

    if ( email === '') {
        alert('Preencha todos os campos !!');
        return false;
    }
    return validarEmail(document.querySelector('#registerEmail'));
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
        inputemail.style.border = '02px solid green'

        return true;
    } else {
        alert("E-mail inválido");
        inputemail.style.border = '02px solid red'
        return false;
    }
}

