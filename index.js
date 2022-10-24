function shiftLeftbyN(array, n) {
  let shiftLeftPositions = n;
  let length = array.length;
  if (n < 0) return "Invalid number to shift left";
  if (n === 0) return array;
  if (n > array.length) {
    shiftLeftPositions = n % length;
  }
  let tempArray = array.splice(0, shiftLeftPositions);
  return array.concat(tempArray);
}
