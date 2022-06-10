export function checkExpression(expression) {
  let openBracket = 0
  let closeBracket = 0

  expression.split('').map(x => {
    if(x === '(') openBracket++
    if(x === ')') closeBracket++
  })

  return openBracket === closeBracket
}
