// javascript date methods

const newD = new Date();
console.log();

const oldD = new Date(2020, 0 , 1 , 9,30,50);
console.log(oldD);

const zeroDay  = new Date(100000); // jan 1,1970
console.log(zeroDay);

const isoDate = new Date("1980-01-15");
console.log(isoDate);

zeroDay.setFullYear(2020);

console.log(zeroDay.getTime());
console.log(zeroDay.getFullYear());
console.log(zeroDay.getDay());
console.log(zeroDay);






