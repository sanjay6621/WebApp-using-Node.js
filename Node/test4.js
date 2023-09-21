const val1 = 'hello world';
const val2 = 'Test private 2';
const val3 = 'New message';
function output(message){
    console.log(`this is your message ${message}.Private value ${val2}`);
    return message;
}

module.exports.O1 = output;
module.exports.val1 = val1;
exports.val3 = val3;
exports.val2 = val2;