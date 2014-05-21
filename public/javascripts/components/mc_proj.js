(function (){
	Crafty.c('Mc_Proj', {
		_proj_direction: 'w',
		init: function() {
			this.bind('EnterFrame', function(){
				// fire in current facing direction
				this.move(this._proj_direction,5)

				// destroy projectile if it's off-screen
				if ((this._x + this._w) <= 0 || (this._x - this._w) >= bvgGame.WIDTH || (this._y + this._h) <= 32 || (this._y - this._h) >= bvgGame.HEIGHT) {
					this.destroy()
				}
			})
		},
	})
}())