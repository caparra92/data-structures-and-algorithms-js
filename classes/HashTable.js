//HashTable implementation with colission

import { defaultToString } from "../util/defaultToString.js";
import { ValuePair } from "./ValuePair.js";

export class HashTable {
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn;
        this.table = {};
    }

    isEmpty() {
        return this.size() === 0;
    }

    loseloseHashCode(key) {
        if (typeof key === 'number') {
            return key;
        }

        const tableKey = this.toStrFn(key);
        let hash = 0;

        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    }

    //More efficient than loseLose
    djb2HashCode(key) {
        const tableKey = this.toStrFn(key);
        let hash = 5381;
        for(let i = 0; i < tableKey.length; i++){
            hash = (hash * 33) + tableKey.charCodeAt(i);
        }
        return hash % 1013;
    }

    hashCode(key) {
        return this.djb2HashCode(key);
    }

    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    get(key) {
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    remove(key) {
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];
        if (valuePair != null) {
            delete this.table[hash];
            return true;
        }
        return false;
    }

    toString() {
        if ( this.isEmpty() ) {
            return '';
        }
        const keys = Object.keys(this.table);
        let objString = `${keys[0]} => ${this.table[keys[0]].toString()}`;
        for (let i = 1; i < keys.length; i++) {
            objString = `${objString}, {${keys[i]}} => ${this.table[keys[i]].toString()}`;
        }
        return objString;
    }

    size() {
        return Object.keys(this.table).length;
    }
}

const hashTable = new HashTable();
hashTable.put('Gandalf', 'gandalf@email.com');
hashTable.put('Jhon', 'jhonsnow@email.com');
hashTable.put('Tyrion', 'tyrion@email.com');

// console.log(hashTable.hashCode('Gandalf') + ' - Gandalf');
// console.log(hashTable.hashCode('Jhon') + ' - Jhon');
// console.log(hashTable.hashCode('Tyrion') + ' - Tyrion');

// console.log(hashTable.get('Gandalf'));
// console.log(hashTable.get('Loiane'));

hashTable.remove('Gandalf');
// console.log(hashTable.get('Gandalf'));

//Collision test
const hash = new HashTable();
hash.put('Jonathan','jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');

console.log(hash.hashCode('Jonathan'));
console.log(hash.hashCode('Jamie'));
console.log(hash.hashCode('Sue'));
console.log(hash.toString());
console.log(hash.size());