class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        return `${this.name} says hello!`;
    }
}

const user = new User('Pesho');
console.log(user.sayHello());

class Data {
    private method: string;
    private url: string;
    private version: string;
    private message: string;
    public response: string;
    public fulfilled: boolean;

    constructor(
        method: string,
        url: string,
        version: string,
        message: string,

    ) {
        this.method = method;
        this.url = url;
        this.version = version;
        this.message = message;
        this.response = '';
        this.fulfilled = false;
    }
}

let myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
// console.log(myData);

class Tickets {
    private firstParam: Array<string>;
    public secondParam: string;

    constructor(firstParam: Array<string>, secondParam: string) {
        this.firstParam = firstParam;
        this.secondParam = secondParam;
    }

    outputh() {
        let result: any[] = [];

        this.firstParam.forEach(el => {
            let [destination, price, status] = el.split('|');
            let pricee = Number(price);

            let ticketInfo = {
                destination,
                price,
                status
            }

            result.push(ticketInfo);

        });
        // return result;

        if (this.secondParam == 'destination') {
            const output = result.sort((a, b) => a.destination.localeCompare(b.destination));

            return output;
        } else if (this.secondParam == 'status') {
            const output = result.sort((a, b) => a.status.localeCompare(b.status));

            return output;
        } else {
            const output = result.sort((a, b) => Number(a.price) - Number(b.price));

            return output;
        }
    }
}

let info = new Tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'destination'
);

let info1 = new Tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'status'
);

let info2 = new Tickets([
    'New York City|95.99|available',
    'Boston|126.20|departed',
    'New York City|95.99|sold',
    'Philadelphia|94.20|available'
],
    'price');
console.log(info.outputh());
console.log(info1.outputh());
console.log(info2.outputh());



