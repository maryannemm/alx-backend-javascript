const { expect } = require('chai');

describe('Testing numbers', () => {
  it('1 is equal to 1', () => {
    expect(1 === 1).to.be.true;
  });

  it('1 is equal to 3', function skipTest() {
    this.skip();
    expect(1 === 3).to.be.true;
  });
});

