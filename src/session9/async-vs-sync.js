const {
  wait,
  failPromise,
  successfulPromise,
  getDurationMetrics,
} = require('../utils');

function emptyLoop(n) {
  for (let i = 0; i < n; i++) {
    // empty
  }
}

function loop(n) {
  let s = '';
  for (let i = 0; i < n; i++) {
    s = `${i}`;
  }
}

async function asyncF1() {
  await wait(400);
  await wait(600);
  return await successfulPromise(100);
}

async function asyncF2() {
  await wait(1000);
}

function syncF1() {
  emptyLoop(1_000_000_000);
}

function syncF2() {
  loop(30_000_000);
  return true;
}

async function asyncF3() {
  const res1 = await asyncF1();
  const res2 = await asyncF2();
  return [res1, res2];
}

async function asyncF4() {
  const asyncF1Promise = asyncF1();
  const asyncF2Promise = asyncF2();
  return await Promise.all([asyncF1Promise, asyncF2Promise]);
}

(async () => {
  const asyncF1Metrics = await getDurationMetrics(asyncF1);
  const asyncF2Metrics = await getDurationMetrics(asyncF2);
  const asyncF3Metrics = await getDurationMetrics(asyncF3);
  const asyncF4Metrics = await getDurationMetrics(asyncF4);

  const syncF1Metrics = await getDurationMetrics(syncF1);
  const syncF2Metrics = await getDurationMetrics(syncF2);

  console.log('asyncF1Metrics', asyncF1Metrics);
  console.log('asyncF2Metrics', asyncF2Metrics);
  console.log('asyncF3Metrics', asyncF3Metrics);
  console.log('asyncF4Metrics', asyncF4Metrics);

  console.log('--------------------');

  console.log('syncF1Metrics', syncF1Metrics);
  console.log('syncF2Metrics', syncF2Metrics);
})();
