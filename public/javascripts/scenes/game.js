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

		// draw floor entities
		for(var y = 0; y < 20; y++) {
			for(var x = 0; x < 36; x++) {
				if  (x === 29) {
					Crafty.e('2D, Canvas, s_caution')
						.attr({
							x: bvgGame.SMALL_TILE_SIZE * x,
							y: bvgGame.SMALL_TILE_SIZE * y,
						})
				} else if(x > 29) {
					Crafty.e('2D, Canvas, s_darkgray')
						.origin(8, 8)
						.attr({
							x: bvgGame.SMALL_TILE_SIZE * x,
							y: bvgGame.SMALL_TILE_SIZE * y,
							rotation: -90
						})
				} else if(x < 29) {
					var rng = Crafty.math.randomInt(1, 16)
					var block_type = ''

					if (rng >= 1 && rng <= 12) {
						block_type = 's_gray'
					} else if(rng === 13) {
						block_type = 's_gray_dirty'
					} else if(rng === 14) {
						block_type = 's_gray_cracked'
					} else if(rng === 15) {
						block_type = 's_gray_dented'
					} else if(rng === 16) {
						block_type = 's_gray_rusty'
					}

					Crafty.e('2D, Canvas, '.concat(block_type))
						.attr({
							x: bvgGame.SMALL_TILE_SIZE * x,
							y: bvgGame.SMALL_TILE_SIZE * y,
						})
				}
			}
		}

		Crafty.e('2D, Canvas, m_egf')
			.origin(16, 16)
			.attr({
				x: bvgGame.SMALL_TILE_SIZE * 32,
				y: bvgGame.SMALL_TILE_SIZE * 4,
				rotation: -90
			})
		Crafty.e('2D, Canvas, m_egf')
			.origin(16, 16)
			.attr({
				x: bvgGame.SMALL_TILE_SIZE * 32,
				y: bvgGame.SMALL_TILE_SIZE * 14,
				rotation: -90
			})

		// Round One Aduio
		Crafty.audio.play('roundOne')
	})
})();