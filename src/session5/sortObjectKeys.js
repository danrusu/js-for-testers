const stringAscendingComparator = (s1, s2) => s1.localeCompare(s2);
const entriesAscendingComparator = ([key1, _value1], [key2, _value2]) =>
  key1 < key2 ? -1 : 1;

function sortObjectKeys(obj) {
  const sortedKeys = Object.keys(obj).sort(stringAscendingComparator);
  const sortedEntries = sortedKeys.map(key => [key, obj[key]]);
  const newObj = Object.fromEntries(sortedEntries);
  return newObj;
}

function sortObjectKeys2(obj) {
  const entries = Object.entries(obj);
  entries.sort(entriesAscendingComparator);
  const newObj = Object.fromEntries(entries);
  return newObj;
}

module.exports = { sortObjectKeys, sortObjectKeys2 };
