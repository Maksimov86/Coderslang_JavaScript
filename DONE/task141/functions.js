export const capitalizeFirstWord = (s) => {
  let firstChar = s.charAt(0);
  let UpperFirstChar = firstChar.toUpperCase();
  let restOfString = s.slice(1);
  let result = UpperFirstChar + restOfString;
  return result;
}