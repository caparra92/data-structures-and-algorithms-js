import { defaultCompare, reverseCompare } from "../util/defaultCompare.js";
import { MinHeap } from "./MinHeap.js";

export class MaxHeap extends MinHeap {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = reverseCompare(compareFn);
    }

}

const heap = new MaxHeap();

for(let i = 0; i < 10; i++) {
    heap.insert(i);
}

console.log('Heap max value before extracting: ',heap.findMinimum());
console.log('Extract maximum: ', heap.extract());


console.log('Heap size: ',heap.size());
console.log('Heap is empty: ',heap.isEmpty());
console.log('Heap max value after extracting: ',heap.findMinimum());


console.log(heap.heap);



