TreeLogicBlue = {
  TREENUM: 10,
  BUCKETNUM: 0,
};

//var treeVar = -42;
// didn't work

(function (scope) {
  scope.treevalue = 10;
  scope.bucketvalue = 0;

  scope.updateTree = function() {
    TreeLogicBlue.treevalue += 1;
  };

  scope.updateVal = TreeLogicBlue.treevalue;

  scope.spillTree = function() {
    if(TreeLogicBlue.treevalue <= 8){
      TreeLogicBlue.treevalue += 2;
    } else {
      TreeLogicBlue.treevalue = 10;
    };
    return TreeLogicBlue.treevalue;
  };
  // scope.spillBucket = function() {
  //   if(TreeLogicBlue.treevalue >= 2){
  //     //TreeLogicBlue.treevalue -= 2;
  //     TreeLogicBlue.bucketvalue -= 2;
  //   } else {
  //     TreeLogicBlue.bucketvalue += TreeLogicBlue.treevalue;
  //     //TreeLogicBlue.treevalue = 0;
  //   }
  //   return TreeLogicBlue.bucketvalue;
  // };
  scope.birdTree = function() {
    if(TreeLogicBlue.treevalue <= 9){
      TreeLogicBlue.treevalue += 1;
      //TreeLogicBlue.bucketvalue += 1;
    } else {
      TreeLogicBlue.treevalue = 10;
    };
    return TreeLogicBlue.treevalue;
  };
  scope.oneTree = function() {
    if(TreeLogicBlue.treevalue > 0){
      TreeLogicBlue.treevalue -= 1;
    }
    return TreeLogicBlue.treevalue;
  };
  scope.twoTree = function() {
    if(TreeLogicBlue.treevalue > 1){
      TreeLogicBlue.treevalue -= 2;
    } else {
      TreeLogicBlue.treevalue = 0;
    }
    return TreeLogicBlue.treevalue;
  };
  scope.threeTree = function() {
    if(TreeLogicBlue.treevalue > 2){
      TreeLogicBlue.treevalue -= 3;
    } else {
      TreeLogicBlue.treevalue = 0;
    }
    return TreeLogicBlue.treevalue;
  };
  scope.fourTree = function() {
    if(TreeLogicBlue.treevalue > 3){
      TreeLogicBlue.treevalue -= 4;
    } else {
      TreeLogicBlue.treevalue = 0;
    }
    return TreeLogicBlue.treevalue;
  };
  scope.interpretSpinnerTree = function() {
    console.log("in spinner interpreter for trees")
  	var spin = Spin.spinVal;
  	if (spin == 'Spill') {
      console.log("spinner is Spill")
  		return TreeLogicBlue.spillTree()
  	}
  	else if (spin == 'Bird') {
      console.log("spinner is Bird")
  		return TreeLogicBlue.birdTree();
  	}
    else if (spin == '1') {
      console.log("spinner is 1")
      return TreeLogicBlue.oneTree();
    }
    else if (spin == '2') {
      console.log("spinner is 2")
      return TreeLogicBlue.twoTree();
    }
    else if (spin == '3') {
      console.log("spinner is 3")
      return TreeLogicBlue.threeTree();
    }
    else {
      console.log("spinner is 4")
      return TreeLogicBlue.fourTree();
    }
  };
  scope.newTreeVal = TreeLogicBlue.interpretSpinnerTree();
  scope.treevalue = TreeLogicBlue.newTreeVal;

})(TreeLogicBlue);
