(function (){
	Crafty.c('Player', {
		_score: 100,
		_health: 850,
		_direction: 'left',
		_player_speed: 10,
		init: function() {
			this.bind('EnterFrame', function(){
				// Wall collision
				if (this._x <= 0) {
					this.x = 0
				}
				if ((this._x + this._w) >= bvgGame.WIDTH) {
					this.x = (bvgGame.WIDTH - this._w)
				}
				if (this._y <= 33) {
					this.y = 33
				}
				if ((this._y + this._h) >= bvgGame.HEIGHT) {
					this.y = (bvgGame.HEIGHT - this._h)
				}

				// Obstacle collision
				if(this.hit('Obstacle')) {
					if(this._direction === 'left') {
						this.x = this._x + this._player_speed + 2
					} else if(this._direction === 'right') {
						this.x = this._x - this._player_speed - 2
					} else if(this._direction === 'up') {
						this.y = this._y + this._player_speed + 2
					} else if(this._direction === 'down') {
						this.y = this._y - this._player_speed - 2
					}
				}

				// is shooting
				if(Crafty.frame() % 7 === 0) {
					if(Crafty.keydown.hasOwnProperty(32)) {
						var firing_direction = 'w'
						var rotation_angle = 270
						var p_x, p_y

						if(this._direction === 'left') {
							firing_direction = 'w'
							rotation_angle = 270
							p_x = this._x - 7
							p_y = this._y + this._h * 0.5
						} else if(this._direction === 'right') {
							firing_direction = 'e'
							rotation_angle = 90
							p_x = this._x + 21
							p_y = this._y + this._h * 0.5
						} else if(this._direction === 'up') {
							firing_direction = 'n'
							rotation_angle = 0
							p_x = this._x + this._w * 0.5 - 3
							p_y = this._y - 7
						} else if(this._direction === 'down') {
							firing_direction = 's'
							rotation_angle = 180
							p_x = this._x + this._w * 0.5 - 3
							p_y = this._y + 21
						}

						Crafty.e('2D, DOM, Collision, Mc_Proj, mc_projectile')
							.attr({
								x: p_x,
								y: p_y,
								z: 50,
								rotation: rotation_angle,
								_proj_direction: firing_direction
							})
							.origin(3,4)
							.offsetBoundary(-1)
							.collision()
							.onHit('Obstacle', function(){
								this.hit('Obstacle')[0].obj.damage()
								this.destroy()
							})
							.onHit('e_blueman', function(){
								this.hit('e_blueman')[0].obj.damage()
								this.destroy()
							})
					}
				}
			})

			this.bind('NewDirection', function(dir) {
				this.removeComponent('mc_left')
				this.removeComponent('mc_right')
				this.removeComponent('mc_down')
				this.removeComponent('mc_up')

				if (dir.x < 0) {
					this.addComponent('mc_left')
					this._direction = 'left'
				} else if (dir.x > 0) {
					this.addComponent('mc_right')
					this._direction = 'right'
				} else if (dir.y < 0) {
					this.addComponent('mc_up')
					this._direction = 'up'
				} else if (dir.y > 0) {
					this.addComponent('mc_down')
					this._direction = 'down'
				}
			})
		},
		damage: function() {
			this._health -= 5;
			Crafty('health_yellow').w = this._health * 0.1

			if(this._health <= 0) {
				bvgGame.exitGame()
			}
		}
	})
}())