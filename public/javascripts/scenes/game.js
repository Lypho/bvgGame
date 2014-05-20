(function() {
	Crafty.scene('game', function() {
		console.log('--GAME SCENE STARTED--')

		var round = 0
		var score = 0
		var current_phase = 'battle'
		var player;

		// draw floor entities
		for(var y = 2; y < 20; y++) {
			for(var x = 0; x < 36; x++) {
				if  (x === 29) {
					Crafty.e('2D, Canvas, s_caution')
						.attr({
							x: bvgGame.TILE_SIZE * x,
							y: bvgGame.TILE_SIZE * y,
							z: 1
						})
				} else if(x > 29 && (x % 2 === 0) && (y % 2 === 0)) {
					Crafty.e('2D, Canvas, m_gray')
						.origin(16, 16)
						.attr({
							x: bvgGame.TILE_SIZE * x,
							y: bvgGame.TILE_SIZE * y,
							z: 1,
							rotation: -90
						})
				} else if(x < 29) {
					Crafty.e('2D, Canvas, s_blue_carpet')
						.origin(8,8)
						.attr({
							x: bvgGame.TILE_SIZE * x,
							y: bvgGame.TILE_SIZE * y,
							z: 1,
							rotation: Crafty.math.randomElementOfArray([0,90,180,270])
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
				z: 1,
				rotation: -90
			})
		Crafty.e('2D, Canvas, m_egf')
			.origin(16, 16)
			.attr({
				x: bvgGame.TILE_SIZE * 32,
				y: bvgGame.TILE_SIZE * 16,
				z: 1,
				rotation: -90
			})

		// draw main base
		Crafty.e('2D, Canvas, m_desk')
			.origin(24, 16)
			.attr({
				x: bvgGame.TILE_SIZE * 32 + 16,
				y: bvgGame.TILE_SIZE * 10,
				z: 10,
				rotation: 90
			})

		// draw default barbed wire
		for (var y = 2; y < 20; y++) {
			var x = 0

			if (y >= 6 && y <= 14) {
				x = 23
			} else {
				x = 26
			}

			Crafty.e('2D, Canvas, s_barbed_wire_damaged_v')
				.attr({
					x: bvgGame.TILE_SIZE * x,
					y: bvgGame.TILE_SIZE * y,
					z: 2
				})
		};
		// draw HUD
		Crafty.e('2D, Canvas, hud_bar')
			.attr({
				x: 0,
				y: 0,
				w: 179,
				h: 34
			})
		Crafty.e('2D, Canvas, hud_bar')
			.attr({
				x: 178,
				y: 0,
				w: 179,
				h: 34
			})
		Crafty.e('2D, Canvas, hud_bar')
			.attr({
				x: 357,
				y: 0,
				w: 179,
				h: 34
			})
		var button_settings = Crafty.e('2D, Canvas, Mouse, b_settings_black')
			.attr({
				x: 536,
				y: 0,
				w: 32,
				h: 32
			})
			.bind('MouseOver', switchSettingsToYellowUI)
			.bind('MouseOut', switchSettingsToBlackUI)
			.bind('MouseUp', openSettingsMenu)
		Crafty.e('2D, Canvas, health_bar_yellow')
			.attr({
				x: 450,
				y: 292,
				w: 114,
				h: 24,
				z: 100
			})
		Crafty.e('2D, Canvas, health_yellow')
			.attr({
				x: 473,
				y: 298,
				w: 85,
				h: 13,
				z: 100
			})


		player = Crafty.e('2D, Canvas, Player, Collision, Fourway, Keyboard, mc_left')
			.attr({
				x: Crafty.stage.elem.clientWidth/2,
				y: Crafty.stage.elem.clientHeight/2,
				z: 50
			})
			.fourway(2)
			.bind('NewDirection', function(dir) {
				console.log(dir.x + ":" + dir.y)

				player.removeComponent('mc_left')
				player.removeComponent('mc_right')
				player.removeComponent('mc_down')
				player.removeComponent('mc_up')

				if (dir.x < 0) {
					player.addComponent('mc_left')
					player._direction = 'left'
				} else if (dir.x > 0) {
					player.addComponent('mc_right')
					player._direction = 'right'
				} else if (dir.y < 0) {
					player.addComponent('mc_up')
					player._direction = 'up'
				} else if (dir.y > 0) {
					player.addComponent('mc_down')
					player._direction = 'down'
				}
			})

		// Round One Aduio
		Crafty.audio.play('roundOne')

		// swaps settings button images on mouse over
		function switchSettingsToBlackUI() {
			button_settings.toggleComponent('b_settings_yellow', 'b_settings_black')
				.attr({
					w: 32,
					h: 32
				})
		}

		// swaps settings button images on mouse out
		function switchSettingsToYellowUI() {
			button_settings.toggleComponent('b_settings_black', 'b_settings_yellow')
				.attr({
					w: 32,
					h: 32
				})
		}

		// Opens Settings Menu
		function openSettingsMenu() {

		}
	})
})();