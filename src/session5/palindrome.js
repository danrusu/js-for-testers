// better performace
const isPalindrome = word => {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] != word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// simpler, using Array.reverse and Array.join
const isPalindrome2 = word => {
  const reveredWord = word.split('').reverse().join('');
  return word == reveredWord;
};

module.exports = { isPalindrome, isPalindrome2 };
