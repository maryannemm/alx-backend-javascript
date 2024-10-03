export default class HolbertonClass {
  constructor(size, location) {
    // Validate that size is a number and location is a string
    if (typeof size !== 'number') throw new TypeError('Size must be a number');
    if (typeof location !== 'string') throw new TypeError('Location must be a string');

    // Store the validated values in underscore attributes
    this._size = size;
    this._location = location;
  }

  // Override to allow casting to a number (returns size)
  valueOf() {
    return this._size;
  }

  // Override to allow casting to a string (returns location)
  toString() {
    return this._location;
  }
}

