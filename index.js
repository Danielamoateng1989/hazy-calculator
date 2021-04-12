

function calculate(calculationSteps) {
  function getOperator(value) {
    return value === '+' || value === '-' || value === '+'
  }

  const operator = calculationSteps.filter((val) => getOperator(val))


  // Let's return NaN if the array does not represent a proper function 
  if (operator.length === 0) return

  // Let's convert null value to zero
  let newArray = Array.from(calculationSteps, (item) => item === null ? 0: item)
}
