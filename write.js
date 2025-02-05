var fs = require("fs")
fs.writeFile("date.js",'console.log("05-02-2025")', function(err){
    console.log("Successfully saved!")
})