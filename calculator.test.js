const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 18907;
    actual = sum(8907, 10000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -48;
    actual = sum(-22 ,-26);
    expect(actual).toBe(expected)
  });

  test('can add zero', () => {
    expected = 12;
    actual = sum(0, 12);
    expect(actual).toBe(expected);
  });
});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
  expected = 13;
  actual = subtract(20, 7);
  expect(actual).toBe(expected);
});

test('can subtract two large positive numbers', () => {
  expected = 152276502;
  actual = subtract(315862438, 163585936);
  expect(actual).toBe(expected);
});

test('can subtract two small negative numbers', () => {
  expected = -3;
  actual = subtract(-11, -8);
  expect(actual).toBe(expected);
});
});

describe('multiply', () => {

  test('can multiply two positive small numbers', () => {
    expected = 72;
    actual = multiply(9, 8);
    expect(actual).toBe(expected);
  });

  test('can multiply negative large numbers', () => {
    expected = 4014644197;
    actual = multiply(-52649, -76253);
    expect(actual).toBe(expected);
  });

  test('can multiply by zero', () => {
    expected = 0;
    actual = multiply(7, 0);
    expect(actual).toBe(expected);
  }); 
});

describe('divide', () => {

  test('can divide two small positive numbers', () => {
    expected = 4;
    actual = divide(12, 3);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () => { 
    expected = 80000;
    actual = divide(80000000, 1000);
    expect(actual).toBe(expected);
  });

  test('can divide two small negative numbers', () => {
    expected = -4;
    actual = divide(-48, 12);
    expect(actual).toBe(expected);
  });
});

describe('modulus', () => {

  test('can modulus of two small numbers', () => {
    expected = 3;
    actual = modulus(39, 6);
    expect(actual).toBe(expected);
  });

  test('can modulus of two large numbers', () => {
    expected = 18971;
    actual = modulus(776755436, 24645);
    expect(actual).toBe(expected);
  });

  test('can modulus negative number with positive number', () => {
    expected = -7;
    actual = modulus(-77, 10);
    expect(actual).toBe(expected);
  });
  test('can modulus positive number with negative number', () => {
    expected = 1;
    actual = modulus(22, -7);
    expect(actual).toBe(expected);
  });
});

describe('even', () => {
  test('can determine an even number correctly', () => {
    expected = true;
    actual = even(24);
    expect(actual).toBe(expected);
  });

  test('can determine number that is not even', () => {
    expected = false;
    actual = even(57);
    expect(actual).toBe(expected);
  });
});

describe('odd', () => {

  test('can determine odd number correctly', () => {
    expected = true; 
    actual = odd(15);
    expect(actual).toBe(expected);
  });

  test('can determine a large number that is not odd', () => {
    expected = false;
    actual = odd(303322312);
    expect(actual).toBe(expected);
  });
});
