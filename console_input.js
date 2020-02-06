var user_input= process.stdin;
user_input.setEncoding('utf-8');


console.log("Enter your name ..");


// stream of data with a socket
user_input.on('data', function(data){

    console.log("Hello " + data + " Welcome");

})