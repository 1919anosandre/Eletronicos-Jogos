
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
        this.navList.classList.toggle(this.activeClass); // Corrigido de NavBar para navList
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        if (this.mobileMenu) {
            this.mobileMenu.addEventListener("click", this.handleClick);
        }
    }

    init() {
        // Verifica se a página foi completamente carregada antes de adicionar o evento de clique
        document.addEventListener("DOMContentLoaded", () => {
            this.addClickEvent();
        });
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
            PC.style.borderBottom = 'none'
            Consoles.style.borderBottom = 'none'



        });

        JogosPS4.addEventListener("click", () => {
            Container_JogosPs4.scrollIntoView({ behavior: "smooth" });
            JogosPS4.style.borderBottom = '4px solid yellow'
            Container_JogosPs4.style.display = 'flex'
            Container_JogosPs3.style.display = 'none'
            Inicio.style.borderBottom = 'none'
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
            PC.style.borderBottom = 'none'
        });

        PC.addEventListener("click", () => {
            Container_PC.scrollIntoView({ behavior: "smooth" });
            PC.style.borderBottom = '4px solid yellow'
            Container_PC.style.display = 'flex'
            Container_Console.style.display = 'none'
            Inicio.style.borderBottom = 'none'
            JogosPS4.style.borderBottom = 'none'
            Consoles.style.borderBottom = 'none'
        });

    }
    exibir_Ocultar_Container()
})

const quantidade_carrinho = document.querySelector('.Quantidade-Pedido-Carrinho')
const the_last_of_us = document.querySelector('.pedir-the-last-of-us')
const Container_Pedido = document.querySelector('.Container-Pedido')
const Carrinho = document.querySelector('#Carrinho')
const Quantidade_Input = document.querySelector('.Quantidade')
const Preco = document.querySelector('.Preco')
const Finalizar_Pedido = document.querySelector('#Finalizar-Pedido')

let quantidadeCarrinho = 0;

the_last_of_us.addEventListener('click', () => {
    quantidadeCarrinho++;

    quantidade_carrinho.textContent = quantidadeCarrinho

})

Carrinho.addEventListener('click', () => {

    if (quantidadeCarrinho > 0) {
        Container_Pedido.style.display = 'flex'
    } else {
        Container_Pedido.style.display = 'none'
    }
})

let precoTotalCarrinho = 0;
let precoBase = 50;


const quantidade = parseInt(Quantidade_Input.value, 10) || 0;
const verificar_preco = parseFloat(Preco) || 0;

const precoTotal = precoBase * quantidade;
precoTotalCarrinho += precoTotal;
Preco.textContent = `R$ ${precoTotal.toFixed(2)}`;


Finalizar_Pedido.textContent = `Finalizar Pedido R$ ${precoTotalCarrinho.toFixed(2)}`



document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Função para alternar o tema
    function toggleTheme() {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
        const isDarkTheme = body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    }

    // Carregar o tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.add('light-theme');
    }

    // Adicionar o evento de clique ao botão
    toggleButton.addEventListener('click', toggleTheme);
});


// script.js

document.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.getElementById('slideshow');
    const images = [
        'img/ellie-removebg-preview.png',
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
