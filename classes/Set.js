export class Set {
    constructor() {
        this.items = {};
    }

    has(element) {
        // return element in items; -- Primera forma de implementación
        return Object.prototype.hasOwnProperty.call(this.items, element);
    };

    add(element) {
        if(!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element) {
        if(this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    clear() {
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }

    sizeLegacy() {
        let count = 0;
        for(let key in this.items) {
            if(this.items.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    }

    values() {
        return Object.values(this.items);
    }

    valuesLegacy() {
        let values = [];
        for(let key in this.items) {
            if(this.items.hasOwnProperty(key)) {
                values.push(key);
            }
        }
        return values;
    }

    union(set) {
        const unionSet = new Set();
        this.values().forEach(value => {
            unionSet.add(value);
        });
        set.values().forEach(value => {
            unionSet.add(value);
        });
        return unionSet;
    }

    /* intersection(set) { -- First method but it needs to iterate for all the elements in (this) so it is not efficient
        const intersectionSet = new Set();
        const values = this.values();
        for(let i = 0; i < values.length; i++) {
            if(set.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    } */

    intersection(set) {
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = set.values();
        let biggerSet = values;
        let smallerSet = otherValues;
        if(biggerSet.length - smallerSet.length > 0) {
            biggerSet = otherValues;
            smallerSet = values;
        }
        smallerSet.forEach(value => {
            if(biggerSet.includes(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }

    difference(set) {
        const differenceSet = new Set();
        this.values().forEach(value => {
            if(!set.has(value)) {
                differenceSet.add(value);
            }
        });
        return differenceSet;
    }

    isSubsetOf(set) {
        if (this.size() > set.size()) {
            return false;
        }
        let isSubset = true;
        this.values().every(value => {
            if (!set.has(value)) {
                isSubset = false;
                return false;
            }
            return true;
        });
        return isSubset;
    }
}

const set = new Set();
set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());
set.add(2);
console.log(set.values());
console.log(set.has(2));
console.log(set.size());
set.delete(1);
console.log(set.values());
set.delete(2);
console.log(set.values());

//Union operation
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);
const unionAB = setA.union(setB);
console.log("==== Union Set ====");
console.log(unionAB.values());

//Intersection operation
const setC = new Set();
setC.add(1);
setC.add(2);
setC.add(3);
const setD = new Set();
setD.add(2);
setD.add(3);
setD.add(4);
const intersectionAB = setC.intersection(setD);
console.log("==== Intersection operation ====");
console.log(intersectionAB.values());

//Difference operation
const differenceAB = setA.difference(setB);
const differenceBA = setB.difference(setA);
console.log("==== Difference operation ====");
console.log(differenceAB.values());
console.log(differenceBA.values());

//Subset operation
const setE = new Set();
setE.add(1);
setE.add(2);
const setF = new Set();
setF.add(1);
setF.add(2);
setF.add(3);
const setG = new Set();
setG.add(2);
setG.add(3);
setG.add(4);
console.log("==== Subset operation ====");
console.log(setE.isSubsetOf(setF));
console.log(setE.isSubsetOf(setG));
