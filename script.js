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
        // Containers
        const Container_Principal = document.querySelector('.Container-Principal');
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

        // Inicializar
        Container_Principal.style.opacity = '0';
        Container_JogosPs4.style.display = 'none';
        Container_JogosPs3.style.display = 'flex';
        Container_JogosPs5.style.display = 'none';
        Container_PC.style.display = 'flex';



        // Fade in para Container_Principal
        setTimeout(() => {
            let opacity = 0;
            const interval = setInterval(() => {
                opacity += 0.05;
                Container_Principal.style.opacity = opacity.toString();

                if (opacity >= 1) {
                    clearInterval(interval);
                }
            }, 100); // Ajuste o tempo para suavidade desejada
        }, 1000); // Tempo de espera inicial de 1 segundo

        // Função para atualizar o estilo dos botões e containers
        function atualizarEstilos(seletoresAtivos) {
            const { ativo, visiveis, ocultos } = seletoresAtivos;

            // Atualiza o borderBottom
            [Inicio, JogosPS3, JogosPS4, JogosPS5, Consoles, PC].forEach(item => {
                item.style.borderBottom = item === ativo ? '4px solid yellow' : 'none';
            });

            // Atualiza a exibição dos containers
            [Container_Principal, Container_JogosPs3, Container_JogosPs4, Container_JogosPs5, Container_Console, Container_PC].forEach(container => {
                container.style.display = visiveis.includes(container) ? 'flex' : 'none';
            });


        }

        // Adiciona os listeners de evento
        Inicio.addEventListener("click", () => {
            Container_Principal.scrollIntoView({ behavior: "smooth" });
            atualizarEstilos({ ativo: Inicio, visiveis: [Container_Principal], ocultos: [] });
        });

        JogosPS3.addEventListener("click", () => {
            Container_JogosPs3.scrollIntoView({ behavior: "smooth" });
            atualizarEstilos({ ativo: JogosPS3, visiveis: [Container_JogosPs3], ocultos: [Container_JogosPs4, Container_JogosPs5, Container_PC, Container_Console] });
        });

        JogosPS4.addEventListener("click", () => {
            Container_JogosPs4.scrollIntoView({ behavior: "smooth" });
            atualizarEstilos({ ativo: JogosPS4, visiveis: [Container_JogosPs4], ocultos: [Container_JogosPs3, Container_JogosPs5, Container_PC, Container_Console] });
        });

        JogosPS5.addEventListener("click", () => {
            Container_JogosPs5.scrollIntoView({ behavior: "smooth" });
            atualizarEstilos({ ativo: JogosPS5, visiveis: [Container_JogosPs5], ocultos: [Container_JogosPs3, Container_JogosPs4, Container_PC, Container_Console] });
        });

        Consoles.addEventListener("click", () => {
            Container_Console.scrollIntoView({ behavior: "smooth" });
            atualizarEstilos({ ativo: Consoles, visiveis: [Container_Console], ocultos: [Container_JogosPs3, Container_JogosPs4, Container_JogosPs5, Container_PC] });
        });

        PC.addEventListener("click", () => {
            Container_PC.scrollIntoView({ behavior: "smooth" });
            atualizarEstilos({ ativo: PC, visiveis: [Container_PC], ocultos: [Container_JogosPs3, Container_JogosPs4, Container_JogosPs5, Container_Console] });
        });
    }

    exibir_Ocultar_Container();
});

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
const fechar = document.querySelector('.fechar-carrinho')

function fechar_carrinho() {
    carrinhoButton.style.display = 'none'
}

fechar.addEventListener('click', fechar_carrinho)

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

function horarios_funcionamento() {
    const funcionamento = document.querySelector('.Funcionamento')
    const horario = new Date()
    const hora_funcionamento = horario.getHours()
    const dia = new Date()
    const dia_funcionamento = dia.getDay()

    if (dia_funcionamento == 0 && dia_funcionamento == 6) {
        alert('o estabelecimento está fechado. abre de seg á sex 08:00 ás 18:00!')
    }

    if (hora_funcionamento >= 8 && hora_funcionamento <= 18) {
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

// oque mais fazer   achar um dia no mes especifico para promoçoes e exibir um alert no dia da promoçao   e qnd chegar a promocao dar um desconto para o preco de todos os produtos igualmente

// galeria img acessorios
let images = [
    'img-eletronicos/controle-black-ps3.png',
    'img-eletronicos/controle-prata-ps3.webp',
];

let currentIndex = 0;

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    if (images == [1]) {
        preco.textContent = 'R$ 40,00'
    }

    document.getElementById('mainImage').src = images[currentIndex];
}

let images2 = [
    'img-eletronicos/controle-black-ps4.webp',
    'img-eletronicos/controle-white-ps4.webp',
    'img-eletronicos/controle-ps4-azul.webp'
]

let currentIndex2 = 0

function changeImage2(direction) {
    currentIndex2 += direction;

    if (currentIndex2 < 0) {
        currentIndex2 = images2.length - 1;
    } else if (currentIndex2 >= images2.length) {
        currentIndex2 = 0;
    }

    if (images == [1]) {
        preco.textContent = 'R$ 40,00'
    }

    document.getElementById('mainImage2').src = images2[currentIndex2];
}


let images3 = [
    'img-eletronicos/controle-ps5-white.jpg',
    'img-eletronicos/controle-ps5-black.png',
    'img-eletronicos/controle-ps5-rosa.png'
]

let currentIndex3 = 0

function changeImage3(direction) {
    currentIndex3 += direction;

    if (currentIndex3 < 0) {
        currentIndex3 = images3.length - 1;
    } else if (currentIndex3 >= images3.length) {
        currentIndex3 = 0;
    }



    document.getElementById('mainImage3').src = images3[currentIndex3];
}
