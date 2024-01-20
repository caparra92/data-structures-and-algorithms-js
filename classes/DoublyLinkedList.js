import { defaultEquals } from "../util/defaultEquals.js";
import { DoublyNode } from "../models/linked-list-models.js";
import { LinkedList } from "./LinkedList.js";

export class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }

    insert(element, index) {
      if(index >= 0 && index <= this.count) {
        const node = new DoublyNode(element);
        let current = this.head;
        console.log('Head is', this.head)
        if(index === 0) {
            if(this.head === undefined) {
                this.head = node;
                this.tail = node;
            } else {
                node.next = this.head;
                
                current.prev = node;
                this.head = node;
            } 
        } else if(index === this.count) {
           current = this.tail;
           this.tail = node;
           current.next = node;
           node.prev = current; 
        } else {
            const previous = this.getElementAt(index - 1);
            current = previous.next;
            previous.next = node;
            current.prev = node;
            node.next = current;
            node.prev = previous;
        }
        this.count++;
        return true;
      }
      return false;  
    }

    removeAt(index) {
        if(index >= 0 && index < this.count) {
            let current = this.head;
            if(index === 0) {
                this.head = current.next;
                if(this.count === 1) {
                    this.tail = undefined;
                } else {
                    this.head.prev = undefined;
                }
        } else if(index === this.count - 1) {
            current = this.tail;
            this.tail = current.prev;
            this.tail.next = undefined;
        } else {
            current = this.getElementAt(index);
            previous = current.prev;
            previous.next = current.next;
            current.next.prev = previous;
        }
        this.count--;
        return current.element;
    }
        return undefined;
    }
}

const dlkdlst = new DoublyLinkedList();
dlkdlst.insert(1,0);
dlkdlst.insert("Camilo",1);
dlkdlst.insert(5,2);
dlkdlst.insert("dsdsd",3);
dlkdlst.insert(45,4);

console.log(dlkdlst.toString());