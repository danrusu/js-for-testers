const {
  wait,
  failPromise,
  getDurationMetrics,
  successfulPromise,
} = require('../utils');

const p1 = successfulPromise('success');
const p2 = wait(500);
// const p3 = failPromise();

async function allSuccesful() {
  return await Promise.all([p1, p2]);
}

async function all() {
  return await Promise.all([p1, p2, p3]);
}

async function allSettled() {
  return await Promise.allSettled([p1, p2, p3]);
}

(async () => {
  const metrics = await getDurationMetrics(async () => wait(500));

  // const metrics = await getDurationMetrics(allSuccesful);
  // const metrics = await getDurationMetrics(all);
  // const metrics = await getDurationMetrics(allSettled);

  console.log('metrics', metrics);
})();
