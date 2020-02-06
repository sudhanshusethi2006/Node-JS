var fs= require('fs');

var num=0;

 
// fs.readFile('mytext.txt','utf-8',function(err,data){
//     if(err) throw err;
//     console.log('2');
//     console.log(data);
//     num=parseInt(data);
//     num=parseInt(num)+1;
//     console.log(num);

//         });

// fs.writeFile('mytext.txt',num,function(err,data){


//     if(err) throw err;

   
// });


// fs.appendFile('mytext.txt',num+1,function(err,data){
//     if(err) throw err;

// });

fs.appendFile('db.json',JSON.stringify({'name':'james','class':'1'}),function(err,data){
    if(err) throw err;
    console.log("data added");

});


// fs.rename('mytext.txt','mytext1.txt',function(err,data){
//     if(err) throw err;

// });

// // delete the file
// fs.unlink('mytext1.txt',num,function(err,data){


// if(err) throw err;

   
// });

// //add conditions
// if(fs.exists(mytext.txt)){

// }else{

// }


