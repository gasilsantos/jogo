let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')

function pular() {
    if (personagem.classic != 'animar') {
        personagem.classic.add('animar')
    }

    setTimeout(function () {
        personagem.classList.remove('animar')
    }, 500)
}

var testarColisao = setInterval(function () {

    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var EsquerdaQuadradado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('let')
      )

     if (EsquadaQuadrado < 20 && EsquerdaQuadradado > 0 && topoPersonagem >= 130) {
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert('voce perdeu!')
    }

}, 10)