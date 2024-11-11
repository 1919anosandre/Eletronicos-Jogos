document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form-pagamento');
  const numeroCartao = document.querySelector('.numero-cartao');
  const cvv = document.querySelector('.cvv');
  const cpf = document.querySelector('.cpf');
  const validade = document.querySelector('.validade'); // Campo para data de validade do cartão

  // Regex para validação de tipos de cartão
  const tiposCartoes = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
    amex: /^3[47][0-9]{13}$/,
    discover: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
    diners_club: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    jcb: /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/
  };

  // Validação do CPF com máscara
  cpf.addEventListener('keypress', () => {
    let inputLength = cpf.value.length;
    if (inputLength === 3 || inputLength === 7) {
      cpf.value += '.';
    } else if (inputLength === 11) {
      cpf.value += '-';
    } else if (inputLength > 13) {
      alert('CPF inválido');
      cpf.value = cpf.value.slice(0, 13);
    }
  });

  // Evento submit do formulário
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Verifica se todos os campos foram preenchidos
    if (!numeroCartao.value || !cvv.value || !cpf.value || !validade.value) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Valida o número do cartão
    let cartaoValido = false;
    for (let tipo in tiposCartoes) {
      if (tiposCartoes[tipo].test(numeroCartao.value)) {
        cartaoValido = true;
        break;
      }
    }
    if (!cartaoValido) {
      alert('Número de cartão inválido');
      return;
    }

    // Valida o CVV
    if (cvv.value.length !== 3 && cvv.value.length !== 4) {
      alert('CVV inválido');
      return;
    }

    // Validação da data de validade
    const validadeArray = validade.value.split('/');
    if (validadeArray.length !== 2 || validadeArray[0] < 1 || validadeArray[0] > 12 || validadeArray[1].length !== 2 || validadeArray[1] < 23) {
      alert('Data de validade inválida');
      return;
    }
    
    const currentYear = new Date().getFullYear() % 100; // Obtém os dois últimos dígitos do ano atual
    const currentMonth = new Date().getMonth() + 1; // Mês atual (1-12)

    // Verifica se o cartão está expirado
    if (parseInt(validadeArray[1]) < currentYear || (parseInt(validadeArray[1]) === currentYear && parseInt(validadeArray[0]) < currentMonth)) {
      alert('O cartão está expirado');
      return;
    }

    // Se tudo estiver correto, exibe uma mensagem de sucesso
    alert('Pagamento realizado com sucesso!');
  });
});


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



