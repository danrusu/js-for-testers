const repetitionMap = array => {
  const arrayInfo = array.reduce((repetitionMap, item) => {
    if (repetitionMap[item] == undefined) {
      repetitionMap[item] = 1;
    } else {
      repetitionMap[item] = repetitionMap[item] + 1;
    }
    return repetitionMap;
  }, {});

  return Object.fromEntries(
    Object.entries(arrayInfo).sort(([_k1, v1], [_k2, v2]) => v1 - v2),
  );
};

module.exports = { repetitionMap };
