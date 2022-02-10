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
// console.log(info.outputh());
// console.log(info1.outputh());
// console.log(info2.outputh());


abstract class Employee {

    public name: string;
    public age: number;
    public salary: number;
    public tasks: Array<string | undefined>;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    public work(): void {
        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(this.name + currentTask);
    }

    public getSalary() {
        return this.salary;
    }

    public collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this mounth.`);
    }
}

export class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(' is working on a simple task.');
    }
}

export class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(' is working on a complicated task.');
        this.tasks.push(' is taking time off work.');
        this.tasks.push(' is supervising junior workers.');
    }
}

export class Maniger extends Employee {

    public divident: number;

    constructor(name: string, age: number) {
        super(name, age);
        this.divident = 0;
        this.tasks.push(' scheduled a meeting.');
        this.tasks.push(' is preparing a quarterly report.');
    }

    public getSalary() {
        return this.salary + this.divident;
    }
}



const maniger = new Maniger('Pesho', 34);
maniger.salary = 200;
maniger.divident = 50;
// console.log(maniger.getSalary());
// console.log(maniger.collectSalary());
// console.log(maniger.work());
// console.log(maniger.work());



abstract class Melon {

    public weight: number;
    public sort: string;
    public element: string | undefined;

    constructor(weight: number, sort: string) {
        this.weight = weight;
        this.sort = sort;
        this.element = '';
    }

    public getElIndex() {
        return this.weight * this.sort.length;
    }

    public toString(): void {
        console.log(`Element: ${this.element}\nSort: ${this.sort}\nElement Index: ${this.getElIndex()}`);
    }
}

export class Watermelon extends Melon {

    constructor(weigth: number, sort: string) {
        super(weigth, sort);
        this.element = 'Water';
    }
}

export class Firemelon extends Melon {

    constructor(weigth: number, sort: string) {
        super(weigth, sort);
        this.element = 'Fire';
    }
}

export class Airmelon extends Melon {

    constructor(weigth: number, sort: string) {
        super(weigth, sort);
        this.element = 'Air';
    }
}

export class Earthmelon extends Melon {

    constructor(weigth: number, sort: string) {
        super(weigth, sort);
        this.element = 'Earth';
    }
}

export class Melolemonmelon extends Earthmelon {

    private allElemets: Array<string>;

    constructor(weigth: number, sort: string) {
        super(weigth, sort);
        this.allElemets = ['Water', 'Fire', 'Earh', 'Air'];
        
    }

    private morph() {
        const currentElemnt = this.element = this.allElemets.shift();
        this.allElemets.push(this.element!);

        return this.element;
    }

    public toString(): void {
        console.log(`Element: ${this.morph()}\nSort: ${this.sort}\nElement Index: ${this.getElIndex()}`);
    }
}

let wMelon = new Watermelon(2, 'on');
console.log(wMelon.toString());

const morphMelon = new Melolemonmelon(5, 'Pulp');
console.log(morphMelon.toString());
console.log(morphMelon.toString());
console.log(morphMelon.toString());
console.log(morphMelon.toString());
console.log(morphMelon.toString());










