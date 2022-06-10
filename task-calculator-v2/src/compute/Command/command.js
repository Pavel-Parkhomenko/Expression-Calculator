class Calculator{
  constructor() {
    this.value = 0
    this.history = []
  }

  execute(command) {
    this.value = command.execute(this.value)
    this.history.push(command)
  }

  undo() {
    const command = this.history.pop()
    this.value = command.undo(this.value)
  }
}

export class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd
  }

  execute(currentValue) {
    return this.valueToAdd + currentValue
  }

  undo(currentValue) {
    return currentValue - this.valueToAdd
  }
}

export class SubtractCommand {
  constructor(valueToSubtract){
    this.value = valueToSubtract
  }

  execute(currentValue) {
    return currentValue - this.value
  }

  undo(currentValue) {
    return currentValue + this.value
  }
}

export class MultiplyCommand {
  constructor(valueToMultiply) {
    this.value = valueToMultiply
  }

  execute(currentValue) {
    return this.value * currentValue
  }

  undo(currentValue) {
    return currentValue/ this.value
  }
}

export class DivideCommand {

  constructor(valueToDivide) {
    this.value = valueToDivide
  }

  execute(currentValue) {
    return currentValue/this.value
  }

  undo(currentValue) {
    return currentValue * this.value
  }
}

export class RemainderDivideCommand {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide
  }

  execute(currentValue) {
    return currentValue % this.valueToDivide
  }

  undo(currentValue) {
    return 0
  }
}

const calculator = new Calculator()
export default calculator
