var StaticServer = require('static-server');
var server = new StaticServer({
    rootPath: './editsrc/',            // required, the root of the server file tree
    port: 9080          // required, the port to listen
   
    
  });

  server.start(function () {
    console.log('Server listening to start port 9080', server.port);
  });