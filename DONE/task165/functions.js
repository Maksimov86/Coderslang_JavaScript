export const setEasyTimeout = (func, time) => {
  const milliseconds = (time.hours * 3600 + time.minutes * 60 + time.seconds) * 1000;
  return setTimeout(func, milliseconds);
}