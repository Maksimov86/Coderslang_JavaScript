export const delayedLog = (s, n) => {
  return setTimeout(() => console.log(s), n * 1000);
}
