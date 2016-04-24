///Session.set('spinValue', 19);
//import Math;

Template.spinnerArea.helpers({
	spinValue: function() {
	  //return Spinner.getSpin();
		// var values = ["1","2","3","4","Bird","Spill"]
		// var random = Math.floor((Math.random() * 5) + 1)
		// return values[random]
		return Spin.getSpin();
	},
});

Template.spinnerArea.events({
	'click .spin': function(event) {
		event.preventDefault();
		alert("Spinning!");
		spinValue = Spin.getSpin();
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
