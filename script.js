//menu hamburguer
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.navLinks.forEach(link => {
            link.classList.toggle(this.activeClass);
        });
        this.animateLinks();
    }

    addClickEvent() {
        if (this.mobileMenu) {
            this.mobileMenu.addEventListener("click", this.handleClick);
        }
    }

    init() {
        this.addClickEvent();
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".Nav-Bar",
    ".Nav-Bar li",
);
mobileNavbar.init();

// mostrar e esconder elementos 
document.addEventListener('DOMContentLoaded', () => {
    function exibir_Ocultar_Container() {
        // Containers
        const Container_JogosPs3 = document.querySelector('.Container-Jogos-PS3');
        const Container_JogosPs4 = document.querySelector('.Container-Jogos-PS4');
        const Container_JogosPs5 = document.querySelector('.Container-Jogos-PS5');
        const Container_Console = document.querySelector('.Container-Console');
        const Container_PC = document.querySelector('.Container-PC');

        // Li
        const Inicio = document.querySelector('.Inicio');
        const JogosPS3 = document.querySelector('.Jogos-PS3');
        const JogosPS4 = document.querySelector('.Jogos-PS4');
        const JogosPS5 = document.querySelector('.Jogos-PS5');
        const Consoles = document.querySelector('.Console-li');
        const PC = document.querySelector('.PC-Gamer');

    

        JogosPS3.addEventListener("click", () => {
            Container_JogosPs3.scrollIntoView({ behavior: "smooth" });
        });

        JogosPS4.addEventListener("click", () => {
            Container_JogosPs4.scrollIntoView({ behavior: "smooth" });
        });

        JogosPS5.addEventListener("click", () => {
            Container_JogosPs5.scrollIntoView({ behavior: "smooth" });
        });

        Consoles.addEventListener("click", () => {
            Container_Console.scrollIntoView({ behavior: "smooth" });
        });

        PC.addEventListener("click", () => {
            Container_PC.scrollIntoView({ behavior: "smooth" });
        });
    }

    exibir_Ocultar_Container();
});
const searchInput = document.getElementById('searchInput');
const gamesList = document.querySelectorAll('.Jogos');
const consoleList = document.querySelectorAll('.Console');
const pcList = document.querySelectorAll('.PC');
const pesquisa = document.querySelector('.pesquisar');

// Função para filtrar os resultados
function filtrarResultados() {
    const filter = searchInput.value.toLowerCase();
    if (filter === '') {
        alert('Por favor, digite algo para pesquisar!');
        return;
    }

    gamesList.forEach(function (game) {
        const title = game.querySelector('.Titulo');
        const txtValue = title.textContent || title.innerText;
        game.style.display = txtValue.toLowerCase().includes(filter) ? "" : "none";
    });

    consoleList.forEach(function (console) {
        const title = console.querySelector('.Titulo');
        const txtValue = title.textContent || title.innerText;
        console.style.display = txtValue.toLowerCase().includes(filter) ? "" : "none";
    });

    pcList.forEach(function (pc) {
        const title = pc.querySelector('.Titulo');
        const txtValue = title.textContent || title.innerText;
        pc.style.display = txtValue.toLowerCase().includes(filter) ? "" : "none";
    });
}

searchInput.addEventListener('keyup', filtrarResultados);

pesquisa.addEventListener('click', filtrarResultados);

// carrinho de compras
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

let quantidadePedido = 0;
const Quantidade_Pedido = document.querySelector('.Quantidade-Pedido-Carrinho');

function ready() {
    const adicionarCarrinhoButtons = document.getElementsByClassName('Adicionar-Carrinho');
    for (let i = 0; i < adicionarCarrinhoButtons.length; i++) {
        adicionarCarrinhoButtons[i].addEventListener('click', adicionarCarrinho);
    }
}

//fechar carrinho
const fecharCarrinho = document.querySelector('.fechar-carrinho')

fecharCarrinho.addEventListener('click', ()=>{
document.querySelector('.Container-Pedido').style.display = 'none'
})

const carrinhoButton = document.querySelector('.Carrinho');
carrinhoButton.addEventListener('click', () => {
    if (quantidadePedido > 0) {
        document.querySelector('.Container-Pedido').style.display = 'block';
    } else {
        document.querySelector('.Container-Pedido').style.display = 'none';
        alert('o carrinho está vazio!')
    }
});



function adicionarCarrinho(event) {
    const button = event.target;
    const info = button.parentElement;
    const imagem = info.getElementsByClassName('Imagem')[0].src;
    const preco = info.getElementsByClassName('Preco')[0].innerText;
    const titulo = info.getElementsByClassName('Titulo')[0].innerText;

    const pedidos = document.getElementsByClassName('Pedido');
    for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i].querySelector('h1').innerText === titulo) {
            const quantidadeElement = pedidos[i].getElementsByClassName('Quantidade')[0];
            quantidadeElement.value = parseInt(quantidadeElement.value) + 1;
            atualizarPreco();
            return;
        }
    }

    const novoPedido = document.createElement('div');
    novoPedido.classList.add('Pedido');

    novoPedido.innerHTML = `
        <img src="${imagem}" alt="${titulo}">
        <h1>${titulo}</h1>
        <div class="Total-Container">
            <span class="Preco">${preco}</span>
            <input type="number" class="Quantidade" min="1" max="10" value="1">
        </div>
        <button class="Remover-Pedido">Remover</button>
    `
    const containerPedido = document.querySelector('.Itens-Carrinho');
    containerPedido.append(novoPedido);

    // Adicionar evento para o botão de remover
    novoPedido.getElementsByClassName('Remover-Pedido')[0].addEventListener('click', removeProduct);
    // Adicionar evento para o input de quantidade
    novoPedido.getElementsByClassName('Quantidade')[0].addEventListener('change', atualizarPreco);

    quantidadePedido++;
    Quantidade_Pedido.textContent = quantidadePedido;

    atualizarPreco();
}

