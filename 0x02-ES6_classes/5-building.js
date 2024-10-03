export default class Building {
  constructor(sqft) {
    // Validate that sqft is a number
    if (typeof sqft !== 'number') throw new TypeError('Square footage must be a number');

    // Store the validated value in an underscore attribute
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method placeholder (should be overridden by subclasses)
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

