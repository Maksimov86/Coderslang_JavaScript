export const extractNumber = (s) => {
  let regex = s.match(/\d+(\.\d+)?/g)
  let numbers = regex.map(Number);
  let number = parseFloat(numbers)
  return number;
}