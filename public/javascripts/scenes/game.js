(function() {
	Crafty.scene('game', function() {
		console.log('--GAME SCENE STARTED--')
		Crafty.sprite('/images/game_graphics/tileset.png'
			, {
				s_green: [96, 432, 16, 16],
				s_gray: [32, 96, 16, 16],
				s_gray_dirty: [48, 96, 16, 16],
				s_gray_cracked: [176, 48, 16, 16],
				s_gray_dented: [160, 80, 16, 16],
				s_gray_rusty: [176, 96, 16, 16],
				s_darkgray: [112, 304, 16, 16],
				s_blue: [0, 304, 16, 16],
				s_blue_carpet: [160, 0, 16, 16],
				s_cross: [16, 320, 16, 16],
				s_caution: [160, 64, 16, 16],
				m_gray: [0, 80, 32, 32],
				m_egf: [32, 112, 32, 32]
			});
		Crafty.sprite('/images/interface_graphics/Windows.png'
			, {
				health_bar: [681, 918, 188, 40],
				health: [719, 861, 139, 21],
				hud_bar: [197, 136, 720, 111]
			});

		// draw floor entities
		for(var y = 2; y < 20; y++) {
			for(var x = 0; x < 36; x++) {
				if  (x === 29) {
					Crafty.e('2D, Canvas, s_caution')
						.attr({
							x: bvgGame.TILE_SIZE * x,
							y: bvgGame.TILE_SIZE * y,
						})
				} else if(x > 29 && (x % 2 === 0) && (y % 2 === 0)) {
					Crafty.e('2D, Canvas, m_gray')
						.origin(16, 16)
						.attr({
							x: bvgGame.TILE_SIZE * x,
							y: bvgGame.TILE_SIZE * y,
							rotation: -90
						})
				} else if(x < 29) {
					Crafty.e('2D, Canvas, s_blue_carpet')
						.attr({
							x: bvgGame.TILE_SIZE * x,
							y: bvgGame.TILE_SIZE * y,
						})
				}
			}
		}

		// draw EGF logos
		Crafty.e('2D, Canvas, m_egf')
			.origin(16, 16)
			.attr({
				x: bvgGame.TILE_SIZE * 32,
				y: bvgGame.TILE_SIZE * 4,
				rotation: -90
			})
		Crafty.e('2D, Canvas, m_egf')
			.origin(16, 16)
			.attr({
				x: bvgGame.TILE_SIZE * 32,
				y: bvgGame.TILE_SIZE * 16,
				rotation: -90
			})

		// draw HUD
		Crafty.e('2D, Canvas, hud_bar')
			.attr({
				x: 0,
				y: 0,
				w: 189,
				h: 32
			})
		Crafty.e('2D, Canvas, hud_bar')
			.attr({
				x: 189,
				y: 0,
				w: 190,
				h: 32
			})
		Crafty.e('2D, Canvas, hud_bar')
			.attr({
				x: 379,
				y: 0,
				w: 189,
				h: 32
			})
		Crafty.e('2D, Canvas, health_bar')
			.attr({
				x: 450,
				y: 292,
				w: 114,
				h: 24,
				z: 9000
			})
		Crafty.e('2D, Canvas, health')
			.attr({
				x: 473,
				y: 298,
				w: 85,
				h: 13,
				z: 9000
			})

		// Round One Aduio
		Crafty.audio.play('roundOne')
	})
})();