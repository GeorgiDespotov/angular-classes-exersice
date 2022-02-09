var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.sayHello = function () {
        return "".concat(this.name, " says hello!");
    };
    return User;
}());
var user = new User('Pesho');
console.log(user.sayHello());
var Data = /** @class */ (function () {
    function Data(method, url, version, message) {
        this.method = method;
        this.url = url;
        this.version = version;
        this.message = message;
        this.response = '';
        this.fulfilled = false;
    }
    return Data;
}());
var myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
// console.log(myData);
var Tickets = /** @class */ (function () {
    function Tickets(firstParam, secondParam) {
        this.firstParam = firstParam;
        this.secondParam = secondParam;
    }
    Tickets.prototype.outputh = function () {
        var result = [];
        this.firstParam.forEach(function (el) {
            var _a = el.split('|'), destination = _a[0], price = _a[1], status = _a[2];
            var pricee = Number(price);
            var ticketInfo = {
                destination: destination,
                price: price,
                status: status
            };
            result.push(ticketInfo);
        });
        // return result;
        if (this.secondParam == 'destination') {
            var output = result.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
            return output;
        }
        else if (this.secondParam == 'status') {
            var output = result.sort(function (a, b) { return a.status.localeCompare(b.status); });
            return output;
        }
        else {
            var output = result.sort(function (a, b) { return Number(a.price) - Number(b.price); });
            return output;
        }
    };
    return Tickets;
}());
var info = new Tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
var info1 = new Tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status');
var info2 = new Tickets([
    'New York City|95.99|available',
    'Boston|126.20|departed',
    'New York City|95.99|sold',
    'Philadelphia|94.20|available'
], 'price');
console.log(info.outputh());
console.log(info1.outputh());
console.log(info2.outputh());
