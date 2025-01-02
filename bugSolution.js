function foo(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true; //Consider NaN equal to NaN
  } else if (a === b) {
    return true;
  }
  return false; 
}

console.log(foo(NaN, NaN)); // true
console.log(foo(1,1)); // true
console.log(foo(1,2)); // false