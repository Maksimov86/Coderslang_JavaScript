export const allTheSame = (x, y, z) => {
  if (x === true && y === true && z === true || x === false && y === false && z === false) {
    return true
  } else {
    return false
  }
}