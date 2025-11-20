
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    console.log("Brand: " + this.brand + ", Model: " + this.model);
};

// Creating objects
const car1 = new Car("BMW", "X5");
const car2 = new Car("Audi", "A6");

// Calling prototype method
car1.getDetails();
car2.getDetails();
