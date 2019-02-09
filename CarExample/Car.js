"use strict";
var Car = /** @class */ (function () {
    function Car(engine) {
        var _this = this;
        this.start = function () {
            alert('Engine started: ' + _this.engine);
        };
        this.stop = function () {
            alert('Engine stopped: ' + _this.engine);
        };
        this.engine = engine;
    }
    return Car;
}());
window.onload = function () {
    var car = new Car('V8');
    car.start();
    car.stop();
};
