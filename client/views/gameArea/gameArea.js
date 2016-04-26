Template.gameArea.helpers({
	//PLAYER ORDER
	currentPlayer: function() {
		var curr = Spin.currentPlayer;
		var name = curr+" Player";
		return name;
	},

	//BLUE TREE
	blueTreePicture: function() {
		if (Spin.currentPlayer == "Blue"){
			var pic = TreeLogicBlue.newTreeVal;
			var imgName = "/treebucket"+pic+".jpg";
			return imgName;
		} else {
			return "/treebucket10.jpg"
		}
	},
	blueBucketNum: function() {
		if (Spin.currentPlayer == "Blue") {
			return TreeLogicBlue.newBucketVal;
		}
		return 0;
	},
	blueTreeNum: function() {
		if (Spin.currentPlayer == "Blue") {
			return TreeLogicBlue.newTreeVal;
		}
		return 10;
	},
	//YELLOW TREE
	YellowTreePicture: function() {
		if (Spin.currentPlayer == "Yellow"){
			var pic = TreeLogicYellow.newTreeVal;
			var imgName = "/treebucket"+pic+".jpg";
			return imgName;
		} else {
			return "/treebucket10.jpg"
		}
	},
	YellowBucketNum: function() {
		if (Spin.currentPlayer == "Yellow") {
			return TreeLogicYellow.newBucketVal;
		}
		return 0;
	},
	YellowTreeNum: function() {
		if (Spin.currentPlayer == "Yellow") {
			return TreeLogicYellow.newTreeVal;
		}
		return 10;
	},

	//GREEN TREE
	GreenTreePicture: function() {
		if (Spin.currentPlayer == "Green"){
			var pic = TreeLogicGreen.newTreeVal;
			var imgName = "/treebucket"+pic+".jpg";
			return imgName;
		} else {
			return "/treebucket10.jpg"
		}
	},
	GreenBucketNum: function() {
		if (Spin.currentPlayer == "Green") {
			return TreeLogicGreen.newBucketVal;
		}
		return 0;
	},
	GreenTreeNum: function() {
		if (Spin.currentPlayer == "Green") {
			return TreeLogicGreen.newTreeVal;
		}
		return 10;
	},

	//PINK TREE
	PinkTreePicture: function() {
		if (Spin.currentPlayer == "Pink"){
			var pic = TreeLogicPink.newTreeVal;
			var imgName = "/treebucket"+pic+".jpg";
			return imgName;
		} else {
			return "/treebucket10.jpg"
		}
	},
	PinkBucketNum: function() {
		if (Spin.currentPlayer == "Pink") {
			return TreeLogicPink.newBucketVal;
		}
		return 0;
	},
	PinkTreeNum: function() {
		if (Spin.currentPlayer == "Pink") {
			return TreeLogicPink.newTreeVal;
		}
		return 10;
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
		var treePicked = prompt("Choose enemy player to add cherries to", "");
		alert("Placing Cherries!");
		location.reload(true);
	},
});
