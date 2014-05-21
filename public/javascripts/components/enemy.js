(function (){
	Crafty.c('e_blueman', {
		_health: 25,
		_enemy_speed: 3,
		_value: 20,
		init: function() {
			console.log(this._value)
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
			})
		},
		damage: function() {
			this._health -= 5

			if(this._health <= 0) {

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
			}
		}
	})
}())