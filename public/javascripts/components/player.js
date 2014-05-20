(function (){
	Crafty.c('Player', {
		_health: 85,
		_direction: 'left',
		init: function() {
			this.bind('EnterFrame', function(){
				if (this._x <= 0) {
					this._x = 0
				}
				if ((this._x + this._w) >= Crafty.stage.elem.clientWidth) {
					this._x = (Crafty.stage.elem.clientWidth - this._w)
				}
				if (this._y <= 33) {
					this._y = 33
				}
				if ((this._y + this._h) >= Crafty.stage.elem.clientHeight) {
					this._y = (Crafty.stage.elem.clientHeight - this._h)
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
	})
}())