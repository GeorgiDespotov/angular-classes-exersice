"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Melolemonmelon = exports.Earthmelon = exports.Airmelon = exports.Firemelon = exports.Watermelon = exports.Maniger = exports.Senior = exports.Junior = void 0;
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
// console.log(info.outputh());
// console.log(info1.outputh());
// console.log(info2.outputh());
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }
    Employee.prototype.work = function () {
        var currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(this.name + currentTask);
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.collectSalary = function () {
        console.log("".concat(this.name, " received ").concat(this.getSalary(), " this mounth."));
    };
    return Employee;
}());
var Junior = /** @class */ (function (_super) {
    __extends(Junior, _super);
    function Junior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks.push(' is working on a simple task.');
        return _this;
    }
    return Junior;
}(Employee));
exports.Junior = Junior;
var Senior = /** @class */ (function (_super) {
    __extends(Senior, _super);
    function Senior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks.push(' is working on a complicated task.');
        _this.tasks.push(' is taking time off work.');
        _this.tasks.push(' is supervising junior workers.');
        return _this;
    }
    return Senior;
}(Employee));
exports.Senior = Senior;
var Maniger = /** @class */ (function (_super) {
    __extends(Maniger, _super);
    function Maniger(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.divident = 0;
        _this.tasks.push(' scheduled a meeting.');
        _this.tasks.push(' is preparing a quarterly report.');
        return _this;
    }
    Maniger.prototype.getSalary = function () {
        return this.salary + this.divident;
    };
    return Maniger;
}(Employee));
exports.Maniger = Maniger;
var maniger = new Maniger('Pesho', 34);
maniger.salary = 200;
maniger.divident = 50;
// console.log(maniger.getSalary());
// console.log(maniger.collectSalary());
// console.log(maniger.work());
// console.log(maniger.work());
var Melon = /** @class */ (function () {
    function Melon(weight, sort) {
        this.weight = weight;
        this.sort = sort;
        this.element = '';
    }
    Melon.prototype.getElIndex = function () {
        return this.weight * this.sort.length;
    };
    Melon.prototype.toString = function () {
        console.log("Element: ".concat(this.element, "\nSort: ").concat(this.sort, "\nElement Index: ").concat(this.getElIndex()));
    };
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weigth, sort) {
        var _this = _super.call(this, weigth, sort) || this;
        _this.element = 'Water';
        return _this;
    }
    return Watermelon;
}(Melon));
exports.Watermelon = Watermelon;
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weigth, sort) {
        var _this = _super.call(this, weigth, sort) || this;
        _this.element = 'Fire';
        return _this;
    }
    return Firemelon;
}(Melon));
exports.Firemelon = Firemelon;
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weigth, sort) {
        var _this = _super.call(this, weigth, sort) || this;
        _this.element = 'Air';
        return _this;
    }
    return Airmelon;
}(Melon));
exports.Airmelon = Airmelon;
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weigth, sort) {
        var _this = _super.call(this, weigth, sort) || this;
        _this.element = 'Earth';
        return _this;
    }
    return Earthmelon;
}(Melon));
exports.Earthmelon = Earthmelon;
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weigth, sort) {
        var _this = _super.call(this, weigth, sort) || this;
        _this.allElemets = ['Water', 'Fire', 'Earh', 'Air'];
        return _this;
    }
    Melolemonmelon.prototype.morph = function () {
        var currentElemnt = this.element = this.allElemets.shift();
        this.allElemets.push(this.element);
        return this.element;
    };
    Melolemonmelon.prototype.toString = function () {
        console.log("Element: ".concat(this.morph(), "\nSort: ").concat(this.sort, "\nElement Index: ").concat(this.getElIndex()));
    };
    return Melolemonmelon;
}(Earthmelon));
exports.Melolemonmelon = Melolemonmelon;
var wMelon = new Watermelon(2, 'on');
console.log(wMelon.toString());
var morphMelon = new Melolemonmelon(5, 'Pulp');
console.log(morphMelon.toString());
console.log(morphMelon.toString());
console.log(morphMelon.toString());
console.log(morphMelon.toString());
console.log(morphMelon.toString());
