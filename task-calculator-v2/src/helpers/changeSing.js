export const changeSing = ({display, expression}) => {
  if(/^\d+$/.test(display)) {
    expression = expression.slice(0, expression.length - display.length)
    display = "(" + "-" + display + ")"
    expression += display
  }
  else if(/^\(-\d+/.test(display)) {
    console.log("source: ", expression)
    console.log('dl: ', display.length)
    expression = expression.slice(0, expression.length - display.length)
    console.log("before: ", expression)
    display = display
      .split('')
      .filter(item => parseFloat(item) ? item : '').join('')
    expression += display
    console.log("after: ", expression)
  }

  return {display, expression}
}
