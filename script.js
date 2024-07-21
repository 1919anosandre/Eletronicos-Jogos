
document.addEventListener('DOMContentLoaded', () => {

    function exibir_Ocultar_Container() {

        const Container_JogosPs3 = document.querySelector('.Container-Jogos-PS3')
        const Container_JogosPs4 = document.querySelector('.Container-Jogos-PS4')
        const Container_JogosPs5 = document.querySelector('.Container-Jogos-PS5')

        const JogosPS3 = document.querySelector('.Jogos-PS3')
        const JogosPS4 = document.querySelector('.Jogos-PS4')
        const JogosPS5 = document.querySelector('.Jogos-PS5')

        Container_JogosPs4.style.display = 'none'
        Container_JogosPs3.style.display = 'flex'

        JogosPS4.addEventListener('click', () => {
            Container_JogosPs4.style.display = 'flex'
            Container_JogosPs3.style.display = 'none'
        })



    }
    exibir_Ocultar_Container()
})
