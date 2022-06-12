export const checkAddToDisplay = ({ expression, display, answer }, payload) => {
  if (answer === display) display = ''
  if(/^.\d+$|^\d+\.\d+$/.test(display) && payload === '.') return { expression, display }
  if (display === 'Ошибка') display = payload
  else if (/[+/%*]/.test(expression.slice(-1)))
    display = payload
  else if (/^\d+-|^\(-\d+\)|^.\d+-/.test(display))
    display = payload
  else display = display + payload

  expression = expression + payload

  return { expression, display }
}
