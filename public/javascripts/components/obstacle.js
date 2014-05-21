(function() {
	Crafty.c('Obstacle', {
		_health: 100,
		damage: function() {
			this._health -= 100

			// swap for damage sprites
			if(this._health <= 50) {
				if (this.has('s_barbed_wire_v')) {
					this.toggleComponent('s_barbed_wire_v', 's_barbed_wire_damaged_v')
				} else if(this.has('m_box')) {
					this.toggleComponent('m_box', 'm_box_damaged')
				}
			}

			// swap for death sprites
			if(this._health <= 0) {
				if (this.has('m_stove')) {
					Crafty.e('2D, Canvas, ' + Crafty.math.randomElementOfArray(['m_gray_cracked','m_gray_dirty']))
						.origin(16, 16)
						.attr({
							x: bvgGame.TILE_SIZE * 30,
							y: bvgGame.TILE_SIZE * 2,
							z: 1,
							rotation: -90
						})
					Crafty.e('2D, Canvas, ' + Crafty.math.randomElementOfArray(['m_gray_cracked','m_gray_dirty']))
						.origin(16, 16)
						.attr({
							x: bvgGame.TILE_SIZE * 32,
							y: bvgGame.TILE_SIZE * 2,
							z: 1,
							rotation: -90
						})
				}
				this.destroy()
			}
		}
	})
}())