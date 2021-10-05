const { result } = require("lodash");

function strictEquals(a, b) {
  return Object.is(a, b);
}

describe("function compare", function () {
  test("when function add receives 1 and 1, it returns true", function () {
    //AAA -> Arrange  Act  Assert

    //Arrange
    const n1 = 1;
    const n2 = 1;
    const expected = true;

    //Act

    const result = strictEquals(n1, n2);

    //Assert

    expect(result).toBe(expected);
  });
  test("when function add receives NaN and NaN, it returns false", function () {
    //AAA -> Arrange  Act  Assert

    //Arrange
    const n1 = NaN;
    const n2 = NaN;
    const expected = true;

    //Act

    const result = strictEquals(n1, n2);

    //Assert

    expect(result).toBe(expected);
  });
  test("when function add receives 0 and -0, it returns true", function () {
    //AAA -> Arrange  Act  Assert

    //Arrange
    const n1 = 0;
    const n2 = -0;
    const expected = false;

    //Act

    const result = strictEquals(n1, n2);

    //Assert

    expect(result).toBe(expected);
  });
  test("when function add receives -0 and 0, it returns true", function () {
    //AAA -> Arrange  Act  Assert

    //Arrange
    const n1 = -0;
    const n2 = 0;
    const expected = false;

    //Act

    const result = strictEquals(n1, n2);

    //Assert

    expect(result).toBe(expected);
  });
  test("when function add receives true and false, it returns false", function () {
    //AAA -> Arrange  Act  Assert

    //Arrange
    const n1 = true;
    const n2 = false;
    const expected = false;

    //Act

    const result = strictEquals(n1, n2);

    //Assert

    expect(result).toBe(expected);
  });
  test("when function add receives false and false, it returns true", function () {
    //AAA -> Arrange  Act  Assert

    //Arrange
    const n1 = false;
    const n2 = false;
    const expected = true;

    //Act

    const result = strictEquals(n1, n2);

    //Assert

    expect(result).toBe(expected);
  });
  test("when function add receives 'water' and 'oil', it returns false", function () {
    //AAA -> Arrange  Act  Assert

    //Arrange
    const n1 = "water";
    const n2 = "oil";
    const expected = false;

    //Act

    const result = strictEquals(n1, n2);

    //Assert

    expect(result).toBe(expected);
  });
});
