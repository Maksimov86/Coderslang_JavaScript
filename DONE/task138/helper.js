export const pow = (x, y) => {
  let total = x
  if (y === 0) {
    return 1;
  } else if (y === 1) {
    return x;
  } else if (x === 0) {
    return 0;
  } else {
    for (let i = 0; i < y - 1; i++) {
      total = total * x
    }
    return total
  }
}