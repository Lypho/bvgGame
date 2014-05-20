(function (){
	Crafty.c('Player', {
		_health: 85,
		_newDirection: 'left',
		_oldDirection: 'left',
		init: function() {
			this.bind('EnterFrame', function(){
				if (this._newDirection !== this._oldDirection) {
					this._oldDirection = this._newDirection

					this.removeComponent('mc_up')
					this.removeComponent('mc_down')
					this.removeComponent('mc_left')
					this.removeComponent('mc_right')
					switch(this._newDirection) {
						case 'up':
							this.addComponent('mc_up')
							break;
						case 'down':
							this.addComponent('mc_down')
							break;
						case 'left':
							this.addComponent('mc_left')
							break;
						case 'right':
							this.addComponent('mc_right')
							break;
					}
				}
			})
		},
	})
}())