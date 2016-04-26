Template.gameArea.helpers({
	//BLUE TREE
	blueTreePicture: function() {
		var pic = TreeLogicBlue.newTreeVal;
		var imgName = "/treebucket"+pic+".jpg";
		return imgName;
	},
	blueBucketNum: function() {
		//TreeLogicBlue.getTreeNum();
		return TreeLogicBlue.newBucketVal;
	},
	blueTreeNum: function() {
		return TreeLogicBlue.newTreeVal;
		//return TreeLogicBlue.TREENUM;
	},
	//YELLOW TREE
	YellowTreePicture: function() {
		var pic = TreeLogicYellow.newTreeVal;
		var imgName = "/treebucket"+pic+".jpg";
		return imgName;
	},
	YellowBucketNum: function() {
		return TreeLogicYellow.newBucketVal;
	},
	YellowTreeNum: function() {
		return TreeLogicYellow.newTreeVal;
	},

	//GREEN TREE
	GreenTreePicture: function() {
		var pic = TreeLogicGreen.newTreeVal;
		var imgName = "/treebucket"+pic+".jpg";
		return imgName;
	},
	GreenBucketNum: function() {
		return TreeLogicGreen.newBucketVal;
	},
	GreenTreeNum: function() {
		return TreeLogicGreen.newTreeVal;
	},
	
	//PINK TREE
	PinkTreePicture: function() {
		var pic = TreeLogicPink.newTreeVal;
		var imgName = "/treebucket"+pic+".jpg";
		return imgName;
	},
	PinkBucketNum: function() {
		return TreeLogicPink.newBucketVal;
	},
	PinkTreeNum: function() {
		return TreeLogicPink.newTreeVal;
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
