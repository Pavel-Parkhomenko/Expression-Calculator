export const checkAddToDisplay = ({expression, display, answer}, payload) => {
  if(answer === display) display = ''
  if(display === 'Ошибка') display = payload
  else if(/[+/%*]/.test(expression[expression.length - 1]))
    display = payload
  else if(expression[expression.length - 2] === ')' && expression[expression.length - 1] === '-')
    display = payload
  else display = display + payload

  expression = expression + payload

  return {expression, display}
}
