

function calculate(calculationSteps) {
  function getOperator(value) {
    return value === '+' || value === '-' || value === '*' || value === '/'
  }

  // get operator
  const operator = calculationSteps.filter((val) => getOperator(val))

  // return NaN if the array does not represent a proper operation
  if (operator.length === 0) return NaN

  // convert null value to zero
  var newArray = Array.from(calculationSteps, (item) => item === null ? 0 : item)

  // ignore undefined and empty string values
  newArray = newArray.filter(val => val || val === 0)

  // ignore non-numeric values
  newArray = newArray.filter(val => !isNaN(val))

  // convert string values to number
  newArray = newArray.map(Number)

  if (newArray.length >= 2) {
    let number1 = newArray[0]
    let number2 = newArray[1]
    let result

    if (operator == '+') {
      result = number1 + number2
    } else if (operator == '-') {
      result = number1 - number2
    } else if (operator == '*') {
      result = number1 * number2
    } else if (operator == '/') {
      result = number1 / number2
    } else {
      return NaN
    }
    return result
  }
}

module.exports = calculate


