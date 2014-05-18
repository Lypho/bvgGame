(function() {
	window.bvgGame = window.bvgGame || {}
	bvgGame.TILE_SIZE = 16
	bvgGame.IS_MOBILE = false

	window.onload = function() {
		if (screen.availHeight === 548) {
			bvgGame.IS_MOBILE = true
			Crafty.init(1136, 640, document.getElementById('cr-stage'))
		} else {
			Crafty.init(568, 320, document.getElementById('cr-stage'))
		}
		Crafty.canvas.init()
		Crafty.background('#222')

		Crafty.scene('loading')
	};
})();