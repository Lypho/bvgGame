(function() {
	Crafty.scene('loading', function() {
		// Preload graphics and audio
		Crafty.load(['/images/game_graphics/characters.png'
			, '/images/game_graphics/objects.png'
			, '/images/game_graphics/tileset.png'
			, '/images/interface_graphics/Background.jpg'
			, '/images/interface_graphics/Buttons.png'
			, '/images/interface_graphics/Windows.png']
		, function() {
			// Auto-play main theme
			Crafty.audio.play('menuTheme', 1, 0.4)
			Crafty.scene('menu')
		});

		Crafty.audio.add({
			menuTheme: ['/audio/starquake.mp3'],
			roundOne: ['/audio/RoundOne.mp3']
		})

		// Display loading text
		Crafty.e('2D, DOM, Text')
		.attr({
			w: Crafty.stage.elem.clientWidth,
			h: 20,
			x: 0,
			y: 120
		})
		.text('LOADING...')
		.css({
			'text-align': 'center'
		})
		.textFont({
			'size': '30px'
		});



	});
})();

