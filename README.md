# JavaScript NaN Comparison Bug

This repository demonstrates a common, yet subtle, error in JavaScript involving the comparison of NaN (Not a Number) values.

## The Problem

JavaScript's loose comparison (`==`) and strict comparison (`===`) operators behave unexpectedly when comparing `NaN` to itself or other values.  `NaN` is never equal to itself, even when using strict equality (`===`).

The provided `bug.js` file contains a function that attempts to compare two values for equality, but produces an incorrect result when those values are `NaN`.

## The Solution

The solution, found in `bugSolution.js`, utilizes `Number.isNaN()` to correctly identify `NaN` values. `Number.isNaN()` is the recommended way to check for `NaN` in JavaScript.