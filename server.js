/* --- create an http reouter ---*/
/* --- ---*/
/* --- possibly create a router object ---*/

var http = require(http);

var onRequest = function(request, response){

console.log(received request, ready to route);

};

http.createServer(onRequest).listen(8888);

console.log(listening at http://localhost:8888);
var http = require(http);

var onRequest = function(request, response){

console.log(received request, ready to route);

};

http.createServer(onRequest).listen(8888);

console.log(listening at http://localhost:8888);
