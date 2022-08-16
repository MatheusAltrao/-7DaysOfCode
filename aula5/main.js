let salgado = []
let doce = []
let frutas = []
let laticinio = []
let congelados = []

for (let i = 0; i < 100; i++) {
  let add = prompt(
    'você deseja adicionar uma comida na sua lista de compras\n1- sim\n2-nao'
  )
  if (add == '1') {
    let food = prompt('qual comida você deseja inserir?')
    let foodCategory = prompt(
      'qual categoria essa comida se encaixa\n1- Salgado\n2- Doce\n3- Frutas\n4- Laticínios\n5- Congelados'
    )

    switch (foodCategory) {
      case '1':
        salgado.push(food)
        break
      case '2':
        doce.push(food)
        break
      case '3':
        frutas.push(food)
        break
      case '4':
        laticinio.push(food)
        break
      case '5':
        congelados.push(food)
    }
  } else if ((add = '2')) {
    alert(
      'Todos os salgados: ' +
        salgado +
        '\ntodos os doces: ' +
        doce +
        '\n todas as frutas: ' +
        frutas +
        '\ntodos os laticínios: ' +
        laticinio +
        '\ntodo os congelados: ' +
        congelados
    )
    break
  }
}
