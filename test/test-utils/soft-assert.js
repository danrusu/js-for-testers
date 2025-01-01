class SoftAssert {
  assertions;
  errors;
  executed;

  constructor() {
    this.assertions = [];
    this.errors = [];
    this.executed = false;
  }

  /**
   *
   * @param {() => void} assertion - an assertion function
   */
  add(assertion) {
    this.assertions.push(assertion);
  }

  assertAll() {
    if (this.executed) {
      throw new Error('Soft assertions already executed!');
    }
    this.executed = true;

    for (const assertion of this.assertions) {
      try {
        assertion();
      } catch (err) {
        this.errors.push(err);
      }
    }

    // assert all assertions have passed
    if (this.errors.length > 0) {
      const errorMessages = this.errors.map(err => JSON.parse(err.message));
      throw new Error(
        `${this.errors.length} failed assertions: ${JSON.stringify(errorMessages, null, 2)}`,
      );
    }
  }
}

module.exports = {
  SoftAssert,
};
