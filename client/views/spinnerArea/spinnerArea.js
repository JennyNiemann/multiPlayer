///Session.set('spinValue', 19);
//import Math;

//var playerList = new Array("Yellow", "Blue", "Green", "Pink");

Template.spinnerArea.helpers({
	spinValue: function() {
		//return Spin.getSpin();
		return Spin.spinVal;
	},
	spinPicture: function() {
		var pic = Spin.spinVal;
		var imgName = "/spinner"+pic+".jpg";
		return imgName;
	},
	currentPlayer: function() {
		return Spin.currPlayer;
	}
});

Template.spinnerArea.events({
	'click .spin': function(event) {
		event.preventDefault();
		//alert("Spinning!");
		location.reload(true);
	},
});
