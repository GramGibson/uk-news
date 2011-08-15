(function() {
  var NodePie, app, express, io, request;
  express = require('express');
  request = require('request');
  NodePie = require('nodepie');
  app = express.createServer();
  io = require('socket.io').listen(app);
  app.configure('development', function() {
    return app.use(express.static(__dirname + '/views'));
  });
  app.listen(9000);
  io.enable('browser client minification');
  io.sockets.on('connection', function(socket) {
    return socket.on('get', function(req) {
      return request({
        uri: req.uri
      }, function(error, response, body) {
        var feed;
        feed = new NodePie(body);
        feed.init();
        return socket.emit(req.channel, {
          data: feed
        });
      });
    });
  });
}).call(this);
