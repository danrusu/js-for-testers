const { log } = require('../utils');

function objectKeyValueSwitch(simpleKeyValueObject) {
  const entries = Object.entries(simpleKeyValueObject);
  log('entries', entries);

  const switchEntryElements = ([key, value]) => [value, key];

  const switchedEntries = entries.map(switchEntryElements);
  log('switchedEntries', switchedEntries);

  const switchedObject = Object.fromEntries(switchedEntries);
  log('switchedObject', switchedObject);

  return switchedObject;
}

module.exports = { objectKeyValueSwitch };
