function checkMail() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    console.log(random);
    if (random > 0.5) {
      resolve('Mail has arrived'); // returned value
    } else {
      reject(new Error('Failed to arrive'));
    }
  });
}

const mailPromise = checkMail();
console.log(mailPromise);

mailPromise
  .then(retrnedValue => {
    console.log(retrnedValue);
  })
  .catch(err => {
    console.error('Rejection error:', err.message);
  })
  .finally(() => {
    console.log('Experiment completed');
  });
