module.exports = {
  getDurationMetrics,
};

async function getDurationMetrics(fn) {
  const start = new Date();

  const result = await fn();

  return {
    result,
    duration: new Date() - start,
  };
}
