var http = require("http");

var portOne = 7000

var portTwo = 7500

function handleRequestOne(request, response){

    var responses = ["you're so pretty","i love you're coding","you have so much skill"]

    var rand = responses[Math.floor(Math.random() * responses.length)];

    response.end(rand);
};

function handleRequestTwo(request, response){
    var responses = ["you're so ugly","i hate you're coding","you dont have much skill"]

    var rand = responses[Math.floor(Math.random() * responses.length)];

    response.end(rand);
};

var serverOne = http.createServer(handleRequestOne);

var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(portOne, function() {
    console.log("Server listening on: http://localhost:%s" ,portOne);
  });

serverTwo.listen(portTwo, function() {
    console.log("Server listening on: http://localhost:%s" ,portTwo);
  });
  

