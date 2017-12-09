function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new TypeError("Add requires numbers");
  }
  return x + y;
}