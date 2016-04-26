Template.gameArea.helpers({
	blueTreePicture: function() {
		var pic = TreeLogicBlue.TREENUM;
		var imgName = "/treebucket"+pic+".jpg";
		return imgName;
	},
	blueBucketNum: function() {
		//TreeLogicBlue.getTreeNum();
		return TreeLogicBlue.BUCKETNUM;
	},
	blueTreeNum: function() {
		return TreeLogicBlue.TREENUM;
	},
	// blueInterpretSpinner: function() {
	// 	console.log("in spinner interpreter")
	// 	var spin = Spin.spinVal
	// 	if (spin == 'spill') {
	// 		TreeLogicBlue.spill();
	// 	}
	// 	if (spin == 'bird') {
	// 		TreeLogicBlue.bird();
	// 	}
	// },
});


Template.gameArea.events({
	'click .takeMove': function(event) {
		event.preventDefault();
		alert("Taking Move!");
		// TreeLogicBlue.InterpretSpinner();
		location.reload(true);
	},
	'click .pickCherry': function(event) {
		event.preventDefault();
		alert("Picking Cherries!");
		location.reload(true);
	},
	'click .placeCherry': function(event) {
		event.preventDefault();
		alert("Placing Cherries!");
		location.reload(true);
	},
});
