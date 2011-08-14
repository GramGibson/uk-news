$ ->
	window.socket = io.connect 'http://192.168.1.82:6969/'
	root = new Feeds
	root.init()