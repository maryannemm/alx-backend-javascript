export default class Currency {
  constructor(code, name) {
    // Type validation for the constructor parameters
    if (typeof code !== 'string') throw new TypeError('Code must be a string');
    if (typeof name !== 'string') throw new TypeError('Name must be a string');

    // Store the validated values in underscore attributes
    this._code = code;
    this._name = name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code with validation
  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name with validation
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Method to display full currency format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

