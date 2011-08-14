class window.FeedItem

	constructor: (@feed_title, @feed_item, @stack) ->
		@page = new Page 
			top: '46px'
			id: 'page_feed_item'
			title: @feed_title
		
		$('#loading').show()
		
		@back_button = $(ich.back_button {})
		@page.setLeftButton @back_button
		
		@back_button.bind 'click', =>
			@stack.pop()

		@page.append $("<h4>#{@feed_item.title}</h4>")
		
		div = $('<div class="padded_content" />')
		div.append @feed_item.description
		
		div.bind 'click', (e) ->
			e.preventDefault()
		
		@page.append div
			
		$('#loading').hide()
		
		setTimeout ->
			div.unbind()
		, 1000