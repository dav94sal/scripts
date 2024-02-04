const numsTimeTest = (cb, n) => {
  let timeStart = Date.now();
  cb(n);
  let timeEnd = Date.now();
  return timeEnd - timeStart;
}

const cbTimeTest = (cb, n = null) => {
  if (n) return numsTimeTest(cb, n)
  let timeStart = Date.now();
  cb();
  let timeEnd = Date.now();
  return timeEnd - timeStart;
};

module.exports = cbTimeTest
