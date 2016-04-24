Template.gameArea.events({
	'click .placeTile': function(event) {
		event.preventDefault();
		alert("Placing a Tile");
	},
	'click .resetGame': function(event) {
		event.preventDefault();
		alert("Resetting game");
	},
});