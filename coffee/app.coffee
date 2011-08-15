express = require 'express'
request = require 'request'
NodePie = require 'nodepie'

app = express.createServer()
io = require('socket.io').listen(app)

app.configure 'development', ->
    app.use express.static __dirname + '/views'
	
app.listen 9000

#### SOCKET.IO

io.enable('browser client minification');
io.sockets.on 'connection', (socket) ->

	# generic GET handler
	socket.on 'get', (req) ->
		request {
			uri: req.uri
		}, (error, response, body) ->
			feed = new NodePie(body)
			feed.init()
			socket.emit req.channel, { data: feed }