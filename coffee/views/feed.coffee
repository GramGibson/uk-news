class window.Feed

	constructor: (@feed, @stack) ->
		@page = new Page 
			top: '46px'
			id: 'page_feed'
			title: @feed.Title
		
		$('#loading').show()
		
		@back_button = $(ich.back_button {})
		@page.setLeftButton @back_button
		
		@back_button.bind 'click', =>
			@stack.pop()
		
		@refresh_button = $('<div class="refresh"><img src="refresh.png" /></div>')

		@refresh_button.bind 'click', =>
			@page.empty()
			$('#loading').show()
			store.remove(@feed.Url)
			@loadFeed()

		@page.setRightButton(@refresh_button)
		
		@loadFeed()

		$('#page_feed .row').live 'click', (e) =>
			if $(e.currentTarget).data('feed_item')
				feed_item = new FeedItem(@feed.Title, $(e.currentTarget).data('feed_item'), @stack)					
				@stack.push(feed_item)
	
	showFeed: (data) =>
		@page.append $(ich.table_row { Title: item.title, Detail: @formatDate(item.pubDate) }).data('feed_item', item) for item in data.itemsElement
		$('#loading').hide()
	
	loadFeed: =>
		if store.get(@feed.Url)?
			@showFeed(JSON.parse(store.get(@feed.Url)))
			return
			
		socket.emit 'get', {
			uri: @feed.Url,
			channel: 'feed'
		}

		socket.on 'feed', (response) =>
			data = response.data
			
			if !store.get(@feed.Url)?
				store.set(@feed.Url, JSON.stringify(data))
				
			@showFeed(data)

	formatDate: (date) ->
		date = new Date(date)
		return "#{date.getMonth()+1}/#{date.getDate()}/#{date.getFullYear()}"