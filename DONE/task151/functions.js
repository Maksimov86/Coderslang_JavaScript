export const isShortWord = (s) => {
    return s.length < 10 && !s.includes(' ');
}