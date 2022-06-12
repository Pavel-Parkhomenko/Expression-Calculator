import calc, {
  AddCommand,
  DivideCommand,
  MultiplyCommand,
  RemainderDivideCommand,
  SubtractCommand,
} from './Command/command'

const numbers = []
const operations = []

export function calculator(func) {
  let fs = func
    .split(/\s+/g)
    .filter(symbol => symbol !== '')
    .map(symbol => /^\.\d+$/.test(symbol) ? '0' + symbol : symbol)

  const expressionArray = []

  for(let i = 0; i < fs.length; i++){
    if(fs[i] === '(' && fs[i + 1] === "-" && (/\d+/.test(fs[i + 2]) ||
      /^\.\d+$/.test(fs[i + 2])) && fs[i + 3] === ')'){
      expressionArray.push('-' + fs[i + 2])
      i += 3
    }
    else expressionArray.push(fs[i])
  }

  fs = expressionArray

  let i = -1
  for (let k = 0; k < fs.length; k++) {
    i++
    const num = fs[i]
    if (!isNaN(parseFloat(fs[i], 10))) {
      numbers.push(num)
    }
    else if(fs[i] === '('){
      operations.push(fs[i])
    }
    else if(fs[i] === ')'){
      while(operations.peek() !== '(')
        calculate()
    }
    else {
      checkPriority(fs[i])
    }

    if (k === fs.length - 1) {
      while (operations.length !== 0) {
        calculate()
      }
    }
  }

  return numbers.pop()
}

function checkPriority(operation) {
  if (operations.length === 0) {
    operations.push(operation)
  }
  else if(operations.peek() === ')')
    operations.push(operation)
  else {
    while (true) {
      if (operations.length === 0) {
        operations.push(operation)
        break
      }
      else if (operations.peek() === '('){
        operations.push(operation)
        break
      }
      else if (getPriority(operation) > getPriority(operations.peek())) {
        operations.push(operation)
        break
      }
      else if (getPriority(operation) < getPriority(operations.peek())) {
        calculate()
      }
      else if (getPriority(operation) === getPriority(operations.peek())) {
        calculate()
      }
      else {
        break
      }
    }
  }
}

function calculate() {
  const operation = operations.pop()
  if(operation === '(') return
  const n1 = parseFloat(numbers.pop())
  calc.value = parseFloat(numbers.pop())

  switch (operation) {
    case '-':
      calc.execute(new SubtractCommand(n1))
      numbers.push(calc.value)
      break
    case '+':
      calc.execute(new AddCommand(n1))
      numbers.push(calc.value)
      break
    case '/':
      calc.execute(new DivideCommand(n1))
      numbers.push(calc.value)
      break
    case '*':
      calc.execute(new MultiplyCommand(n1))
      numbers.push(calc.value)
      break
    case '%':
      calc.execute(new RemainderDivideCommand(n1))
      numbers.push(calc.value)
      break
  }
}

function getPriority(str) {
  switch (str) {
    case '+': return 1
    case '-': return 1
    case '/': return 2
    case '*': return 2
    case '%': return 2
  }
}

// eslint-disable-next-line no-extend-native
Array.prototype.peek = function () {
  if (this.length === 0) {
    return undefined
  }
  return this[this.length - 1]
}
