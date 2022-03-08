function sortTickets(tickets, criteria) {
    var result = [];
    var Ticket = /** @class */ (function () {
        function Ticket(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
        return Ticket;
    }());
    for (var _i = 0, tickets_1 = tickets; _i < tickets_1.length; _i++) {
        var entry = tickets_1[_i];
        var _a = entry.split('|'), destination = _a[0], price = _a[1], status_1 = _a[2];
        var ticket = new Ticket(destination, price, status_1);
        result.push(ticket);
    }
    if (criteria == 'destination') {
        result = result.sort(function (a, b) { return (a.destination).localeCompare(b.destination); });
    }
    else if (criteria == 'price') {
        result = result.sort(function (a, b) { return a[1] - b[1]; });
    }
    else if (criteria == 'status') {
        result = result.sort(function (a, b) { return (a.status).localeCompare(b.status); });
    }
    console.log(result);
}
sortTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
sortTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status');
//# sourceMappingURL=tickets.js.map