(function() {
	Crafty.scene('game', function() {
		window.bvgGame = window.bvgGame || {}
		console.log('--GAME SCENE STARTED--')

		var round = 0
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
					if (x >= 3 && x <= 7 && y >= 8 && y <= 12) {
						Crafty.e('2D, Canvas, s_gray')
							.origin(8,8)
							.attr({
								x: bvgGame.TILE_SIZE * x,
								y: bvgGame.TILE_SIZE * y,
								z: 1,
								rotation: 90
							})
					} else {
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

		// draw obstacles
		Crafty.e('2D, Canvas, Collision, Obstacle, m_desk')
			.origin(24, 16)
			.attr({
				x: bvgGame.TILE_SIZE * 32 + 16,
				y: bvgGame.TILE_SIZE * 10 - 8,
				z: 10,
				rotation: 90,
			})
			.setHealth(200)
			.collision([3,0], [42,0], [42,28], [3,28])
		Crafty.e('2D, Canvas, Collision, Obstacle, m_box')
			.origin(14,14)
			.attr({
				x: bvgGame.TILE_SIZE * 15,
				y: bvgGame.TILE_SIZE * 2 + 4,
				z: 2,
				rotation: 90,
			})
			.collision([0,0], [25,0], [25,25], [0,25])
			.setHealth(100)
		Crafty.e('2D, Canvas, Collision, Obstacle, m_box')
			.origin(14,14)
			.attr({
				x: 212,
				y: bvgGame.TILE_SIZE * 2 + 4,
				z: 2,
				rotation: 90,
			})
			.collision([0,0], [25,0], [25,25], [0,25])
			.setHealth(100)
		Crafty.e('2D, Canvas, Collision, Obstacle, m_box')
			.origin(14,14)
			.attr({
				x: 184,
				y: bvgGame.TILE_SIZE * 2 + 4,
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
		Crafty.e('2D, Canvas, Collision, Obstacle, m_barrier')
			.origin(8,16)
			.attr({
				x: bvgGame.TILE_SIZE * 5,
				y: bvgGame.TILE_SIZE * 15,
				z: 2,
				rotation: 180
			})
		Crafty.e('2D, Canvas, Collision, Obstacle, m_barrier')
			.origin(8,16)
			.attr({
				x: bvgGame.TILE_SIZE * 5,
				y: bvgGame.TILE_SIZE * 3,
				z: 2,
				rotation: 180
			})
		Crafty.e('2D, Canvas, Collision, Obstacle, m_barrier')
			.origin(8,16)
			.attr({
				x: bvgGame.TILE_SIZE * 5,
				y: bvgGame.TILE_SIZE * 5,
				z: 2,
				rotation: 180
			})
		Crafty.e('2D, Canvas, Obstacle, m_stove')
			.attr({
				x: bvgGame.TILE_SIZE * 30,
				y: bvgGame.TILE_SIZE * 2,
				z: 2,
			})
		Crafty.e('2D, Canvas, Collision, Obstacle, m_pillar')
			.origin(16,16)
			.attr({
				x: bvgGame.TILE_SIZE * 25,
				y: bvgGame.TILE_SIZE * 9 + 8,
				z: 2,
				rotation: 90
			})
			.setHealth(400)
		Crafty.e('2D, Canvas, Ice_Trap, l_ice_pit')
			.attr({
				x: bvgGame.TILE_SIZE * 4,
				y: bvgGame.TILE_SIZE * 9,
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
			.bind('MouseUp', function(e){createItem('Obstacle, s_caution_block', 16, 16, 0, 20, 50)})
		Crafty.e('2D, Canvas, Mouse, s_barbed_wire_v')
			.attr({
				x: 445,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
			.bind('MouseUp', function(e){createItem('Obstacle, s_barbed_wire_v', 16, 16, 0, 20, 50)})
		Crafty.e('2D, Canvas, Mouse, s_block')
			.attr({
				x: 465,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
			.bind('MouseUp', function(e){createItem('Obstacle, s_block', 16, 16, 0, 20, 50)})
		Crafty.e('2D, Canvas, Mouse, s_box')
			.attr({
				x: 485,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
			.bind('MouseUp', function(e){createItem('Obstacle, s_box', 16, 16, 0, 20, 50)})
		// 50 Points Bar
		Crafty.e('2D, Canvas, points_50')
			.attr({
				x: 224,
				y: 14,
				w: 15,
				h: 7,
				z: 100
			})
		Crafty.e('2D, Canvas, Mouse, m_block')
			.attr({
				x: 246,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
			.bind('MouseUp', function(e){createItem('Obstacle, m_block', 28, 28, 0, 50, 100)})
		Crafty.e('2D, Canvas, Mouse, m_block_gray')
			.attr({
				x: 266,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
			.bind('MouseUp', function(e){createItem('Obstacle, m_block_gray', 28, 28, 0, 50, 100)})
		Crafty.e('2D, Canvas, Mouse, m_barrier')
			.attr({
				x: 290,
				y: 8,
				w: 8,
				h: 16,
				z: 100
			})
			.bind('MouseUp', function(e){createItem('Obstacle, m_barrier', 16, 32, 0, 50, 100)})
		Crafty.e('2D, Canvas, Mouse, m_box')
			.attr({
				x: 306,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
			.bind('MouseUp', function(e){createItem('Obstacle, m_box', 28, 28, 0, 50, 100)})
		// 100 Points Bar
		Crafty.e('2D, Canvas, points_100')
			.attr({
				x: 45,
				y: 14,
				w: 17,
				h: 7,
				z: 100
			})
		Crafty.e('2D, Canvas, Mouse, l_ice_pit')
			.attr({
				x: 68,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
			.bind('MouseUp', function(e){createItem('Ice_Trap, l_ice_pit', 48, 48, 0, 100, 500)})
		Crafty.e('2D, Canvas, Mouse, m_pillar')
			.attr({
				x: 88,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
			.bind('MouseUp', function(e){createItem('Obstacle, m_pillar', 32, 32, 0, 100, 500)})
		Crafty.e('2D, Canvas, Mouse, s_foot_trap')
			.attr({
				x: 108,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
			.bind('MouseUp', function(e){createItem('Foot_Trap, s_foot_trap', 16, 16, 0, 100, 500)})
		Crafty.e('2D, Canvas, Mouse, s_mine')
			.attr({
				x: 128,
				y: 10,
				w: 16,
				h: 16,
				z: 100
			})
			.bind('MouseUp', function(e){createItem('Fire_Trap, s_mine', 16, 16, 0, 100, 500)})
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
			.bind('MouseUp', function(){bvgGame.exitGame()})
		// bottom left corner HUD
		Crafty.e('2D, DOM, points_bar')
			.attr({
				x: 488,
				y: 265,
				w: 76,
				h: 26,
				z: 100
			})
		Crafty.e('2D, DOM, Text, Score')
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
		Crafty.e('2D, DOM, Delay, health_bar_yellow')
			.attr({
				x: 450,
				y: 292,
				w: 114,
				h: 26,
				z: 100
			})
			.delay(spawnEnemy,3000,-1) // health bar spawns enemies becasue it will never be destroyed
		Crafty.e('2D, DOM, health_yellow')
			.attr({
				x: 473,
				y: 298,
				w: 84,
				h: 15,
				z: 100
			})

		// Add Main Character
		player = Crafty.e('2D, Canvas, Player, Collision, Keyboard, Fourway, mc_left')
			.attr({
				x: bvgGame.WIDTH * 0.5,
				y: bvgGame.HEIGHT * 0.5,
				z: 50,
				_player_speed: 2,
				_score: 100,
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

		// creates the item that was clicked
		function createItem(item, w, h, r, price, health) {
			console.log(item + ":" + w + ":" + h + ":" + r + ":" + price)

			if(Crafty('Player')._score >= price) {
				Crafty('Player')._score -= price
				Crafty('Score').text(Crafty('Player')._score)
				Crafty.e('2D, Canvas, Collision, Mouse, Draggable, ' + item)
					.origin(w * 0.5, h * 0.5)
					.attr({
						x: bvgGame.WIDTH * 0.5,
						y: bvgGame.HEIGHT * 0.5,
						w: w,
						h: h,
						z: 2,
						rotation: r
					})
					.setHealth(health)
			}
		}

		// exits the game
		bvgGame.exitGame = function() {
			Crafty.audio.stop()
			Crafty.scene('menu')
		}

		// Enemy Spawning
		function spawnEnemy() {
			var enemy_y = Crafty.math.randomInt(32,bvgGame.HEIGHT-24)
			Crafty.e('2D, Canvas, SpriteAnimation, Collision, e_blueman, enemy')
				.attr({
					x: -24,
					y: enemy_y,
					z: 150,
					_value: 20,
				})
				.reel('e_move_right', 1000, 0, 0, 3)
				.animate('e_move_right', -1)
				.onHit('Ice_Trap', function(){
					this._slow = true
				}, function(){
					this._slow = false
				})
				.onHit('Foot_Trap', function(){
					this._stopped = true
					this.resetAnimation()
					this.pauseAnimation()
					this.hit('Foot_Trap')[0].obj.destroy()
				})
		}
		spawnEnemy()

	})
})();