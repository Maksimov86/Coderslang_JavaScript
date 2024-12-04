export const startCountdown = (n) => {
  const intervalId = setInterval(() => {
    if (n > 0) {
      console.log(n);
      n--
    } else {
      console.log('GO!')
      clearInterval(intervalId)
    }
  }, 100)
}
