(function() {
	Crafty.scene('menu', function() {
		Crafty.sprite('/images/interface_graphics/Background.jpg', {background: [0, 0, 6674, 3754]});
		Crafty.sprite('/images/interface_graphics/Buttons.png', {b_blank: [560, 262, 556, 256]});
		Crafty.sprite('/images/interface_graphics/Buttons.png'
			, {
				b_play: [506, 1069, 256, 256],
				b_settings: [1837, 3578, 256, 256]

			});

		var bg = Crafty.e('2D, Canvas, background')
			.attr({
				x: 0,
				y: 0,
				w: 568,
				h: 320
			})

		var button_blank = Crafty.e('2D, Canvas, b_blank')
			.attr({
				x: Crafty.stage.elem.clientWidth*0.5 - 76,
				y: 165,
				w: 200,
				h: 48
			})

		var button_play = Crafty.e('2D, Canvas, b_play')
			.attr({
				x: Crafty.stage.elem.clientWidth*0.5 - 124,
				y: 165,
				w: 48,
				h: 48
			})

		var button_blank = Crafty.e('2D, Canvas, b_blank')
			.attr({
				x: Crafty.stage.elem.clientWidth*0.5 - 76,
				y: 213,
				w: 200,
				h: 48
			})

		var button_settings = Crafty.e('2D, Canvas, b_settings')
			.attr({
				x: Crafty.stage.elem.clientWidth*0.5 - 124,
				y: 213,
				w: 48,
				h: 48
			})

		Crafty.e('2D, DOM, Text')
			.attr({
				x: 0,
				y: 40,
				w: Crafty.stage.elem.clientWidth,
				h: 80
			})
			.text("bvgGame")
			.css({
				'text-align': 'center'
			})
			.textFont({
				'size': '80px'
			})

		console.log(this._w)

		Crafty.audio.play('menuTheme')


	});
})();
