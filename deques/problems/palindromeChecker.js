const { Deque } = require('../../classes/Deque')

function palindromeChecker(string) {
    if(string === undefined || string === null || (string !== null && string.length === 0)) {
        return false
    }

    const deque = new Deque()

    const lowerString = string.toLocaleLowerCase().split('').join('')
    let isEqual = true
    let firstChar, lastChar

    for(let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i))
    }

    while(deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront()
        lastChar = deque.removeBack()
        if(firstChar !== lastChar) {
            isEqual = false
        }
    }
    return isEqual
}

console.log('a',palindromeChecker('a'))
console.log('aa',palindromeChecker('aa'))
console.log('kayak',palindromeChecker('kayak'))
console.log('level',palindromeChecker('level'))
console.log('adfgg',palindromeChecker('agrtthth'))
console.log('Was it a car or a cat I saw',palindromeChecker('Was it a car or a cat I saw'))
console.log('Step on no pets',palindromeChecker('Step on no pets'))