const http = require('http');
const server = http.createServer((req,res)=>{
    res.end("chal gay chal gaya");
})
server.listen(4000);