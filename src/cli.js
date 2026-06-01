#!/usr/bin/env node
// Node.js CLI calculator
// Supported operations (based on provided image and repository issue):
// - Addition: add or +
// - Subtraction: sub or -
// - Multiplication: mul or *
// - Division: div or /
// Usage examples:
//   node src/cli.js add 2 3
//   node src/cli.js + 4 5

const path = require('path')
const { calculate } = require('./calculator')

function printUsage() {
  const me = path.basename(process.argv[1])
  console.error('Usage: ' + me + ' <operation> <operand1> <operand2>')
  console.error('Operations: add (+), sub (-), mul (*), div (/ )')
}

async function main() {
  const args = process.argv.slice(2)
  if (args.length !== 3) {
    printUsage()
    process.exit(2)
  }

  const [op, aStr, bStr] = args
  try {
    const result = calculate(op, aStr, bStr)
    // Print result to stdout
    console.log(result)
    process.exit(0)
  } catch (err) {
    // Provide a clear error message and non-zero exit code
    console.error('Error:', err.message)
    if (err instanceof TypeError) process.exit(2)
    if (err instanceof RangeError) process.exit(3)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}
