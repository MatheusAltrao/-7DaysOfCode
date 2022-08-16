let choseOption = prompt(
  'Qual área voce desaja  seguir\n1- Front-End\n2- Back-End'
)

function frontend() {
  let frontEnd = prompt('Qual área voce desaja seguir\n1- React \n2- Vue')

  let stop = prompt(
    'Qual área voce desaja  seguir\n1- Parar \n2- Se tornar Full stack'
  )
  switch (frontEnd) {
    case '1':
      switch (stop) {
        case '1':
          alert('Terminou a sua carreira')
          break
        case '2':
          alert('Parabens voce se tornou full stack')
          break
      }
      break
    case '2':
      switch (stop) {
        case '1':
          alert('Terminou a sua carreira')
          break
        case '2':
          alert('Parabens voce se tornou full stack')
          break
      }
      break
  }
}

function backend() {
  let backEnd = prompt('Qual área voce desaja  seguir\n1- c# \n2- Java')

  let stop2 = prompt(
    'Qual área voce desaja  seguir\n1- Parar \n2- Se tornar Full stack'
  )
  switch (backEnd) {
    case '1':
      switch (stop2) {
        case '1':
          alert('Terminou a sua carreira')
          break
        case '2':
          alert('Parabens voce se tornou full stack')
          break
      }
      break
    case '2':
      switch (stop) {
        case '1':
          alert('Terminou a sua carreira')
          break
        case '2':
          alert('Parabens voce se tornou full stack')
          break
      }
      break
  }
}

function option() {
  if (choseOption == '1') {
    frontend()
  } else if (choseOption == '2') {
    backend()
  }
}

function learn() {
  do {
    prompt('Qual tecnologia na qual voce gostaria de se especializar')
    alert('Boa me fale mais')
  } while (true)
}

option()
learn()
