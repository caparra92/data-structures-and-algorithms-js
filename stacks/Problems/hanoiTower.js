const { Stack } = require('../../classes/Stack')

function hanoiTower(elements, origin, destiny, aux) {
    origin = new Stack()
    aux = new Stack()
    destiny = new Stack()
    for (let i = elements; i > 0; i--) {
        origin.push(i)
    }
    if (elements < 1) return false
        if (elements === 1) {
            destiny.push(origin.pop())
            return destiny.toString()
        } else {
            hanoiTower(elements-1, origin, aux, destiny)
            destiny.push(origin.pop())
            hanoiTower(elements-1, aux, destiny, origin)
            return {
                origin: origin.toString(),
                aux: aux.toString(),
                destiny: destiny.toString()
            }
        }
}

console.log(hanoiTower(2,[2,1],[],[]))