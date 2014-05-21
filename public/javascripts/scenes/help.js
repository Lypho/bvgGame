(function() {
	Crafty.scene('help', function() {
		console.log('--HELP SCENE STARTED--')

		var page_index = 0
		var text_title = ['Controls', 'Buying Items']
		var text_content = ['Movement -> WASD Shoot -> SPACE', 'Click an item in the top menu to purchase it using your score as currency. That item will then spawn in the center of the stage. You can then drag the item to your preferred location.']
		var text_size = ['40px', '25px']

		// background
		Crafty.e('2D, Canvas, help_box')
			.attr({
				x: 0,
				y: 0,
				w: 568,
				h: 320
			})
		// Title
		var title = Crafty.e('2D, DOM, Text')
			.attr({
				x: 0,
				y: 8,
				w: bvgGame.WIDTH,
				h: 20,
			})
			.text("Controls")
			.css({
				'text-align': 'center',
			})
			.textFont({
				'size': '20px',
				'weight': 'bold'
			})
			.unselectable()
		// Content
		var content = Crafty.e('2D, DOM, Text')
			.attr({
				x: 50,
				y: 80,
				w: 474,
				h: 164,
			})
			.text("Movement -> WASD Shoot -> SPACE")
			.css({
				'text-align': 'center',
			})
			.textFont({
				'size': '40px',
				'weight': 'bold'
			})
			.unselectable()
		// back arrow
		var left_arrow = Crafty.e('2D, Canvas, Mouse, b_left_arrow_black')
			.attr({
				x: 45,
				y: bvgGame.HEIGHT - 38,
				w: 32,
				h: 32
			})
			.bind('MouseOver', switchLeftToYellowUI)
			.bind('MouseOut', switchLeftToBlackUI)
			.bind('MouseUp', prevPage)
		// next arrow
		var right_arrow = Crafty.e('2D, Canvas, Mouse, b_right_arrow_black')
			.attr({
				x: bvgGame.WIDTH - 75,
				y: bvgGame.HEIGHT - 38,
				w: 32,
				h: 32
			})
			.bind('MouseOver', switchRightToYellowUI)
			.bind('MouseOut', switchRightToBlackUI)
			.bind('MouseUp', nextPage)

		// UI swapping functions
		function switchLeftToBlackUI() {
			left_arrow.toggleComponent('b_left_arrow_black', 'b_left_arrow_yellow')
				.attr({
					w: 32,
					h: 32
				})
		}
		function switchLeftToYellowUI() {
			left_arrow.toggleComponent('b_left_arrow_yellow', 'b_left_arrow_black')
				.attr({
					w: 32,
					h: 32
				})
		}

		// swaps play button images on mouse up
		function switchRightToBlackUI() {
			right_arrow.toggleComponent('b_right_arrow_black', 'b_right_arrow_yellow')
				.attr({
					w: 32,
					h: 32
				})
		}
		function switchRightToYellowUI() {
			right_arrow.toggleComponent('b_right_arrow_yellow', 'b_right_arrow_black')
				.attr({
					w: 32,
					h: 32
				})
		}

		// select Right Arrow
		function nextPage(){
			if(page_index === 1) {
				console.log("play option selected from help")
				Crafty.audio.remove()
				Crafty.audio.unmute()
				Crafty.scene('game')
			}
			page_index += 1
			title.text(text_title[page_index])
			content.text(text_content[page_index])
			content.textFont({'size': text_size[page_index]})
		}

		// select Left Arrow
		function prevPage(){
			if(page_index === 0) {
				Crafty.scene('menu')
			}
			page_index -= 1
			title.text(text_title[page_index])
			content.text(text_content[page_index])
			content.textFont({'size': text_size[page_index]})
		}
	})
})();