$ ->
	window.socket = io.connect 'http://localhost:9000/'
	root = new Feeds
	root.init()
	
	window.store = (->
	   set: (k,v) -> localStorage.setItem(k, v)
	   get: (k) -> localStorage.getItem(k)
	   remove: (k) -> localStorage.removeItem(k)
	   clear: -> localStorage.clear()
	)()
	
	#store.clear()