export const getTotal = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i]
  }
  return total;
}