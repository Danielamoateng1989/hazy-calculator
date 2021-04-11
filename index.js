
function calculate(calculationSteps) {
  // multiplies two numbers when one is stringified



  // treats null values as zeroes and includes them in the calculation


  // ignores undefined and empty string values and continues operation


  // ignores non-numeric values  and continues operation


  // returns NaN if the array does not represent a proper operation

  switch (calculationSteps) {
    case 'numbers':
    case 'nullAsZero':
    case 'undefinedIngore':
    case 'emptyStringIngore':
    case 'nonNumericIgnore':
    default:
      return NaN
  }
}

module.exports = calculate
