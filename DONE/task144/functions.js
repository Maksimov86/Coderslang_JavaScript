export const capitalizeEachWord = (s) => {
  let arrayOfWords = s.split(' ');
  for (let i = 0; i < arrayOfWords.length; i++) {
    let firstChar = arrayOfWords[i].charAt(0).toUpperCase(); // Заглавная первая буква
    let restOfString = arrayOfWords[i].slice(1); // Остальная часть слова
    arrayOfWords[i] = firstChar + restOfString; // Обновляем слово в массиве
  }
  return arrayOfWords.join(' ')
}