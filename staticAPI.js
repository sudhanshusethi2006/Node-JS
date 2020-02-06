var http= require('http');

var fs= require('fs');

var server= http.createServer(function(req,res){
        fs.readFile('mytext1.txt','utf-8', function(err,data){
                    if(err) throw err;

                    res.write(data);
                    res.end();


        })
});


server.listen(5000);