(function() {
	Crafty.scene('loading', function() {
		// Preload graphics and audio
		Crafty.load(
			['/images/game_graphics/characters.png'
			, '/images/game_graphics/objects.png'
			, '/images/game_graphics/tileset.png'
			, '/images/interface_graphics/Background.jpg'
			, '/images/interface_graphics/Buttons.png'
			, '/images/interface_graphics/Windows.png']
		, function() {
			Crafty.scene('menu')
		});

		Crafty.audio.add({
			menuTheme: ['/audio/starquake.mp3'],
			roundOne: ['/audio/RoundOne.mp3']
		})

		Crafty.sprite('/images/interface_graphics/Background.jpg', {
			background: [0, 0, 568, 320]
		});
		Crafty.sprite('/images/interface_graphics/Buttons.png', {
			b_blank_yellow: 			[140, 66, 139, 64],
			b_blank_black: 				[594, 66, 139, 64],
			b_play_yellow: 				[126, 267, 64, 64],
			b_play_black: 				[356, 267, 64, 64],
			b_help_yellow: 				[126, 1131, 64, 64],
			b_help_black: 				[356, 1131, 64, 64],
			b_exit_yellow: 				[459, 733, 64, 64],
			b_exit_black: 				[689, 733, 64, 64],
			b_settings_yellow: 			[459, 894, 64, 64],
			b_settings_black: 			[689, 894, 64, 64],
			b_sound_on: 				[126, 1758, 64, 64],
			b_sound_off: 				[356, 1758, 64, 64]
		});
		Crafty.sprite('/images/game_graphics/tileset.png', {
			s_green: 					[96, 432, 16, 16],
			s_gray: 					[32, 96, 16, 16],
			s_gray_dirty: 				[48, 96, 16, 16],
			s_gray_cracked: 			[176, 48, 16, 16],
			s_gray_dented: 				[160, 80, 16, 16],
			s_gray_rusty: 				[176, 96, 16, 16],
			s_darkgray: 				[112, 304, 16, 16],
			s_blue: 					[0, 304, 16, 16],
			s_blue_carpet: 				[160, 0, 16, 16],
			s_cross: 					[16, 320, 16, 16],
			s_caution: 					[160, 64, 16, 16],
			s_barbed_wire_v: 			[160, 448, 16, 16],
			s_barbed_wire_damaged_v:	[112, 448, 16, 16],
			m_gray: 					[0, 80, 32, 32],
			m_egf: 						[32, 112, 32, 32],
			m_desk: 					[144, 384, 48, 32]
		});
		Crafty.sprite('/images/interface_graphics/Windows.png', {
			health_bar_red: 			[681, 918, 188, 40],
			health_red: 				[719, 861, 139, 21],
			health_bar_blue: 			[681, 1138, 188, 40],
			health_blue: 				[719, 887, 139, 21],
			health_bar_yellow: 			[681, 1098, 188, 40],
			health_yellow: 				[889, 1106, 139, 21],
			hud_bar: 					[197, 136, 681, 111]
		});
		Crafty.sprite('/images/game_graphics/characters.png', {
			mc_up: 						[325, 83, 16, 20],
			mc_down: 					[194, 83, 16, 20],
			mc_left: 					[238, 84, 16, 20],
			mc_right: 					[264, 84, 16, 20],
			mc_projectile: 				[75, 153, 5, 11],
		});

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

