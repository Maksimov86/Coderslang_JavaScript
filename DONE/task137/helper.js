export const positiveElements = (arr) => {
  let array = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      array.push(arr[i])
    } continue
  }
  return array;
}