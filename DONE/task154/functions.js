export const startsWith = (start) => {
  return (s) => {
    if (s.startsWith(start)) {
      return true
    } else {
      return false
    }
  };
}