function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; // Normal addition
}

console.log(foo(1, null)); // Outputs 0
console.log(foo(1, 2)); // Outputs 3