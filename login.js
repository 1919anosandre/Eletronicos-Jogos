import { app } from "./firebase";
import { 
    signInWithEmailAndPassword, 
    getAuth, 
    signOut, 
    signInWithPopup,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    GoogleAuthProvider 
} from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

/* 
=> aqui serão inseridas as funções invocadas pela interface.
Após declarar, não esquecer de adicionar ao final, como componente do módulo a ser exportado.
*/

const loginComEmailESenha = async (email, senha) => {
    try {
        await signInWithEmailAndPassword(auth, email, senha);
    } catch (error) {
        console.error("Erro ao fazer login:", error);
    }
};

const registrarComEmailESenha = async (name, email, pwd) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pwd);
        const user = userCredential.user;
        // Adicione lógica adicional, como atualizar o perfil do usuário
    } catch (error) {
        console.error("Erro ao registrar:", error);
    }
};

const recuperarSenha = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        console.log("Email de recuperação enviado");
    } catch (error) {
        console.error("Erro ao recuperar senha:", error);
    }
};

const logout = async () => {
    try {
        await signOut(auth);
        console.log("Usuário desconectado");
    } catch (error) {
        console.error("Erro ao fazer logout:", error);
    }
};

const entrarComGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        console.log("Login com Google bem-sucedido:", user);
    } catch (error) {
        console.error("Erro ao fazer login com Google:", error);
    }
};

export {
    auth,
    loginComEmailESenha,
    registrarComEmailESenha,
    recuperarSenha,
    logout,
    entrarComGoogle
};


// se nao possuir conta ou nao estiver cadastra-do entao ira se cadastrar


document.addEventListener('DOMContentLoaded' , ()=>{

const cadastrar = document.querySelector('.cadastre-se')
const autenticacaoCadastrar = document.querySelector('.container-autenticacao-cadastrar')
const autenticacaoLogar = document.querySelector('.container-autenticacao-login')

autenticacaoCadastrar.style.display = 'none'
autenticacaoLogar.style.display = 'flex'

cadastrar.addEventListener('click' , ()=>{
autenticacaoCadastrar.style.display = 'flex'
autenticacaoLogar.style.display = 'none'
})
})



