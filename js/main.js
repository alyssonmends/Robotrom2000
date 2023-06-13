// const robotron = document.querySelector('.robo')

// robotron.addEventListener('click', () => {
//   console.log('oi')
// })

// function dizerOi(nome) {
//   console.log('Bem vindo ' + nome)
// }

// dizerOi('Alysson')

//////////////////////////////////////////

// const subtrair = document.querySelector('#subtrair')
// const somar = document.querySelector('#somar')

const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')
 console.log(controle)
 console.log(estatisticas)
const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5
  },
  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2
  }
}

controle.forEach(elemento => {
  elemento.addEventListener('click', evento => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode, evento.target.dataset.peca)
  })
})

// somar.addEventListener('click', () => {
//   manipulaDados('somar')
// })

// subtrair.addEventListener('click', () => {
//   manipulaDados('subtrair')
// })

function manipulaDados(operacao, controle, peca) {
  const contador = controle.querySelector('[data-contador]')

  estatisticas.forEach(elemento => {
    if (operacao === '-' && contador.value > 0) {
      elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
    } else if (operacao === '+') {
      elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    }
  })

  if (operacao === '-' && contador.value > 0) {
    contador.value = parseInt(contador.value) - 1
  } else if (operacao === '+') {
    contador.value = parseInt(contador.value) + 1
  }
}

function trocaImagem(cor) {
  document.querySelector('#robo').src = 'img/Robotron_2000-' + cor + '.png'
}
