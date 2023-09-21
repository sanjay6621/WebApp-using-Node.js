
const fetch = require('node-fetch');
console.clear();

fetch('https://google.com')
.then(res => res.text())
.then(data => console.log(data));// for fetching the data in google in the form of tyhe html text.

 fetch('https://randomuser.me/api/?results=5')
.then(res => res.json())
.then(json => {
    // console.log(json.results);
    json.results.forEach(person =>{
        const temp = person.name;
        console.log(`${temp.first} ${temp.last} `);
    });
});

 

 