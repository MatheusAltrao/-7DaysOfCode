function soma(num1, num2) {
  return Number(num1) + Number(num2)
}
function subtracao(num1, num2) {
  return Number(num1) - Number(num2)
}
function multiplicacao(num1, num2) {
  return Number(num1) * Number(num2)
}
function divisao(num1, num2) {
  return Number(num1) / Number(num2)
}

let op = ''
let num1 = ''
let num2 = ''

while (op != '5') {
  op = prompt(
    'qual operação você deseja realizar? digite um numero\n1-soma\n2-subtracao\n3-multiplicacao\n4-divisao\n5-sair'
  )

  switch (op) {
    case '1':
      num1 = prompt('Digitie o primeiro numero')
      num2 = prompt('Digitie o segundo numero')
      alert(`O resultado  é: ${soma(num1, num2)}`)
      break
    case '2':
      num1 = prompt('Digitie o primeiro numero')
      num2 = prompt('Digitie o segundo numero')
      alert(`O resultado  é: ${subtracao(num1, num2)}`)
      break
    case '3':
      num1 = prompt('Digitie o primeiro numero')
      num2 = prompt('Digitie o segundo numero')
      alert(`O resultado  é: ${multiplicacao(num1, num2)}`)
      break
    case '4':
      num1 = prompt('Digitie o primeiro numero')
      num2 = prompt('Digitie o segundo numero')
      alert(`O resultado  é: ${divisao(num1, num2)}`)
      break
  }
}
