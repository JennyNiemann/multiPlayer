///Session.set('spinValue', 19);
//import Math;

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
});

Template.spinnerArea.events({
	'click .spin': function(event) {
		event.preventDefault();
		//alert("Spinning!");
		location.reload(true);
	},
});
