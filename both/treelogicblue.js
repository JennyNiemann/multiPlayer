TreeLogicBlue = {
  TREENUM: 10,
  BUCKETNUM: 0,
};

//var treeVar = -42;
// didn't work

(function (scope) {
  // scope.treeval = 10;
  // scope.bucketval = 0;
  // scope.spill = function() {
  //   if(TreeLogicBlue.treeval >= 2){
  //     TreeLogicBlue.treeval -= 2;
  //     TreeLogicBlue.bucketval += 2;
  //   } else {
  //     TreeLogicBlue.bucketval += TreeLogicBlue.treeval;
  //     TreeLogicBlue.treeval = 0;
  //   }
  // };
  // scope.bird = function() {
  //   if(TreeLogicBlue.treeval >= 1){
  //     TreeLogicBlue.treeval -= 1;
  //     TreeLogicBlue.bucketval += 1;
  //   } else {
  //     TreeLogicBlue.treeval = 0;
  //   }
  // };
  // scope.interpretSpinnerTree = function() {
  //   console.log("in spinner interpreter for trees")
  // 	var spin = Spin.spinVal;
  // 	if (spin == 'spill') {
  // 		TreeLogicBlue.spill();
  // 	}
  // 	if (spin == 'bird') {
  // 		TreeLogicBlue.bird();
  // 	}
  //   return treeNum;
  // };
  // scope.newTreeVal = TreeLogicBlue.interpretSpinnerTree();
  // scope.getTreeNum = scope.interpretSpinner()
  //scope.spinVal = Spin.getSpin(); //this is the key
  //otherwise, it keeps generating random numbers
  //each time you call it, instead of saving the
  //one random number for each spin
})(Spin);
