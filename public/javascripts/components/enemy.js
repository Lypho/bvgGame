(function (){
	Crafty.c('e_blueman', {
		_health: 25,
		_enemy_speed: 3,
		_value: 20,
		_slow: false,
		_stopped: false,
		init: function() {
			this.bind('EnterFrame', function(){
				var frame_modifier = 20
				if(this._slow) {
					frame_modifier = 50
				}

				if(Crafty.frame() % frame_modifier === 0) {
					// move
					if (!this._stopped)
						this.x += this._enemy_speed
					// shoot
					if(Crafty.math.randomInt(0,1) === 1) {
						Crafty.e('2D, DOM, Collision, Mc_Proj, mc_projectile')
							.attr({
								x: this._x + 9,
								y: this._y + 6,
								z: 50,
								rotation: 90,
								_proj_direction: 'e'
							})
							.origin(3,4)
							.offsetBoundary(-1)
							.collision()
							.onHit('Obstacle', function(){
								this.hit('Obstacle')[0].obj.damage(5)
								this.destroy()
							})
							.onHit('Player', function(){
								this.hit('Player')[0].obj.damage(5)
								this.destroy()
							})
					}
				}

				// Passed right wall
				if((this._x - this._w) >= bvgGame.WIDTH) {
					Crafty('Player')._score -= this._value
					Crafty('Score').text(Crafty('Player')._score)
					this.destroy()
				}

				// Obstacle collision
				if(this.hit('Obstacle')) {
					this.x = this._x - this._enemy_speed - 2
				}
			})
		},
		damage: function(value) {
			this._health -= value

			if(this._health <= 0) {
				// update score
				Crafty('Player')._score += this._value
				Crafty('Score').text(Crafty('Player')._score)

				// grand explosion
				Crafty.e("2D, Canvas, SpriteAnimation, Delay, explosion")
				.attr({
					x: this._x,
					y: this._y,
					z: 150,
				})
				.reel('kaboom', 1000, 0, 0, 9)
				.animate('kaboom', 1)
				.delay(function() {Crafty('explosion').destroy()}, 1000, 1)
				this.destroy()

				if(this._x < bvgGame.TILE_SIZE * 29) {
					Crafty.e('2D, Canvas, s_blue_carpet_bloody')
						.origin(8,8)
						.attr({
							x: this._x,
							y: this._y,
							z: 1,
						})
				}
			}
		}
	})
}())