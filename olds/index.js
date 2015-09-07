var restify = require('restify'),
    apiTaks = require('./api/tasks');

var server = restify.createServer({
  name: 'tasks-mvc-demos',
  version: '1.0.0'
});

// Middleware
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.gzipResponse());


// API handlers
apiTaks(server);

// Static files handlers
server.get(/\/(css\|js\|images)\/?.*/, restify.serveStatic({
  directory: './static/'
}));

server.get(/\//, restify.serveStatic({
  directory: './static',
  'default': 'index.html'
}));


// start server
server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
