(function() {
	Crafty.scene('menu', function() {
		Crafty.sprite('/images/interface_graphics/Background.jpg', {background: [0, 0, 6674, 3754]});
		Crafty.sprite('/images/interface_graphics/Buttons.png'
			, {
				// (506px,1069px) is position of 1st column first icon
				// (1837px,1069px) is position of 5th column first icon
				b_blank: [560, 262, 556, 256],
				b_play: [506, 1069, 256, 256],
				b_help: [506, 4524, 256, 256],
				b_sound_on: [506, 7031, 256, 256],
				b_sound_off: [1424, 7031, 256, 256]

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
		var button_play2 = Crafty.e('2D, Canvas, Mouse, b_blank')
			.attr({
				x: Crafty.stage.elem.clientWidth*0.5 - 76,
				y: 165,
				w: 200,
				h: 48
			})

		// creates play button with specified attributes
		var button_play = Crafty.e('2D, Canvas, Mouse, b_play')
			.attr({
				x: Crafty.stage.elem.clientWidth*0.5 - 124,
				y: 165,
				w: 48,
				h: 48
			})

		// creates blank button with specified attributes
		var button_help2 = Crafty.e('2D, Canvas, Mouse, b_blank')
			.attr({
				x: Crafty.stage.elem.clientWidth*0.5 - 76,
				y: 165 + button_play._h,
				w: 200,
				h: 48
			})

		// creates help button with specified attributes
		var button_help = Crafty.e('2D, Canvas, Mouse, b_help')
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
		Crafty.e('2D, DOM, Text')
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

		// creates play button title with css styling
		Crafty.e('2D, DOM, Text')
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
			.bind('MouseUp', function(e) {
				console.log("help option selected")
			})
		button_help2
			.bind('MouseUp', function(e) {
				console.log("help option selected")
			})
		button_play
			.bind('MouseUp', function(e) {
				console.log("play option selected")
			})
		button_play2
			.bind('MouseUp', function(e) {
				console.log("play option selected")
			})
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

		Crafty.audio.play('menuTheme')


	});
})();
