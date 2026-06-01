// Calculator module
// Supports the following operations: addition, subtraction, multiplication, division
// Operations: add (a + b), sub (a - b), mul (a * b), div (a / b)

function ensureNumber(value) {
  const num = Number(value)
  if (!Number.isFinite(num)) {
    throw new TypeError(`Invalid number: ${value}`)
  }
  return num
}

function add(a, b) {
  a = ensureNumber(a)
  b = ensureNumber(b)
  return a + b
}

function sub(a, b) {
  a = ensureNumber(a)
  b = ensureNumber(b)
  return a - b
}

function mul(a, b) {
  a = ensureNumber(a)
  b = ensureNumber(b)
  return a * b
}

function div(a, b) {
  a = ensureNumber(a)
  b = ensureNumber(b)
  if (b === 0) {
    throw new RangeError('Division by zero')
  }
  return a / b
}

function calculate(op, a, b) {
  switch (op) {
    case 'add':
    case '+':
      return add(a, b)
    case 'sub':
    case '-':
      return sub(a, b)
    case 'mul':
    case '*':
      return mul(a, b)
    case 'div':
    case '/':
      return div(a, b)
    default:
      throw new Error(`Unsupported operation: ${op}`)
  }
}

module.exports = { add, sub, mul, div, calculate }
