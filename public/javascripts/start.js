(function() {
	window.bvgGame = window.bvgGame || {}

	window.onload = function() {
		if (screen.availHeight === 548) {
			bvgGame.IS_MOBILE = true
			Crafty.init(568, 320, document.getElementById('cr-stage'))
		} else {
			Crafty.init(568, 320, document.getElementById('cr-stage'))
		}
		Crafty.canvas.init()
		Crafty.background('#222')

		// define useful game paramaters
		bvgGame.WIDTH = Crafty.stage.elem.clientWidth
		bvgGame.HEIGHT = Crafty.stage.elem.clientHeight
		bvgGame.TILE_SIZE = 16
		bvgGame.IS_MOBILE = false

		Crafty.scene('loading')
	};
})();