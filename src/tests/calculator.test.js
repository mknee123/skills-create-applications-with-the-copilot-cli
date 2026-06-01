// Tests for calculator module
// Covers operations: addition, subtraction, multiplication, division

const { add, sub, mul, div, calculate } = require('../calculator')

describe('Calculator basic operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5)
    expect(add('2', '3')).toBe(5)
  })

  test('subtraction: 10 - 4 = 6', () => {
    expect(sub(10, 4)).toBe(6)
    expect(sub('10', '4')).toBe(6)
  })

  test('multiplication: 45 * 2 = 90', () => {
    expect(mul(45, 2)).toBe(90)
    expect(mul('45', '2')).toBe(90)
  })

  test('division: 20 / 5 = 4', () => {
    expect(div(20, 5)).toBe(4)
    expect(div('20', '5')).toBe(4)
  })

  test('division produces floating point results', () => {
    expect(div(7, 2)).toBeCloseTo(3.5)
  })

  test('division by zero throws RangeError', () => {
    expect(() => div(1, 0)).toThrow(RangeError)
    expect(() => calculate('/', 1, 0)).toThrow(RangeError)
  })

  test('invalid numeric input throws TypeError', () => {
    expect(() => add('a', 1)).toThrow(TypeError)
    expect(() => sub(1, 'b')).toThrow(TypeError)
    expect(() => mul('x', 'y')).toThrow(TypeError)
    expect(() => div('foo', 2)).toThrow(TypeError)
  })

  test('calculate supports named and symbol operations', () => {
    expect(calculate('add', 2, 3)).toBe(5)
    expect(calculate('+', 2, 3)).toBe(5)
    expect(calculate('sub', 10, 4)).toBe(6)
    expect(calculate('-', 10, 4)).toBe(6)
    expect(calculate('mul', 6, 7)).toBe(42)
    expect(calculate('*', 6, 7)).toBe(42)
    expect(calculate('div', 9, 3)).toBe(3)
    expect(calculate('/', 9, 3)).toBe(3)
  })
})
