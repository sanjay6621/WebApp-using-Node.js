//java script template literals

const a =`hello`;
const b = `world`;

function  add(x,y){
    return x+y;
}

const val = `

${a} ${b} ${5+5} ${add(10,50)}
single quotes'
double quotes "
new \n Line 


`;
console.log(val);

