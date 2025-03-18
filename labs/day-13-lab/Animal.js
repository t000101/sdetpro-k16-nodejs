"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(name, maxSpeed) {
        this.name = name;
        if (maxSpeed)
            this.maxSpeed = maxSpeed;
        this.speed = this.getRandomSpeed();
    }
    Animal.prototype.getRandomSpeed = function () {
        return Math.floor(Math.random() * this.maxSpeed) + 1;
    };
    Animal.prototype.getSpeed = function () {
        return this.speed;
    };
    Animal.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
exports.default = Animal;
