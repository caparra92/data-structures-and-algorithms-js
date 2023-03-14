import { LinkedList } from "../../classes/LinkedList.js";
import { Person } from "../../util/person.js";

class CinemaTicket {
    constructor(personLinkedList) {
        this.personLinkedList = personLinkedList
    }

    generateTicket() {
        //From 5 to 15 years $5 USD
        //From 16 to 25 years $5 USD
        //Up to 25 years $15 USD
        for(let i = 0; i < this.personLinkedList.size(); i++) {
            if(this.personLinkedList.getElementAt(i).element.age >= 5 && this.personLinkedList.getElementAt(i).element.age <= 15) {
                this.personLinkedList.getElementAt(i).element.setTicketValue("$5 USD");
            } else if(this.personLinkedList.getElementAt(i).element.age >= 16 && this.personLinkedList.getElementAt(i).element.age <= 25) {
                this.personLinkedList.getElementAt(i).element.setTicketValue("$10 USD");
            } else if(this.personLinkedList.getElementAt(i).element.age >= 26){
                this.personLinkedList.getElementAt(i).element.setTicketValue("$15 USD");
            }
        }
        return this.personLinkedList;
    }
}

const personList = new LinkedList();
const person1 = new Person("Natalia");
const person2 = new Person("David");
const person3 = new Person("Magalenha");
const person4 = new Person("Maria");

personList.push(person1);
personList.push(person2);
personList.push(person3);
personList.push(person4);

const cinemaTicket = new CinemaTicket(personList);

console.log(cinemaTicket.generateTicket());

