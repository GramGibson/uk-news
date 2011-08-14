class window.Stack

	constructor: (id) ->
		@el = ich.stack { Id: id }
		@pages = []
		$('#window').append @el
		
	push: (page) ->	
		if @pages.indexOf(page.id || page.page.id) != -1
			return
		
		@pages.push(page.id || page.page.id)
		
		if @el.find('div').not(':hidden').length == 0
			@el.append page.page
			return
		
		@slideTo(@el.find('.page:last-child'), -100)

		$(page.page.page).css('left', '100%')
		@el.append page.page.page
		
		@slideTo(@el.find('.page:last-child'), 0)
	
	pop: ->
		@pages.splice(@pages.indexOf(@pages.length), 1)
		last_child = @el.find('.page:last-child')
		@slideTo(last_child.prev(), 0)	
		@slideTo(last_child, 100, => last_child.remove())
	
	slideTo: (el, position, callback) ->
		el.animate
			left: "#{position}%"
		, 300, ->
			if typeof callback == 'function'
				callback()