(function (){
	Crafty.c('e_blueman', {
		_health: 25,
		_enemy_speed: 3,
		init: function() {
			this.bind('EnterFrame', function(){
				if(Crafty.frame() % 20 === 0) {
					this.x += this._enemy_speed
				}

				// Passed right wall
				if((this._x + this._w) >= bvgGame.WIDTH) {
					this.x = (bvgGame.WIDTH - this._w)
				}

				// Obstacle collision
				if(this.hit('Obstacle')) {
					this.x = this._x - this._enemy_speed - 2
				}

				// is shooting
				// if(Crafty.frame() % 50 === 0) {
				// 	Crafty.e('2D, DOM, Collision, Mc_Proj, mc_projectile')
				// 		.attr({
				// 			x: p_x,
				// 			y: p_y,
				// 			z: 50,
				// 			rotation: rotation_angle,
				// 			_proj_direction: firing_direction
				// 		})
				// 		.origin(3,4)
				// 		.offsetBoundary(-1)
				// 		.collision()
				// 		.onHit('Obstacle', function(){
				// 			this.hit('Obstacle')[0].obj.damage()
				// 			this.destroy()
				// 		})
				// }
			})
		},
		damage: function() {
			this._health -= 5

			if(this._health <= 0) {
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
			}
		}
	})
}())