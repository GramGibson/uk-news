class window.Stack

	constructor: (id) ->
		@el = ich.stack { Id: id }
		$('#window').append @el
		
	push: (page) ->	
		if @el.find('div').not(':hidden').length == 0
			@el.append page.page
			return
		
		@slideTo(@el.find('.page:last-child'), -100)

		$(page.page.page).css('left', '100%')
		@el.append page.page.page
		
		@slideTo(@el.find('.page:last-child'), 0)
	
	pop: ->
		last_child = @el.find('.page:last-child')
		@slideTo(last_child.prev(), 0)	
		@slideTo(last_child, 100, => last_child.remove())
	
	slideTo: (el, position, callback) ->
		el.animate
			left: "#{position}%"
		, 300, ->
			if typeof callback == 'function'
				callback()