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

