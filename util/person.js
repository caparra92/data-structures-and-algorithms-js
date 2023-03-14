//Class used in the cinemaTicket problem using LinkedList data structure

export class Person {
    constructor(name) {
        this.name = name;
        this.age = this.generateRandomAge();
        this.ticketValue = null;
    }
    
    generateRandomAge() {
        let random = Math.floor(Math.random() * 50);
        return random > 0 ? random : random + 5;
    }

    setTicketValue(ticketValue) {
        this.ticketValue = ticketValue;
    }

    getTicketValue() {
        return this.ticketValue;
    }
}