export const checkSpam = (text, spamKeywords) => {
  let doesNotContainSpam = true;
  for (let i = 0; i < text.toLowerCase().length; i++) {
    if (text.toLowerCase().includes(spamKeywords[i])) {
      doesNotContainSpam = false;
      break;
    } else {
      doesNotContainSpam = true;
    }
  }
  if (doesNotContainSpam === false) {
    return true;
  } else {
    return false;
  }
}