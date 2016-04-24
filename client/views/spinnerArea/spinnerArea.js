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
		// spinValue = Spin.getSpin();
		// console.log("newSpinValue is "+spinValue);
		// var spin = 0;
		// Meteor.call('getSpin', function(error, result) {
    //   		if (error)
    //     		return alert(error.reason);
    //     	else {
    //     		alert(result);
    //     		spin = result;
    //     		console.log("new spin value = " +Session.get('spinValue'));
    // 		}
    // 	});
    // 	Session.set('spinValue', result);

	},
});
