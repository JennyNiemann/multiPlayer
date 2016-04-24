///Session.set('spinValue', 19);

Template.spinnerArea.helpers({
	spinValue: function() {
	  return Spinner.getSpin();
	},
});

Template.spinnerArea.events({
	'click .spin': function(event) {
		event.preventDefault();
		alert("Spinning!");
		Spinner.doSpin();
//		var spin = 0;
		// Meteor.call('getSpin', function(error, result) {
  //     		if (error)
  //       		return alert(error.reason);
  //       	else {
  //       		alert(result);
  //       		spin = result;
  //       		console.log("new spin value = " +Session.get('spinValue'));
  //   		}
  //   	});
  //   	Session.set('spinValue', result);
        
	},
});