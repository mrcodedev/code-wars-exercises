// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

// Example:

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// If array is empty, null or None, or if only 1 Element exists, return 0.
// Note:In C++ instead null an empty vector is used. In C there is no null. ;-)


// -- There's no null in Haskell, therefore Maybe [Int] is used. Nothing represents null.
// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges

function sumArray(array) {
  return Array.isArray(array) && array.length > 1 ? array.reduce((a, b) => a + b, 0) - Math.min(...array) - Math.max(...array) : 0;
}
//340
console.log(sumArray([-10,
  -9,
  -8,
  -8,
  -7,
  -7,
  -7,
  -6,
  -5,
  -4,
  -4,
  -3,
  -3,
  -2,
  0,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  6,
  6,
  6,
  6,
  7,
  7,
  7,
  8,
  9,
  10,
  11,
  11,
  12,
  13,
  14,
  14,
  14,
  15,
  15,
  15,
  17,
  18,
  18,
  19,
  19,
  19,
  20,
  21,
  21,
  22
]));