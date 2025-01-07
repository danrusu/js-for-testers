const { log } = require('./logger');
const { wait, successfulPromise, failPromise } = require('./promise-util');
const { getDurationMetrics } = require('./time-util');

module.exports = {
  log,
  wait,
  successfulPromise,
  failPromise,
  getDurationMetrics,
};
