Spin = {
  // var spval = getSpin()
  spinValue: 'Bird',
};
  // getSpin = function() {
  // 	return "Bird";
//};


(function (scope) {
  scope.getSpin = function() {
    var values = ["1","2","3","4","Bird","Spill"];
		var random = Math.floor(Math.random() * 5);
		return values[random];
  };
  scope.spinVal = Spin.getSpin();
})(Spin);
