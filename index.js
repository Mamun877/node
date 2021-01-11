var fs = require('fs');
var http = require('http');
var hostname = "localhost";
var port = 7000;

var server = http.createServer(function(req,res){

    if(req.url=="/"){
        let data = fs.readFileSync('home.html','utf8');
        res.end(data);


    }
    else if(req.url=="/contract"){
        let data = fs.readFileSync('contract.html','utf8');
        res.end(data);
        
    }

    else if(req.url=="/term"){
        let data = fs.readFileSync('term.html','utf8');
        res.end(data);
        
    }
    else if(req.url=="/about"){
        let data = fs.readFileSync('about.html','utf8');
        res.end(data);
        
    }


});

server.listen(port,hostname,function(){

console.log(`Server is running successfully. The server is http://${hostname}:${port}`);
});