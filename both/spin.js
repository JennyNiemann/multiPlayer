Spin = {
  // var spval = getSpin()
  spinValue: 'Bird',
};
  // getSpin = function() {
  // 	return "Bird";
//};

var playerList = new Array("Yellow", "Blue", "Green", "Yellow");

(function (scope) {
  scope.getSpin = function() {
    var values = ["1","2","3","4","Bird","Spill"];
		var random = Math.floor(Math.random() * 5);
		return values[random];
  };
<<<<<<< HEAD
  scope.playerOrder = function() {
    var currentPlayer = playerList.shift();
    playerList = playerList.push(currentPlayer);
    return currentPlayer;
  };

  scope.currPlayer = Spin.playerOrder();
  scope.spinVal = Spin.getSpin(); //this is the key
  //otherwise, it keeps generating random numbers
  //each time you call it, instead of saving the
  //one random number for each spin
=======
  scope.spinVal = Spin.getSpin();
  scope.currentPlayer = "Blue"
>>>>>>> 46f8af09f3d5d7222a4ccda4a9704257325484c2
})(Spin);
