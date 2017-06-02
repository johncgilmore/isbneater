# the application stack:

1. I want to serve web pages, so I need an `http` server

  `var http = require('http');`

  `var onRequest = function(request, response){`

  `console.log('received request, ready to route');`

  `  };`

  `http.createServer(onRequest).listen(8888);`

  `console.log('listening at http://localhost:8888');`


2. I need to serve different pages depending on which are requested, so I need a router to map request to handlers
    a.The router should treat any post data properly?
3. I'll need routeHandlers for routes
4. I'll need some view logic the route handlers can use to send content to the browsers
5. The app will then need some API logic to route requests to proper apis
6. the app will need to make requests and handle responses from those apis
7. the app will need to serve that information up so I'll want to use some templates
