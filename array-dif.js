// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function array_diff(a, b) {
  let unique = [];

  if (a.length === 0) {
    return [];
  }

  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      unique.push(a[i]);
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) === -1) {
      unique.push(b[i]);
    }
  }

  return unique;
}