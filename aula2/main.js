let nameUser = prompt('Qual o seu nome?')
let years = prompt('Qual a sua idade')
let lenguageProgram = prompt(
  'Qual linguagem de programação você está estudando?'
)

alert(
  'Olá ' +
    nameUser +
    ', você tem' +
    years +
    ' anos e já está aprendendo ' +
    lenguageProgram
)

function menu() {
  let choseOption
  do {
    choseOption = prompt(
      'Você gosta de estudar ' + lenguageProgram + ' ? \n 1- SIM \n 2- NÃO.'
    )

    switch (choseOption) {
      case '1':
        alert('Muito bom! Continue estudando e você terá muito sucesso.')
        break
      case '2':
        alert('Ahh que pena... Já tentou aprender outras linguagens?')
        break
      default:
        alert('Escolha entre o número 1 e 2')
    }
  } while (choseOption != '2')
}

menu()
