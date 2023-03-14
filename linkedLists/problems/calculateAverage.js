import { LinkedList } from "../../classes/LinkedList.js";

const list = new LinkedList();
list.push(3);
list.push(5);
list.push(1);
list.push(98);
list.push(2);

//Calculate the largest value in the list
const getLargest = () => {
    let largest = 0;
    for(let i = 0; i < list.size(); i++) {
      if(largest < list.getElementAt(i).element){
        largest = list.getElementAt(i).element;
      }
    }
    return largest;
}

console.log(`Largest value in the list ==> ${getLargest()}`);

//Calculate the shortest value in the list
const getShortest = () => {
    let shortest = list.getElementAt(0).element;
    for(let i = 0; i < list.size(); i++) {
      if(shortest > list.getElementAt(i).element){
        shortest = list.getElementAt(i).element;
      } else {
        shortest;
      }
    }
    return shortest;
}

console.log(`Shortest value in the list ==> ${getShortest()}`);

//Calculate average
const getAverage = () => {
    let sum = 0;
    for(let i = 0; i < list.size(); i++){
        sum += list.getElementAt(i).element;
    }
    return sum / list.size();
}

console.log(`Average value in the list ==> ${getAverage()}`);