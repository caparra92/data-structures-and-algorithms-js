import { Compare, defaultCompare } from "../util/defaultCompare.js";
import { defaultEquals } from "../util/defaultEquals.js";
import { LinkedList } from "./LinkedList.js";

export class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn;
    }

    insert(element, index = 0)  {
        if (this.isEmpty()) {
            return super.insert(element, 0);
        }

        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element, pos);
    }

    insertObj(element, selectedKey = null) {
        if (this.isEmpty()) {
            return super.insert(element, 0);
        }
        if(this.isObject(element)) {
            if(element.hasOwnProperty(selectedKey)) {
                //let key = selectedKey.replace(/['"]+/g, '');
                const pos = this.getIndexNextSortedElementByKey(element, selectedKey);
                return super.insert(element, pos);
            } 
        }
        return undefined;
    }

    getIndexNextSortedElement(element) {
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++) {
            const comp = this.compareFn(element, current.element);
            if (comp === Compare.LESS_THAN) {
                return i;
            }
            current = current.next;
        }
        return i;
    }

    getIndexNextSortedElementByKey(element, key) {
        
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++) {
            const comp = this.compareFn(element[key], current.element[key]);
            if (comp === Compare.BIGGER_THAN) {
                return i;
            }
            current = current.next;
        }
        return i;
    }

    isObject(value) {
        return (
          typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value)
        );
      }
}