(function() {
	Crafty.c('Obstacle', {
		_health: 100,
		damage: function() {
			this._health -= 100

			// swap for damage sprites
			if(this._health <= 50) {
				if (this.__c.s_barbed_wire_v) {
					this.toggleComponent('s_barbed_wire_v', 's_barbed_wire_damaged_v')
				} else if(this.__c.m_box) {
					this.toggleComponent('m_box', 'm_box_damaged')
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
				} else if (this._x < bvgGame.TILE_SIZE*29) {
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
				this.destroy()
			}
		}
	})
}())