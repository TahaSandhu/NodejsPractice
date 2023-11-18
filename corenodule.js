// global modules means import karna ki zaroorat nahi hoti in ko
console.log("The console is built in so its core module");
// non global modules 
const fs = require('fs');
fs.writeFileSync("Note.txt","Automatic create file")