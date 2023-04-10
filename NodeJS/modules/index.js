const { printName, lastName } = require("./printname");
const os = require("os");

console.log(os.type());

printName(`Lincoln ${lastName}`);
