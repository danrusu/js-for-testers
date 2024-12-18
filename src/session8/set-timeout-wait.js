const wait = async timeoutInMillis => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, timeoutInMillis);
  });
};

const waitSimplified = async timeoutInMillis => {
  return new Promise(resolve => setTimeout(resolve, timeoutInMillis));
};

(async () => {
  const delay = 100;
  const result = await wait(delay);
  // await waitSimplified(delay);
  console.log('wait result', result);
  console.log(`...waited for ${delay / 1000} seconds`);
})();
