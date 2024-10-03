const brandSymbol = Symbol('brand');
const motorSymbol = Symbol('motor');
const colorSymbol = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    // Store the attributes using Symbols to ensure uniqueness
    this[brandSymbol] = brand;
    this[motorSymbol] = motor;
    this[colorSymbol] = color;
  }

  // Method to clone the car
  cloneCar() {
    return new this.constructor(
      this[brandSymbol],
      this[motorSymbol],
      this[colorSymbol]
    );
  }

  // Getters to access the properties if needed
  get brand() {
    return this[brandSymbol];
  }

  get motor() {
    return this[motorSymbol];
  }

  get color() {
    return this[colorSymbol];
  }
}

