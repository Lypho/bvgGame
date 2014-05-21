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

		// draw default barbed wire
		for (var y = 2; y < 20; y++) {
			var x = 0

			if (y >= 6 && y <= 14) {
				x = 21
			} else {
				x = 26
			}

			Crafty.e('2D, Canvas, Collision, Obstacle, Cover, s_barbed_wire_v')
				.attr({
					x: bvgGame.TILE_SIZE * x,
					y: bvgGame.TILE_SIZE * y,
					z: 2,
				})
				.collision([5,2], [12,2], [12,14], [5,14])
		};

		// random junk
		Crafty.e('2D, Canvas, Collision, Obstacle, m_desk')
			.origin(24, 16)
			.attr({
				x: bvgGame.TILE_SIZE * 32 + 16,
				y: bvgGame.TILE_SIZE * 10,
				z: 10,
				rotation: 90,
			})
			.setHealth(200)
			.collision([3,0], [42,0], [42,28], [3,28])
		Crafty.e('2D, Canvas, Collision, Obstacle, m_box')
			.origin(14,14)
			.attr({
				x: bvgGame.TILE_SIZE * 15,
				y: bvgGame.TILE_SIZE * 5,
				z: 2,
				rotation: 90,
			})
			.collision([0,0], [25,0], [25,25], [0,25])
			.setHealth(100)
		Crafty.e('2D, Canvas, Collision, Obstacle, m_box')
			.origin(14,14)
			.attr({
				x: 212,
				y: bvgGame.TILE_SIZE * 5,
				z: 2,
				rotation: 90,
			})
			.collision([0,0], [25,0], [25,25], [0,25])
			.setHealth(100)
		Crafty.e('2D, Canvas, Collision, Obstacle, m_box')
			.origin(14,14)
			.attr({
				x: 184,
				y: bvgGame.TILE_SIZE * 5,
				z: 2,
				rotation: 90,
			})
			.collision([0,0], [25,0], [25,25], [0,25])
			.setHealth(100)
		Crafty.e('2D, Canvas, Obstacle, s_box')
			.origin(8,8)
			.attr({
				x: bvgGame.TILE_SIZE * 12,
				y: bvgGame.TILE_SIZE * 10,
				z: 2,
				rotation: 90
			})
		Crafty.e('2D, Canvas, Collision, Obstacle, m_block')
			.origin(14,14)
			.attr({
				x: bvgGame.TILE_SIZE * 15,
				y: bvgGame.TILE_SIZE * 13,
				z: 2,
				rotation: 90
			})
			.collision([0,0], [25,0], [25,25], [0,25])
		Crafty.e('2D, Canvas, Collision, Obstacle, m_block_gray')
			.origin(14,14)
			.attr({
				x: bvgGame.TILE_SIZE * 15,
				y: bvgGame.TILE_SIZE * 15,
				z: 2,
				rotation: 90
			})
			.collision([0,0], [25,0], [25,25], [0,25])
		Crafty.e('2D, Canvas, Collision, Obstacle, m_block')
			.origin(14,14)
			.attr({
				x: bvgGame.TILE_SIZE * 15,
				y: bvgGame.TILE_SIZE * 17,
				z: 2,
				rotation: 90
			})
			.collision([0,0], [25,0], [25,25], [0,25])
		Crafty.e('2D, Canvas, Collision, Obstacle, m_barrier')
			.origin(8,16)
			.attr({
				x: bvgGame.TILE_SIZE * 5,
				y: bvgGame.TILE_SIZE * 17,
				z: 2,
				rotation: 180
			})
		Crafty.e('2D, Canvas, Obstacle, m_stove')
			.attr({
				x: bvgGame.TILE_SIZE * 30,
				y: bvgGame.TILE_SIZE * 2,
				z: 2,
			})


		// draw HUD
		Crafty.e('2D, Canvas, hud_bar')
			.attr({
				x: 0,
				y: 0,
				w: 179,
				h: 34,
				z: 100
			})
		Crafty.e('2D, Canvas, hud_bar')
			.attr({
				x: 178,
				y: 0,
				w: 179,
				h: 34,
				z: 100
			})
		Crafty.e('2D, Canvas, hud_bar')
			.attr({
				x: 357,
				y: 0,
				w: 179,
				h: 34,
				z: 100
			})
		// 20 Points Bar
		Crafty.e('2D, Canvas, points_20')
			.attr({
				x: 403,
				y: 14,
				w: 15,
				h: 7,
				z: 100
			})
		Crafty.e('2D, Canvas, Mouse, s_caution_block')
			.attr({
				x: 425,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
		Crafty.e('2D, Canvas, Mouse, s_barbed_wire_v')
			.attr({
				x: 445,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
		Crafty.e('2D, Canvas, Mouse, s_block')
			.attr({
				x: 465,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
		Crafty.e('2D, Canvas, Mouse, s_box')
			.attr({
				x: 485,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
		// 50 Points Bar
		Crafty.e('2D, Canvas, points_50')
			.attr({
				x: 224,
				y: 14,
				w: 15,
				h: 7,
				z: 100
			})
		Crafty.e('2D, Canvas, m_block')
			.attr({
				x: 246,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
		Crafty.e('2D, Canvas, m_block_gray')
			.attr({
				x: 266,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
		Crafty.e('2D, Canvas, m_barrier')
			.attr({
				x: 290,
				y: 8,
				w: 8,
				h: 16,
				z: 100
			})
		Crafty.e('2D, Canvas, m_box')
			.attr({
				x: 306,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
		// 100 Points Bar
		Crafty.e('2D, Canvas, points_100')
			.attr({
				x: 45,
				y: 14,
				w: 17,
				h: 7,
				z: 100
			})
		Crafty.e('2D, Canvas, l_ice_pit')
			.attr({
				x: 68,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
		Crafty.e('2D, Canvas, m_pillar')
			.attr({
				x: 88,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
		Crafty.e('2D, Canvas, s_foot_trap')
			.attr({
				x: 108,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
		Crafty.e('2D, Canvas, s_mine')
			.attr({
				x: 128,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
		// Exit Button
		var button_exit = Crafty.e('2D, Canvas, Mouse, b_exit_black')
			.attr({
				x: 536,
				y: 0,
				w: 32,
				h: 32,
				z: 100
			})
			.bind('MouseOver', switchExitToYellowUI)
			.bind('MouseOut', switchExitToBlackUI)
			.bind('MouseUp', exitGame)
		Crafty.e('2D, DOM, points_bar')
			.attr({
				x: 488,
				y: 265,
				w: 76,
				h: 26,
				z: 100
			})
		Crafty.e('2D, DOM, Text')
			.attr({
				x: 482,
				y: 270,
				w: 56,
				h: 16,
				z: 100
			})
			.text("100")
			.css({
				'text-align': 'right',
			})
			.textFont({
				'size': '15px',
				'weight': 'bold'
			})
			.unselectable()
		Crafty.e('2D, DOM, health_bar_yellow')
			.attr({
				x: 450,
				y: 292,
				w: 114,
				h: 26,
				z: 100
			})
		Crafty.e('2D, DOM, health_yellow')
			.attr({
				x: 473,
				y: 298,
				w: 84,
				h: 15,
				z: 100
			})

		// Add Player
		player = Crafty.e('2D, Canvas, Player, Collision, Keyboard, Fourway, mc_left')
			.attr({
				x: Crafty.stage.elem.clientWidth/2,
				y: Crafty.stage.elem.clientHeight/2,
				z: 50,
				_player_speed: 2,
			})
			.fourway(2)
			.collision()

		// Round One Aduio
		Crafty.audio.play('roundOne')

		// swaps exit button images on mouse over
		function switchExitToBlackUI() {
			button_exit.toggleComponent('b_exit_yellow', 'b_exit_black')
				.attr({
					w: 32,
					h: 32
				})
		}

		// swaps exit button images on mouse out
		function switchExitToYellowUI() {
			button_exit.toggleComponent('b_exit_black', 'b_exit_yellow')
				.attr({
					w: 32,
					h: 32
				})
		}

		// Opens Settings Menu
		function exitGame() {
			Crafty.audio.stop()
			Crafty.scene('menu')
		}
	})
})();