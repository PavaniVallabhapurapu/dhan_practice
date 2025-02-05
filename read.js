var fs = require("fs")
fs.readFile('cal.js','utf-8',function(err,data){
    console.log(data)
})