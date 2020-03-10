
exports.min = function min (array) {
  if (!array || array.length === 0) return 0;
  return array.reduce((acc, elm) => {
    if (elm < acc) return elm;
    return acc;
  });
}

exports.max = function max (array) {
  if (!array || array.length === 0) return 0;
  return array.reduce((acc, elm) => {
    if (elm > acc) return elm;
    return acc;
  });
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) return 0;
  return array.reduce((acc, elm) => acc + elm ) / array.length;
}
