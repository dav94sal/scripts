const timeTest = require("./timing-tests");

// function timesThreePlusTen(n) {
//   let total = 0;
//   for (let i = 0 ; i < n ; i++) {
//     total++;
//   }
//   for (let j = 0 ; j < n ; j++) {
//     total++;
//   }
//   for (let k = 0 ; k < n ; k++) {
//     total++;
//   }
//   for (let l = 0 ; l < 10 ; l++) {
//     total++;
//   }
//   return total
// };

// console.log(timeTest(timesThreePlusTen, 10000));
// console.log(timeTest(timesThreePlusTen, 100000));
// console.log(timeTest(timesThreePlusTen, 1000000));
// console.log(timeTest(timesThreePlusTen, 10000000));
// console.log(timeTest(timesThreePlusTen, 1000000000));

function arrayNums(n) {
  const arr = [];
  for (let i = 0 ; i < n ; i++) {
    arr.unshift(i);
  }
  return arr;
}
arrayNums(10);

console.log(timeTest(arrayNums, 1000));
console.log(timeTest(arrayNums, 10000));
console.log(timeTest(arrayNums, 100000));
console.log(timeTest(arrayNums, 1000000));
