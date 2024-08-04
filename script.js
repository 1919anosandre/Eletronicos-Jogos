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


document.addEventListener('DOMContentLoaded', () => {

    function exibir_Ocultar_Container() {
        //Containers
        const Container_Principal = document.querySelector('.Container-Principal')
        const Container_JogosPs3 = document.querySelector('.Container-Jogos-PS3')
        const Container_JogosPs4 = document.querySelector('.Container-Jogos-PS4')
        const Container_JogosPs5 = document.querySelector('.Container-Jogos-PS5')
        const Container_Console = document.querySelector('.Container-Console')
        const Container_PC = document.querySelector('.Container-PC')
        //Li
        const Inicio = document.querySelector('.Inicio')
        const JogosPS3 = document.querySelector('.Jogos-PS3')
        const JogosPS4 = document.querySelector('.Jogos-PS4')
        const JogosPS5 = document.querySelector('.Jogos-PS5')
        const Consoles = document.querySelector('.Console-li')
        const PC = document.querySelector('.PC-Gamer')

        Container_Principal.style.opacity = '0';
        Container_JogosPs4.style.display = 'none'
        Container_JogosPs3.style.display = 'flex'
        Container_JogosPs5.style.display = 'none'
        Container_PC.style.display = 'none'



        setTimeout(() => {
            let opacity = 0;
            const interval = setInterval(() => {
                opacity += 0.05;
                Container_Principal.style.opacity = opacity.toString();

                if (opacity >= 1) {
                    clearInterval(interval);
                }
            }, 100); // Ajuste o tempo para suavidade desejada
        }, 1000); // Tempo de espera inicial de 3 segundos



        Inicio.addEventListener("click", () => {
            Container_Principal.scrollIntoView({ behavior: "smooth" });
            Inicio.style.borderBottom = '4px solid yellow'
            JogosPS3.style.borderBottom = 'none'
            JogosPS4.style.borderBottom = 'none'
            PC.style.borderBottom = 'none'
            Consoles.style.borderBottom = 'none'
        });

        JogosPS3.addEventListener("click", () => {
            Container_JogosPs3.scrollIntoView({ behavior: "smooth" });
            Container_JogosPs3.style.display = 'flex'
            JogosPS3.style.borderBottom = '4px solid yellow'
            Inicio.style.borderBottom = 'none'
            JogosPS4.style.borderBottom = 'none'
            JogosPS5.style.borderBottom = 'none'
            PC.style.borderBottom = 'none'
            Consoles.style.borderBottom = 'none'
            Container_JogosPs4.style.display = 'none'
            Container_JogosPs5.style.display = 'none'
        });

        JogosPS4.addEventListener("click", () => {
            Container_JogosPs4.scrollIntoView({ behavior: "smooth" });
            JogosPS4.style.borderBottom = '4px solid yellow'
            Container_JogosPs4.style.display = 'flex'
            Container_JogosPs3.style.display = 'none'
            Container_JogosPs5.style.display = 'none'
            Inicio.style.borderBottom = 'none'
            JogosPS3.style.borderBottom = 'none'
            JogosPS5.style.borderBottom = 'none'
            PC.style.borderBottom = 'none'
            Consoles.style.borderBottom = 'none'
        });

        JogosPS5.addEventListener("click", () => {
            Container_JogosPs5.scrollIntoView({ behavior: "smooth" });
            JogosPS5.style.borderBottom = '4px solid yellow'
            Container_JogosPs4.style.display = 'none'
            Container_JogosPs3.style.display = 'none'
            Container_JogosPs5.style.display = 'flex'
            Inicio.style.borderBottom = 'none'
            JogosPS4.style.borderBottom = 'none'
            JogosPS3.style.borderBottom = 'none'
            PC.style.borderBottom = 'none'
            Consoles.style.borderBottom = 'none'
        });

        Consoles.addEventListener("click", () => {
            Container_Console.scrollIntoView({ behavior: "smooth" });
            Consoles.style.borderBottom = '4px solid yellow'
            Container_Console.style.display = 'flex'
            Container_PC.style.display = 'none'
            Inicio.style.borderBottom = 'none'
            JogosPS4.style.borderBottom = 'none'
            JogosPS3.style.borderBottom = 'none'
            JogosPS5.style.borderBottom = 'none'
            PC.style.borderBottom = 'none'
        });

        PC.addEventListener("click", () => {
            Container_PC.scrollIntoView({ behavior: "smooth" });
            PC.style.borderBottom = '4px solid yellow'
            Container_PC.style.display = 'flex'
            Container_Console.style.display = 'none'
            Inicio.style.borderBottom = 'none'
            JogosPS3.style.borderBottom = 'none'
            JogosPS4.style.borderBottom = 'none'
            JogosPS5.style.borderBottom = 'none'
            Consoles.style.borderBottom = 'none'
        });

    }
    exibir_Ocultar_Container()
})
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

const carrinhoButton = document.querySelector('.Carrinho');
carrinhoButton.addEventListener('click', () => {
    if (quantidadePedido > 0) {
        document.querySelector('.Container-Pedido').style.display = 'block';
    } else {
        document.querySelector('.Container-Pedido').style.display = 'none';
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
    `;
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


document.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.getElementById('slideshow');
    const images = [
        'img/joel_and_ellie_wallpaper_by_mrjuniorer_d8aa27v-fullview-removebg-preview.png',
        'img/far-cry-viloes-removebg-preview.png',
        'img/gta5.wallpaper-removebg-preview.png'
    ];
    let currentImageIndex = 0;

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        slideshow.src = images[currentImageIndex];
    }

    setInterval(changeImage, 3000); // Muda a imagem a cada 3 segundos
});
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
        event.preventDefault(); // Evita o envio do formulário antes da validação
        if (validacao()) {
            // Se o formulário for válido, pode prosseguir com o envio
            alert('Dados enviados com sucesso!');
            this.submit();
        }
    });
});
