export const getObjectKeys = (obj) => {
  let array = []
  for (const key in obj) {
    array.push(key)
  }
  return array;
}