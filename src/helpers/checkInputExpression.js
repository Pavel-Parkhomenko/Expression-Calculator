import { OPERATIONS } from "@/constants"

export const checkInputExpression = (prevKey, key) => {
  if(OPERATIONS.includes(key) && (OPERATIONS.includes(prevKey) || prevKey.current === '=')) return false
  if(prevKey === '' && OPERATIONS.includes(key)) return false
  return !(prevKey === '.' && key === '.') // !!!
}
