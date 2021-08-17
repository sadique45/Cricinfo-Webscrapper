let cp=require('child_process');
// console.log('Tring to open calculator');
// cp.execSync("calc");
// console.log("open calculator");

//cp.execSync("code");  //open vs code
// cp.execSync("start chrome https:\\www.pepcoding.com");

//os feature
let os=require("os");
console.log(os.arch());
console.log(os.platform());
console.log(os.networkInterfaces());


//file system
let fs=require('fs');
// no file->create the file  exit->replace the file
// fs.writeFileSync("abc.txt","we are happy today");

fs.appendFileSync("abc.txt", "what happen ");