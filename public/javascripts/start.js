(function() {
	window.bvgGame = window.bvgGame || {}
	bvgGame.SMALL_TILE_SIZE = 16
	bvgGame.MEDIUM_TILE_SIZE = 32
	bvgGame.LARGE_TILE_SIZE = 64
	bvgGame.IS_MOBILE = false

	window.onload = function() {
		if (screen.availHeight === 548) {
			bvgGame.IS_MOBILE = true
			Crafty.init(568, 320, document.getElementById('cr-stage'))
		} else {
			Crafty.init(568, 320, document.getElementById('cr-stage'))
		}
		Crafty.canvas.init()
		Crafty.background('#222')

		Crafty.scene('loading')
	};
})();