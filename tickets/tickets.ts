function sortTickets(tickets: string[], criteria: string) {

    let result: Ticket[] = [];

    class Ticket {
        destination: string;
        price: number;
        status: string;

        constructor(destination: string, price: string, status: string) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for (let entry of tickets) {
        const [destination, price, status]: string[] = entry.split('|');
        const ticket = new Ticket(destination, price, status);
        result.push(ticket);
    }

    if (criteria == 'destination') {
        result = result.sort((a: Ticket, b: Ticket) => (a.destination).localeCompare(b.destination));
    } else if (criteria == 'price') {
        result = result.sort((a: Ticket, b: Ticket) => a[1] - b[1]);
    } else if (criteria == 'status') {
        result = result.sort((a: Ticket, b: Ticket) => (a.status).localeCompare(b.status));
    }

    console.log(result);

}
sortTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'destination');

sortTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'status');