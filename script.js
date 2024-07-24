
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

