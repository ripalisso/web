document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll("button")
    const h1 = document.getElementsByTagName("h1")[0]

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {
            h1.innerHTML = botao.innerHTML
            h1.style.color = botao.dataset.cor
            botao.style.color = botao.dataset.cor
        })

    });
})

