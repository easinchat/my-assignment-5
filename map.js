const numbers = [4, 8, 7, 5, 6];
// const double = [];
// for (const num of numbers) {
//   const result = num * 2;
//   double.push(result);
// }
const double = (x) => x * 2;
const double2 = numbers.map(double);
// console.log(double2);
const dbl = numbers.map((x) => x * 2);
console.log(dbl, "I have Done ");
