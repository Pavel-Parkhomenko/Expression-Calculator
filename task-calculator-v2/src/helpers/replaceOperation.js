export function replaceOperation(expression) {
  expression = expression.replaceAll('*', ' * ')
  expression = expression.replaceAll('+', ' + ')
  expression = expression.replaceAll('/', ' / ')
  expression = expression.replaceAll('-', ' - ')
  expression = expression.replaceAll('%', ' % ')
  expression = expression.replaceAll('(', ' ( ')
  expression = expression.replaceAll(')', ' ) ')

  return expression
}
