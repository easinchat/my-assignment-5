const numbers = [1, 2, 3, 4, 5];

const multi3 = numbers.map((x) => x * 3);
console.log(multi3);



const numbers = [10, 15, 20, 25, 30];
const filter = numbers.filter((x) => x > 20);
console.log(filter);




const fruits = ["apple", "banana", "orange"];
const consolLog = fruits.forEach((x) => {
  const print = x;
  console.log(print);
});




const names = ["Rahim", "Karim", "Hasan"];
const find = names.find((x) => x === "Rahim");
console.log(find);

const numbers = [2, 4, 6, 7, 8];
const oddNumbers = numbers.find((x) => x % 2 === 0);
console.log(oddNumbers);

const ages = [12, 18, 22, 15, 30];

const avobe18 = ages.filter((x) => x >= 18);
console.log(avobe18);

const prices = [100, 200, 300];
const addTk = prices.map((x) => x + "TK");
console.log(addTk);



const numbers = [1, 2, 3, 4, 5];
const squerNumbers = numbers.forEach((x) => {
  const squer = x * x;
  console.log(squre);
});

const words = ["hello", "world", "javascript"];
const makeUppercase = words.map((x) => x.toUpperCase());
console.log(makeUppercase);




const numbers = [5, 10, 15, 20, 25];

const diviseble = numbers.filter((x) => x % 10 === 0);
console.log(diviseble);
