import { OPERATIONS } from "@/constants"

export function checkExpression(expression) {
  console.log(expression.slice(-1))
  if(OPERATIONS.includes(expression.slice(-1))) return false

  const chars = expression.split('')
  const stack = []
  const open = ['(']
  const close = [')']
  let closeIndex
  let openIndex

  for (let i = 0, len = chars.length; i < len; i++) {
    openIndex = open.indexOf(chars[i])
    if (openIndex !== -1) {
      stack.push(openIndex)
      continue
    }

    closeIndex = close.indexOf(chars[i])
    if (closeIndex !== -1) {
      openIndex = stack.pop()
      if (closeIndex !== openIndex) {
        return false
      }
    }
  }

  return stack.length === 0
}
