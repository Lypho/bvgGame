(function() {
	Crafty.scene('menu', function() {
		// creates background with specified attributes
		var bg = Crafty.e('2D, Canvas, background')
			.attr({
				x: 0,
				y: 0,
				w: 568,
				h: 320
			})

		// creates blank button with specified attributes
		var button_play2 = Crafty.e('2D, Canvas, Mouse, b_blank_black')
			.attr({
				x: bvgGame.WIDTH*0.5 - 76,
				y: 165,
				w: 200,
				h: 48
			})

		// creates play button with specified attributes
		var button_play = Crafty.e('2D, Canvas, Mouse, b_play_black')
			.attr({
				x: bvgGame.WIDTH*0.5 - 124,
				y: 165,
				w: 48,
				h: 48
			})

		// creates blank button with specified attributes
		var button_help2 = Crafty.e('2D, Canvas, Mouse, b_blank_black')
			.attr({
				x: bvgGame.WIDTH*0.5 - 76,
				y: 165 + button_play._h,
				w: 200,
				h: 48
			})

		// creates help button with specified attributes
		var button_help = Crafty.e('2D, Canvas, Mouse, b_help_black')
			.attr({
				x: bvgGame.WIDTH*0.5 - 124,
				y: 165 + button_play._h,
				w: 48,
				h: 48
			})

		// creates sound button with specified attributes
		var button_sound = Crafty.e('2D, Canvas, Mouse, b_sound_on')
			.attr({
				x: bvgGame.WIDTH - 36,
				y: bvgGame.HEIGHT - 56,
				w: 32,
				h: 32
			})

		// creates game title with css styling
		Crafty.e('2D, DOM, Text')
			.attr({
				x: 0,
				y: 80,
				w: bvgGame.WIDTH,
				h: 45
			})
			.text("Mantle of Responsibility")
			.css({
				'text-align': 'center',
			})
			.textFont({
				'size': '45px',
				'weight': 'bold'
			})
			.unselectable()

		// creates play button title with css styling
		var play_text = Crafty.e('2D, DOM, Text')
			.attr({
				x: 0,
				y: 176,
				w: bvgGame.WIDTH + button_help._w,
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
			.textColor('#FFFFFF', '0.85')
			.unselectable()

		// creates help button title with css styling
		var help_text = Crafty.e('2D, DOM, Text')
			.attr({
				x: 0,
				y: 176 + button_play._h,
				w: bvgGame.WIDTH + button_help._w,
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
			.textColor('#FFFFFF', '0.85')
			.unselectable()

		// add click events
		button_play
			.bind('MouseOver', switchPlayToYellowUI)
			.bind('MouseOut', switchPlayToBlackUI)
			.bind('MouseUp', startGame)
		button_play2
			.bind('MouseOver', switchPlayToYellowUI)
			.bind('MouseOut', switchPlayToBlackUI)
			.bind('MouseUp', startGame)
		button_help
			.bind('MouseOver', switchHelpToYellowUI)
			.bind('MouseOut', switchHelpToBlackUI)
			.bind('MouseUp', startHelp)
		button_help2
			.bind('MouseOver', switchHelpToYellowUI)
			.bind('MouseOut', switchHelpToBlackUI)
			.bind('MouseUp', startHelp)
		button_sound
			.bind('MouseUp', soundUiToggle)

		// PRIVATE FUNCTIONS
		// swaps play button images on mouse down
		function switchPlayToBlackUI() {
			// execute ui toggle on buttons
			button_play.toggleComponent('b_play_yellow', 'b_play_black')
				.attr({
					w: 48,
					h: 48
				})
			button_play2.toggleComponent('b_blank_yellow', 'b_blank_black')
				.attr({
					w: 200,
					h: 48
				})
			play_text.textColor("#FFFFFF", 0.85)
		}

		// swaps play button images on mouse up
		function switchPlayToYellowUI() {
			// execute ui toggle on buttons
			button_play.toggleComponent('b_play_black', 'b_play_yellow')
				.attr({
					w: 48,
					h: 48
				})
			button_play2.toggleComponent('b_blank_black', 'b_blank_yellow')
				.attr({
					w: 200,
					h: 48
				})
			play_text.textColor("#000000", 0.85)
		}

		// swaps help button images on mouse down
		function switchHelpToBlackUI() {
			// execute ui toggle on buttons
			button_help.toggleComponent('b_help_yellow', 'b_help_black')
				.attr({
					w: 48,
					h: 48
				})
			button_help2.toggleComponent('b_blank_yellow', 'b_blank_black')
				.attr({
					w: 200,
					h: 48
				})
			help_text.textColor("#FFFFFF", 0.85)
		}

		// swaps help button images on mouse up
		function switchHelpToYellowUI() {
			// execute ui toggle on buttons
			button_help.toggleComponent('b_help_black', 'b_help_yellow')
				.attr({
					w: 48,
					h: 48
				})
			button_help2.toggleComponent('b_blank_black', 'b_blank_yellow')
				.attr({
					w: 200,
					h: 48
				})
			help_text.textColor("#000000", 0.85)
		}

		// swaps sound button image on mouse uo
		function soundUiToggle() {
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
		}

		// switch to game scene and stop theme music
		function startGame() {
			console.log("play option selected")
			Crafty.audio.remove()
			Crafty.audio.unmute()
			Crafty.scene('game')
		}

		// switch to help scene and stop theme music
		function startHelp() {
			console.log("help option selected")
			Crafty.scene('help')
		}
	});
})();
