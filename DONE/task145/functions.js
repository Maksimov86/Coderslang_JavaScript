export const shortenByWords = (s, n) => {
  if (s.length <= n) {
    return s;
  } else {
    // Находим последнее слово, которое входит в ограничение длины
    let cutIndex = s.lastIndexOf(" ", n);
    if (cutIndex === -1) {
      return s.slice(0, n) + "..."; // На случай, если нет пробелов в пределах `n`
    }
    return s.slice(0, cutIndex) + "...";
  }
};