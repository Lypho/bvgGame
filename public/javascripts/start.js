(function() {
	window.onload = function() {
		Crafty.init(568, 320, document.getElementById('cr-stage'))
		Crafty.canvas.init()
		Crafty.background('#222')
		Crafty.scene('loading')
	};
})();