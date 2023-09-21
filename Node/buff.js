const str = "Hello world";
const buffer = Buffer.from(str,"utf-8");
console.log(buffer);
console.log(buffer.length);

for(const val of buffer ){
    console.log(val);
}

const val2  =buffer.toString();
console.log(val2);
buffer[2] = 32;
const val3 = buffer.slice(0,5);
console.log(val3.toString());