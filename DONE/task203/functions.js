export const startProgressBar = (progressBar, delay) => {
  const timer = setInterval(() => {
    progressBar.tick();
    if (progressBar.complete) {
      console.log('DONE!');
      clearInterval(timer)
    }
  }, delay);
}