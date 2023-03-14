import { SortedLinkedList } from "../../classes/SortedLinkedList.js";


const terms = [

    {
        coeficient: 3,
        exponent: 2
    },

    {
        coeficient: 5,
        exponent: 1
    },

    {
        coeficient: 1,
        exponent: 0
    },

    {
        coeficient: 2,
        exponent: 3
    },
]

//console.log(Object.keys(terms[0])[0]);

let polinomial = new SortedLinkedList();

polinomial.insertObj(terms[0], "exponent");
polinomial.insertObj(terms[1], "exponent");
polinomial.insertObj(terms[2], "exponent");
polinomial.insertObj(terms[3], "exponent");
/* const sortByExponent = (linkedList) => {
    let sorter = 0;
    let current = null;
    for (let i = 0; i < terms.length; i++) {
        if (terms[i + 1] != undefined) {
            current = terms[0];
            sorter = linkedList.compareFn(terms[i].exponent, current.exponent);
            if (sorter = 1) {
                linkedList.insert(terms[i]);
            }
        }
    }
}; */



for (let i = 0; i < polinomial.size(); i++) {
    console.log(polinomial.getElementAt(i));
}

console.log(polinomial.size());

