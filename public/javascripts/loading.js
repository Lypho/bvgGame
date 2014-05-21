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
			s_blue_carpet_bloody: 		[128, 352, 16, 16],
			s_blue_carpet_dirty: 		[128, 0, 16, 16],
			s_blue_carpet_garbage1: 	[144, 0, 16, 16],
			s_blue_carpet_garbage2: 	[176, 0, 16, 16],
			s_cross: 					[16, 320, 16, 16],
			s_caution: 					[160, 64, 16, 16],
			s_caution_block: 			[80, 288, 16, 16],
			s_barbed_wire_v: 			[160, 448, 16, 16],
			s_barbed_wire_damaged_v:	[112, 448, 16, 16],
			s_block: 					[64, 336, 16, 16],
			s_foot_trap: 				[80, 368, 16, 16],
			s_mine: 					[112, 0, 16, 16],
			s_box: 						[32, 256, 16, 16],
			s_box_damaged: 				[32, 272, 16, 16],
			m_gray: 					[0, 80, 32, 32],
			m_gray_cracked: 			[64, 80, 32, 32],
			m_gray_dirty: 				[96, 80, 32, 32],
			m_egf: 						[32, 112, 32, 32],
			m_desk: 					[144, 384, 48, 32],
			m_block: 					[96, 320, 28, 28],
			m_block_gray: 				[0, 384, 28, 28],
			m_stove: 					[32, 385, 44, 28],
			m_barrier: 					[32, 352, 16, 32],
			m_box: 						[0, 256, 32, 32],
			m_box_damaged: 				[48, 256, 32, 32],
			m_pillar: 					[48, 208, 32, 32],
			m_pillar_damaged: 			[160, 208, 32, 32],
			l_ice_pit: 					[144, 240, 48, 48],
		});
		Crafty.sprite('/images/interface_graphics/Windows.png', {
			health_bar_red: 			[681, 918, 188, 41],
			health_red: 				[719, 861, 139, 21],
			health_bar_blue: 			[681, 1138, 188, 41],
			health_blue: 				[719, 887, 139, 21],
			health_bar_yellow: 			[681, 1098, 189, 41],
			health_yellow: 				[890, 1107, 138, 19],
			hud_bar: 					[197, 136, 681, 111],
			points_bar: 				[680, 1008, 129, 39],
		});
		Crafty.sprite('/images/game_graphics/characters.png', {
			mc_up: 						[325, 83, 16, 20],
			mc_down: 					[194, 83, 16, 20],
			mc_left: 					[238, 84, 16, 20],
			mc_right: 					[264, 84, 16, 20],
			mc_projectile: 				[75, 153, 5, 11],
			points_20: 					[169, 124, 15, 7],
			points_50: 					[118, 124, 15, 7],
			points_100: 				[32, 124, 17, 7],
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

