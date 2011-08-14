$ ->
	window.socket = io.connect 'http://localhost:9000/'
	root = new Feeds
	root.init()