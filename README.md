# JavaScript Null Value Handling Bug

This repository demonstrates a common JavaScript bug related to null value handling and its solution.

## Bug Description

JavaScript's loose comparison (==) can lead to unexpected behavior when dealing with null values, especially when performing arithmetic operations.  This bug showcases a function where the addition of a number and a null value might not produce the expected result.

## Solution

The solution involves explicitly checking for null values using strict equality (===) before performing arithmetic operations. This ensures that null values are handled correctly, preventing unexpected behavior and potential errors.

## How to Run

1. Clone this repository.
2. Open `bug.js` to see the buggy code.
3. Open `bugSolution.js` to see the corrected code.
4. Run the Javascript code in a node environment or a browser's developer console.