(function() {
	Crafty.c('Obstacle', {
		_base_health: 50,
		_health: 50,
		setHealth: function(h) {
			this._base_health = h
			this._health = h
			return this
		},
		damage: function() {
			this._health -= 5

			// swap for damage sprites
			if(this._health <= this._base_health * 0.5) {
				if (this.__c.s_barbed_wire_v) {
					this.toggleComponent('s_barbed_wire_v', 's_barbed_wire_damaged_v')
				} else if(this.__c.m_box) {
					this.toggleComponent('m_box', 'm_box_damaged')
				} else if(this.__c.s_box) {
					this.toggleComponent('s_box', 's_box_damaged')
				} else if(this.__c.m_pillar) {
					this.toggleComponent('m_pillar', 'm_pillar_damaged')
				}
			}

			// swap for death sprites
			if(this._health <= 0) {
				if (this.__c.m_stove) {
					Crafty.e('2D, Canvas, ' + Crafty.math.randomElementOfArray(['m_gray_cracked','m_gray_dirty']))
						.origin(16, 16)
						.attr({
							x: this._x,
							y: this._y,
							z: 1,
							rotation: -90
						})
					Crafty.e('2D, Canvas, ' + Crafty.math.randomElementOfArray(['m_gray_cracked','m_gray_dirty']))
						.origin(16, 16)
						.attr({
							x: this._x + 32,
							y: this._y,
							z: 1,
							rotation: -90
						})
				} else if (this._x < bvgGame.TILE_SIZE*29 && (Crafty.math.randomInt(1,100) > 30)) {
					var x_modifier = 0
					var y_modifier = 0
					// if it's a medium or large sprite randomize where the
					// death sprite gets drawn
					if(this._w > 16) {
						x_modifier = Crafty.math.randomInt(0,1)
						y_modifier = Crafty.math.randomInt(0,1)
					}
					Crafty.e('2D, Canvas, ' + Crafty.math.randomElementOfArray(['s_blue_carpet','s_blue_carpet_bloody','s_blue_carpet_dirty','s_blue_carpet_garbage1','s_blue_carpet_garbage2']))
						.attr({
							x: this._x + bvgGame.TILE_SIZE * x_modifier,
							y: this._y + bvgGame.TILE_SIZE * y_modifier,
							z: 1,
						})
				}
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