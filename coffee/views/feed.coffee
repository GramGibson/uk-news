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
		
		socket.emit 'get', {
			uri: @feed.Url,
			channel: 'feed'
		}

		socket.on 'feed', (response) =>
			data = response.data

			@page.append $(ich.table_row { Title: item.title, Detail: @formatDate(item.pubDate) }).data('feed_item', item) for item in data.itemsElement
			
			sliding = false
			
			$('.row').bind 'click', (e) =>
				if !sliding
					sliding = true
					feed_item = new FeedItem(@feed.Title, $(e.currentTarget).data('feed_item'), @stack)
					@stack.push(feed_item)
					setTimeout ->
						sliding = false
					, 1000
			
			$('#loading').hide()

	formatDate: (date) ->
		date = new Date(date)
		return "#{date.getMonth()+1}/#{date.getDate()}/#{date.getFullYear()}"