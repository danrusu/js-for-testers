module.exports = {
  wait,
  failPromise,
  successfulPromise,
};

async function wait(timeoutInMillis) {
  return new Promise(resolve => {
    setTimeout(resolve, timeoutInMillis);
  });
}

async function failPromise(errorMessage) {
  return await Promise.reject(errorMessage);
}

async function successfulPromise(returnValue) {
  //return returnValue;
  return await Promise.resolve(returnValue);
}
