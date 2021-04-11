
function calculateNumberandString(){}
function calculateNullAsZero(){}
function calculateIgnoreUndefine(){}
function calculateIgnoreEmptyString(){}
function calculateNonNumericIgnore(){}















function calculate(calculationSteps) {
  switch (calculationSteps) {
    case 'numbers':
      // multiplies two numbers when one is stringified
      break
    case 'nullAsZero':
      // treats null values as zeroes and includes them in the calculation
      break
    case 'undefinedIngore':
      // ignores undefined and empty string values and continues operation
      break
    case 'emptyStringIngore':
      // ignores non-numeric values  and continues operation
      break
    case 'nonNumericIgnore':
      // returns NaN if the array does not represent a proper operation
      break
    default:
      return NaN
  }
}

module.exports = calculate
