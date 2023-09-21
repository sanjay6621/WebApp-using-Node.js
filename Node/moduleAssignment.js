//console.log(process.ppid);
//console.log(process.pid);
//console.log(process.ppid[0]);
//console.log(process.pid[1]);
console.log(process.argv[0],process.argv[1]);
const first = process.argv[2];
const second = process.argv[3];
let message = ` Hi , welcome ${first} ${second}`;
console.log(message);