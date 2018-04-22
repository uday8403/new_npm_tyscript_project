"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        if (firstName === void 0) { firstName = "default"; }
        if (lastName === void 0) { lastName = "default"; }
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "Hi, this is " + this.firstName + " " + this.lastName + ".";
    };
    return Person;
}());
exports.Person = Person;
