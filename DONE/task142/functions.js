export const shorten = (s, n) => {
  if (n < s.length) {
    let truncatedLine = s.slice(0, n);
    let newString = truncatedLine + '...';
    return newString;
  } else {
    return s.slice(0, n);
  }
}