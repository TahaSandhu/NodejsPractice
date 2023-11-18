// global modules means import karna ki zaroorat nahi hoti in ko

console.log("The console is built in so its core module");
console.log(__dirname)  // tell us directory name

// non global modules 

 const fs = require('fs');
 fs.writeFileSync("Note.txt","Automatic create file")

