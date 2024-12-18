async function echo(text) {
  // throw new Error('error');
  return text; // <Promise<string>>
}

const echoWrapper = text => {
  return echo(text); // Promise<Promise<string>> = <Promise<string>>
};

(async () => {
  const testResult = await echoWrapper('Hello');
  console.log(testResult);
})();
