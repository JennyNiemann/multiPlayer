TreeLogicGreen = {
  TREENUM: 10,
  BUCKETNUM: 0,
};

//var treeVar = -42;
// didn't work

(function (scope) {
  scope.treevalue = 10;
  scope.bucketvalue = 0;

// UPDATE TREE LOGIC

  scope.spillTree = function() {
    if(TreeLogicGreen.treevalue <= 8){
      TreeLogicGreen.treevalue += 2;
    } else {
      TreeLogicGreen.treevalue = 10;
    };
    return TreeLogicGreen.treevalue;
  };
  scope.birdTree = function() {
    if(TreeLogicGreen.treevalue <= 9){
      TreeLogicGreen.treevalue += 1;
      //TreeLogicGreen.bucketvalue += 1;
    } else {
      TreeLogicGreen.treevalue = 10;
    };
    return TreeLogicGreen.treevalue;
  };
  scope.oneTree = function() {
    if(TreeLogicGreen.treevalue > 0){
      TreeLogicGreen.treevalue -= 1;
    }
    return TreeLogicGreen.treevalue;
  };
  scope.twoTree = function() {
    if(TreeLogicGreen.treevalue > 1){
      TreeLogicGreen.treevalue -= 2;
    } else {
      TreeLogicGreen.treevalue = 0;
    }
    return TreeLogicGreen.treevalue;
  };
  scope.threeTree = function() {
    if(TreeLogicGreen.treevalue > 2){
      TreeLogicGreen.treevalue -= 3;
    } else {
      TreeLogicGreen.treevalue = 0;
    }
    return TreeLogicGreen.treevalue;
  };
  scope.fourTree = function() {
    if(TreeLogicGreen.treevalue > 3){
      TreeLogicGreen.treevalue -= 4;
    } else {
      TreeLogicGreen.treevalue = 0;
    }
    return TreeLogicGreen.treevalue;
  };
  scope.interpretSpinnerTree = function() {
    console.log("in spinner interpreter for trees")
  	var spin = Spin.spinVal;
  	if (spin == 'Spill') {
      console.log("spinner is Spill")
  		return TreeLogicGreen.spillTree()
  	}
  	else if (spin == 'Bird') {
      console.log("spinner is Bird")
  		return TreeLogicGreen.birdTree();
  	}
    else if (spin == '1') {
      console.log("spinner is 1")
      return TreeLogicGreen.oneTree();
    }
    else if (spin == '2') {
      console.log("spinner is 2")
      return TreeLogicGreen.twoTree();
    }
    else if (spin == '3') {
      console.log("spinner is 3")
      return TreeLogicGreen.threeTree();
    }
    else {
      console.log("spinner is 4")
      return TreeLogicGreen.fourTree();
    }
  };
  scope.newTreeVal = TreeLogicGreen.interpretSpinnerTree();


// UPDATE BUCKET VALUE

scope.spillBucket = function() {
  if(TreeLogicGreen.treevalue <= 8){
    TreeLogicGreen.bucketvalue -= 2;
  } else {
    TreeLogicGreen.bucketvalue -= 1;
  };
  return TreeLogicGreen.bucketvalue;
};
scope.birdBucket = function() {
  if(TreeLogicGreen.treevalue <= 9){
    TreeLogicGreen.bucketvalue -= 1;
    //TreeLogicGreen.bucketvalue += 1;
  };
  return TreeLogicGreen.bucketvalue;
};
scope.oneBucket = function() {
  if(TreeLogicGreen.treevalue > 0){
    TreeLogicGreen.bucketvalue += 1;
  }
  return TreeLogicGreen.bucketvalue;
};
scope.twoBucket = function() {
  if(TreeLogicGreen.treevalue > 1){
    TreeLogicGreen.bucketvalue += 2;
  } else {
    TreeLogicGreen.bucketvalue = 10;
  }
  return TreeLogicGreen.bucketvalue;
};
scope.threeBucket = function() {
  if(TreeLogicGreen.treevalue > 2){
    TreeLogicGreen.bucketvalue += 3;
  } else {
    TreeLogicGreen.bucketvalue = 10;
  }
  return TreeLogicGreen.bucketvalue;
};
scope.fourBucket = function() {
  if(TreeLogicGreen.treevalue > 3){
    TreeLogicGreen.bucketvalue += 4;
  } else {
    TreeLogicGreen.bucketvalue = 10;
  }
  return TreeLogicGreen.bucketvalue;
};
scope.interpretSpinnerBucket = function() {
  console.log("in spinner interpreter for buckets")
  var spin = Spin.spinVal;
  if (spin == 'Spill') {
    console.log("spinner is Spill")
    return TreeLogicGreen.spillBucket()
  }
  else if (spin == 'Bird') {
    console.log("spinner is Bird")
    return TreeLogicGreen.birdBucket();
  }
  else if (spin == '1') {
    console.log("spinner is 1")
    return TreeLogicGreen.oneBucket();
  }
  else if (spin == '2') {
    console.log("spinner is 2")
    return TreeLogicGreen.twoBucket();
  }
  else if (spin == '3') {
    console.log("spinner is 3")
    return TreeLogicGreen.threeBucket();
  }
  else {
    console.log("spinner is 4")
    return TreeLogicGreen.fourBucket();
  }
};
scope.newBucketVal = TreeLogicGreen.interpretSpinnerBucket();

})(TreeLogicGreen);
