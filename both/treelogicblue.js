TreeLogicBlue = {
  TREENUM: 10,
  BUCKETNUM: 0,
};


(function (scope) {
  scope.spill = function() {
    if(treeNum >= 2){
      treeNum -= 2;
      bucketNum += 2;
    } else {
      bucketNum += treeNum;
      treeNum = 0;
    }
  };
  scope.bird = function() {
    if(treeNum >= 1){
      treeNum -= 1;
      bucketNum += 1;
    } else {
      treeNum = 0;
    }
  };
  scope.getBlueBucketNum = TreeLogicBlue.bucketNum
  // scope.interpretSpinner = function() {
  //   console.log("in spinner interpreter")
  // 	var spin = Spin.spinVal
  // 	if (spin == 'spill') {
  // 		spill();
  // 	}
  // 	if (spin == 'bird') {
  // 		bird();
  // 	}
  //   return treeNum;
  // };
  // scope.getTreeNum = scope.interpretSpinner()
  //scope.spinVal = Spin.getSpin(); //this is the key
  //otherwise, it keeps generating random numbers
  //each time you call it, instead of saving the
  //one random number for each spin
})(Spin);
