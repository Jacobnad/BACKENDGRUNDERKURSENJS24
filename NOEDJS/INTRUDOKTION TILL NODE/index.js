const {getName} = require ('./module');

function add(numberOne , numberTow) {
    const sum = numberOne + numberTow ;
    console.log(sum);
}

add(50, 5);
console.log(getName());