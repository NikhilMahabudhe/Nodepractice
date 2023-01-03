const fs = require("fs");
const path = require("path");

const dirpath = "C:\Users\niksm\OneDrive\Desktop\letsupgreadde\node\file system and url core module";
// fs.readdir(__dirname,(err,file)=>{
//     if(err){
//         console.log(err);

//     }else{
//         file.forEach(element => {
//             if(path.extname("element")==".txt"){
//                 console.log(element);

//             }
//         });

//     }

// })
fs.readdir(dirpath,(err,files)=>{
    if(err){

        console.log(err);

    }else{
        var filelist = files.filter((element)=>path.extname(element).toLowerCase()===".txt")


    }
    console.log(filelist);
})
 fs.mkdir(path.join(__dirname,"batch")); 