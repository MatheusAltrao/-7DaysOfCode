function RandomNunber() {
  const numberSurprise = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11'
  ]
  const totalNumber = numberSurprise.length
  const numberRandom = Math.floor(Math.random() * totalNumber)

  for (let i = 0; i < 3; i++) {
    let question = prompt('Escolha um numero de 0 a 10 vc tem 3 tentativas')
    if (question == numberRandom) {
      alert('Parabens vc acertou o numero, ta com o extinto em dia')
      break
    }
    alert('errado')
  }

  alert(numberRandom)
}

RandomNunber()
