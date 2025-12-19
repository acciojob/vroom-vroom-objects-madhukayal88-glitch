// Car constructor
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Method on Car prototype
Car.prototype.getMakeModel = function () {
    return this.make + " " + this.model;
};

// SportsCar constructor
function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // inherit properties
    this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Method on SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
    return this.topSpeed;
};
