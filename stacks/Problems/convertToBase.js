const {Stack} = require('../../classes/Stack')
let converted = new Stack()

function convertToBase(num, base) {
  let rem
  let referenceDigits = '0123456789ABCDEF'
  if(num < base) {
    converted.push(referenceDigits[num])
    return converted.toString()
  } else {
    rem = Math.floor(num % base)
    converted.push(referenceDigits[rem])
    return convertToBase(Math.floor(num/base),base)
  }
}

console.log(convertToBase(16,16))