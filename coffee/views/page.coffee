class window.Page
	constructor: (args) ->
		@id = args.id
		@page = ich.page { Id: args.id, Stack: args.stack, Title: args.title }
		$(@page).find('.wrapper').css { 'top': args.top, 'bottom': args.bottom || 0 }
	append: (content) ->
		@page.find('.content').append content
	appendToPage: (content) ->
		@page.append content
	empty: ->
		@page.find('.content').empty()
	setLeftButton: (content) ->
		$(@page).find('.header_left').append content
	setRightButton: (content) ->
		$(@page).find('.header_right').append content