function removeProduct(event) {
    const button = event.target;
    button.parentElement.remove();
    quantidadePedido--;
    Quantidade_Pedido.textContent = quantidadePedido;
    atualizarPreco();
}

function atualizarPreco() {
    let total = 0;
    const pedidos = document.getElementsByClassName('Pedido');
    for (let i = 0; i < pedidos.length; i++) {
        const precoElement = pedidos[i].getElementsByClassName('Preco')[0];
        const quantidadeElement = pedidos[i].getElementsByClassName('Quantidade')[0];
        const preco = parseFloat(precoElement.innerText.replace('R$', '').replace(',', '.'));
        const quantidade = parseInt(quantidadeElement.value, 10);

        total += preco * quantidade;
    }
    total = total.toFixed(2).replace('.', ',');
    document.querySelector('.Total-Container span').innerText = 'R$ ' + total;
}

//validar e-mail para enviar notificação

let inputemail = document.querySelector('.email-input')

function validacao() {
    const nome = document.querySelector('.nome-input').value;
    const email = document.querySelector('.email-input').value;

    if (nome === '' || email === '') {
        alert('Preencha todos os campos !!');
        return false;
    }
    return validarEmail(document.querySelector('.email-input'));
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
        document.querySelector(".msgemail").innerHTML = "E-mail válido";
        inputemail.style.border = '02px solid green'

        return true;
    } else {
        document.querySelector(".msgemail").innerHTML = "<font color='red'>E-mail inválido</font>";
        alert("E-mail inválido");
        inputemail.style.border = '02px solid red'
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.Container-Form').addEventListener('submit', function (event) {
        event.preventDefault();
        if (validacao()) {
            alert('Dados enviados com sucesso!');
            this.submit();
        }
    });

});
// hora de funcionamento do site
function horarios_funcionamento() {
    const funcionamento = document.querySelector('.Funcionamento')
    const horario = new Date()
    const hora_funcionamento = horario.getHours()
    const dia = new Date()
    const dia_funcionamento = dia.getDay()

    if (dia_funcionamento == 0 && dia_funcionamento == 6) {
        alert('o estabelecimento está fechado. abre de seg á sex 08:00 ás 18:00!')
    }

    if (hora_funcionamento >= 8 && hora_funcionamento < 18) {
        funcionamento.innerText = 'Aberto'
        funcionamento.style.color = 'green'
    } else {
        funcionamento.innerText = 'fechado'
        funcionamento.style.color = 'red'
    }

}
horarios_funcionamento()


const observar = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})
const elements = document.querySelectorAll('.hidden')
elements.forEach((elements) => observar.observe(elements))


//galeria das promoçoes e lançamentos do site
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("galeria");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 10000);
}

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("galeria");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// galeria dos controles dos console
let currentImageIndex = 0;
let currentImageIndex2 = 0;
let currentImageIndex3 = 0;

function changeImage(direction) {
    const images = [
        "img-eletronicos/controle-black-ps3.png",
        "img-eletronicos/controle-prata-ps3.webp"
    ];
    currentImageIndex = (currentImageIndex + direction) % images.length;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    document.getElementById("mainImage").src = images[currentImageIndex];
}

function changeImage2(direction) {
    const images = [
        "img-eletronicos/controle-black-ps4.webp",
        "img-eletronicos/controle-ps4-azul.webp",
        "img-eletronicos/controle-white-ps4.webp"
    ];
    currentImageIndex2 = (currentImageIndex2 + direction) % images.length;
    if (currentImageIndex2 < 0) {
        currentImageIndex2 = images.length - 1;
    }
    document.getElementById("mainImage2").src = images[currentImageIndex2];
}

function changeImage3(direction) {
    const images = [
        "img-eletronicos/controle-ps5-white.jpg",
        "img-eletronicos/controle-ps5-black.png",
        "img-eletronicos/controle-ps5-rosa.png"
    ];
    currentImageIndex3 = (currentImageIndex3 + direction) % images.length;
    if (currentImageIndex3 < 0) {
        currentImageIndex3 = images.length - 1;
    }
    document.getElementById("mainImage3").src = images[currentImageIndex3];
}

const promocaoFarCry = document.querySelector('.promocao-farcryseis')
const card_direcinar = document.querySelector('.promocao-farcry-card')

promocaoFarCry.addEventListener('click', ()=>{
card_direcinar.scrollIntoView({ behavior: "smooth" });

card_direcinar.style.border = '02px solid red'


})
