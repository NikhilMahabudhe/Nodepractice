const fs = require('fs');
fs.open("nikhil.txt","w",()=>{
    if(err){
        console.log(err);

    }else{
        console.log("done");
    }
})