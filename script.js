//pagamentos

const numeroCartao = document.querySelector('.numero-cartao')
const cvv = document.querySelector('.cvv')
const cpf = document.querySelector('.cpf')

if(numeroCartao === '' && cvv === '' && cpf ===''){
alert('por favor preencha todos os campos!')
}

cpf.addEventListener('keypress' , ()=>{
let inputLength = cpf.value.length

if(inputLength === 3 || inputLength ===7){
cpf.value += '.'
}
else if(inputLength === 11){
cpf.value += '-'
}
else if(inputLength > 13){
alert('cpf invalido')
}
})


/*let tiposCartoes = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
    amex: /^3[47][0-9]{13}$/,
    discover: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
    diners_club: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    jcb: /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/
  };

if(cvv.value < 4 ){
alert('cvv invalido')
}*/

// ocultar mostrar
document.addEventListener('DOMContentLoaded' , ()=>{
  const pagPix = document.querySelector('.pag-pix');
  const cartaoInputs = document.querySelector('.cartao-inputs');
  const pixImg = document.querySelector('.pix-img');
  const cartaoImg = document.querySelector('.cartao-img');
  const dinheiroImg = document.querySelector('.dinheiro-img');

  cartaoInputs.style.display = 'flex';
  cartaoImg.border = '1px solid red';
  pagPix.style.display = 'none'

  cartaoImg.addEventListener('click' , ()=>{
  cartaoInputs.style.display = 'flex';
  pagPix.style.display = 'none';

  })

  pixImg.addEventListener('click' , ()=>{
    cartaoInputs.style.display = 'none';
    pagPix.style.display = 'flex';
    })
})


