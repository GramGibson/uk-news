$ ->
	window.socket = io.connect 'http://localhost:6969/'
	root = new Feeds
	root.init()