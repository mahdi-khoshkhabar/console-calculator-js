describe("checkNumber function", function () {
  it("numbers inputs returns true", function () {
    assert.equal(checkNumber(1), true);

    assert.equal(checkNumber(0), true);

    assert.equal(checkNumber(-1), true);

    assert.equal(checkNumber(+"1"), true);

    assert.equal(checkNumber(+"0"), true);

    assert.equal(checkNumber(+"-1"), true);
  });

  it("other inputs returns false", function () {
    assert.equal(checkNumber("text"), false);

    assert.equal(checkNumber("+"), false);

    assert.equal(checkNumber("="), false);

    assert.equal(checkNumber(null), false);

    assert.equal(checkNumber(undefined), false);
  });
});

describe("checkOperator function", function () {
  it("operator inputs returns true", function () {
    assert.equal(checkOperator("+"), true);

    assert.equal(checkOperator("-"), true);

    assert.equal(checkOperator("/"), true);

    assert.equal(checkOperator("*"), true);

    assert.equal(checkOperator("%"), true);

    assert.equal(checkOperator("**"), true);
  });

  it("other inputs returns false", function () {
    assert.equal(checkOperator(null), false);

    assert.equal(checkOperator(undefined), false);

    assert.equal(checkOperator("test"), false);

    assert.equal(checkOperator("2"), false);
  });
});

describe("calcTwoNumbers function", function () {
  it("+", function () {
    assert.equal(calcTwoNumbers(2, 3, "+"), 5);
    assert.equal(calcTwoNumbers(0, 3, "+"), 3);
    assert.equal(calcTwoNumbers(-2, 2, "+"), 0);
  });

  it("-", function () {
    assert.equal(calcTwoNumbers(2, 3, "-"), -1);
    assert.equal(calcTwoNumbers(3, 2, "-"), 1);
    assert.equal(calcTwoNumbers(3, 3, "-"), 0);
    assert.equal(calcTwoNumbers(0, 3, "-"), -3);
  });

  it("/", function () {
    assert.equal(calcTwoNumbers(6, 2, "/"), 3);
    assert.equal(calcTwoNumbers(2, 2, "/"), 1);
    assert.equal(calcTwoNumbers(1, 2, "/"), 0.5);
    // TODO: add conditions for [number]/0 and etc.
  });

  it("%", function () {
    assert.equal(calcTwoNumbers(4, 2, "%"), 0);
    assert.equal(calcTwoNumbers(5, 2, "%"), 1);
  });

  it("*", function () {
    assert.equal(calcTwoNumbers(2, 3, "*"), 6);
    assert.equal(calcTwoNumbers(9, 0, "*"), 0);
    assert.equal(calcTwoNumbers(-3, 4, "*"), -12);
    assert.equal(calcTwoNumbers(0, 0, "*"), 0);
  });

  it("**", function () {
    assert.equal(calcTwoNumbers(2, 3, "**"), 8);
    assert.equal(calcTwoNumbers(3, 3, "**"), 27);
    assert.equal(calcTwoNumbers(9, 0, "**"), 1);
  });
});

describe("checkNullStr function", function () {
  it("emtpy string", function () {
    assert.equal(checkNullStr(""), null);
  });
  it('"0"', function () {
    assert.equal(checkNullStr("0"), 0);
  });
});
