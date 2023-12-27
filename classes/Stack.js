class Stack {
    constructor() {
      this.items = {}
      this.count = 0
    }
    
    //Methods
    push(element) {
      this.items[this.count] = element
      this.count++
    }
    
    pop() {
      if(this.isEmpty()) {
        return undefined
      }
      this.count--
      const result = this.items[this.count]
      delete this.items[this.count]
      return result
    }
    
    peek() {
      return this.items[this.count-1]
    }
    
    size() {
      return this.count
    }
    
    isEmpty() {
      return this.count === 0
    }
    
    clear() {
      this.items = {}
      this.count = 0
    }
    
    toString() {
      if(this.isEmpty()) {
        return ''
      }
      let objString = `${this.items[0]}`
      for(let i = 1; i < this.count; i++){
        objString = `${objString},${this.items[i]}`
      }
      return objString
    }
  }

  module.exports = {
    Stack
  }
  
  //Class instance
  
  let stack = new Stack()
  stack.push(3)
//   stack.push(2)
//   stack.push(5)
  
  // stack.pop()
  // stack.pop()
  

  
  