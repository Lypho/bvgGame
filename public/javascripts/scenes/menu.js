(function() {
	Crafty.scene('menu', function() {
		Crafty.sprite('/images/interface_graphics/Background.jpg', {background: [0, 0, 568, 320]});
		Crafty.sprite('/images/interface_graphics/Buttons.png'
			, {
				// (506px,1069px) is position of 1st column first icon
				// (1837px,1069px) is position of 5th column first icon
				b_blank_yellow: [140, 66, 139, 64],
				b_blank_black: [594, 66, 139, 64],
				b_play_yellow: [126, 267, 64, 64],
				b_play_black: [356, 267, 64, 64],
				b_help_yellow: [126, 1131, 64, 64],
				b_help_black: [356, 1131, 64, 64],
				b_sound_on: [126, 1758, 64, 64],
				b_sound_off: [356, 1758, 64, 64]

			});

		// creates background with specified attributes
		var bg = Crafty.e('2D, Canvas, background')
			.attr({
				x: 0,
				y: 0,
				w: 568,
				h: 320
			})

		// creates blank button with specified attributes
		var button_play2 = Crafty.e('2D, Canvas, Mouse, b_blank_yellow')
			.attr({
				x: Crafty.stage.elem.clientWidth*0.5 - 76,
				y: 165,
				w: 200,
				h: 48
			})

		// creates play button with specified attributes
		var button_play = Crafty.e('2D, Canvas, Mouse, b_play_yellow')
			.attr({
				x: Crafty.stage.elem.clientWidth*0.5 - 124,
				y: 165,
				w: 48,
				h: 48
			})

		// creates blank button with specified attributes
		var button_help2 = Crafty.e('2D, Canvas, Mouse, b_blank_yellow')
			.attr({
				x: Crafty.stage.elem.clientWidth*0.5 - 76,
				y: 165 + button_play._h,
				w: 200,
				h: 48
			})

		// creates help button with specified attributes
		var button_help = Crafty.e('2D, Canvas, Mouse, b_help_yellow')
			.attr({
				x: Crafty.stage.elem.clientWidth*0.5 - 124,
				y: 165 + button_play._h,
				w: 48,
				h: 48
			})

		// creates sound button with specified attributes
		var button_sound = Crafty.e('2D, Canvas, Mouse, b_sound_on')
			.attr({
				x: Crafty.stage.elem.clientWidth - 36,
				y: Crafty.stage.elem.clientHeight - 56,
				w: 32,
				h: 32
			})

		// creates game title with css styling
		Crafty.e('2D, DOM, Text')
			.attr({
				x: 0,
				y: 40,
				w: Crafty.stage.elem.clientWidth,
				h: 80
			})
			.text("bvgGame")
			.css({
				'text-align': 'center',
			})
			.textFont({
				'size': '80px',
				'weight': 'bold'
			})
			.unselectable()

		// creates play button title with css styling
		var play_text = Crafty.e('2D, DOM, Text')
			.attr({
				x: 0,
				y: 176,
				w: Crafty.stage.elem.clientWidth + button_help._w,
				h: 24
			})
			.text("PLAY")
			.css({
				'text-align': 'center',
			})
			.textFont({
				'size': '24px',
				'weight': 'bold'
			})
			.textColor('#000000', '0.85')
			.unselectable()

		// creates help button title with css styling
		var help_text = Crafty.e('2D, DOM, Text')
			.attr({
				x: 0,
				y: 176 + button_play._h,
				w: Crafty.stage.elem.clientWidth + button_help._w,
				h: 24
			})
			.text("HELP")
			.css({
				'text-align': 'center',
			})
			.textFont({
				'size': '24px',
				'weight': 'bold'
			})
			.textColor('#000000', '0.85')
			.unselectable()

		// add click events
		button_help
			.bind('MouseDown', function() { mainButtonUiToggle('help', 'down') })
			.bind('MouseUp', function() { mainButtonUiToggle('help', 'up') })
		button_help2
			.bind('MouseDown', function() { mainButtonUiToggle('help', 'down') })
			.bind('MouseUp', function() { mainButtonUiToggle('help', 'up') })
		button_play
			.bind('MouseDown', function() { mainButtonUiToggle('play', 'down') })
			.bind('MouseUp', function() { mainButtonUiToggle('play', 'up') })
		button_play2
			.bind('MouseDown', function() { mainButtonUiToggle('play', 'down') })
			.bind('MouseUp', function() { mainButtonUiToggle('play', 'up') })
		button_sound
			.bind('MouseUp', function(e) {
				if(button_sound.has("b_sound_on")) {
					button_sound.toggleComponent("b_sound_on", "b_sound_off")
					.attr({w: 32, h: 32})
					Crafty.audio.mute()
					console.log("sound muted")
				} else {
					button_sound.toggleComponent("b_sound_off", "b_sound_on")
					.attr({w: 32, h: 32})
					Crafty.audio.unmute()
					console.log("sound unmuted")
				}
			})

		// Auto-play main theme
		Crafty.audio.play('menuTheme', 0.6)

		// Private Functions
		function mainButtonUiToggle(buttonType, direction) {
			var c1Type = ''
			var c2Type = ''
			var c1Color = ''
			var c2Color = ''
			var currentEntity
			var currentEntity2
			var textEntity

			// set first half of component name and current entity
			if (buttonType === 'play') {
				c1Type = 'b_play_'
				c2Type = 'b_play_'
				currentEntity = button_play
				currentEntity2 = button_play2
				textEntity = play_text
			} else if(buttonType === 'help') {
				c1Type = 'b_help_'
				c2Type = 'b_help_'
				currentEntity = button_help
				currentEntity2 = button_help2
				textEntity = help_text
			}

			// set last half of component name
			if (direction === 'down') {
				c1Color = 'yellow'
				c2Color = 'black'
			} else if(direction === 'up') {
				c1Color = 'black'
				c2Color = 'yellow'
			}

			// execute ui toggle on buttons
			currentEntity.toggleComponent(c1Type+c1Color, c2Type+c2Color)
				.attr({
					w: 48,
					h: 48
				})
			currentEntity2.toggleComponent('b_blank_'.concat(c1Color), 'b_blank_'.concat(c2Color))
				.attr({
					w: 200,
					h: 48
				})

			// switch DOM text based on current state
			if (c1Color === 'yellow') {
				textEntity.textColor("#FFFFFF", 0.85)
			} else if(c1Color === 'black') {
				textEntity.textColor("#000000", 0.85)
			}

		}




	});
})();
