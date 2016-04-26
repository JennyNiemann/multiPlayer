TreeLogicBlue = {
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
    if(TreeLogicBlue.treevalue <= 8){
      TreeLogicBlue.treevalue += 2;
    } else {
      TreeLogicBlue.treevalue = 10;
    };
    return TreeLogicBlue.treevalue;
  };
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


// UPDATE BUCKET VALUE

scope.spillBucket = function() {
  if(TreeLogicBlue.treevalue <= 8){
    TreeLogicBlue.bucketvalue -= 2;
  } else {
    TreeLogicBlue.bucketvalue -= 1;
  };
  return TreeLogicBlue.bucketvalue;
};
scope.birdBucket = function() {
  if(TreeLogicBlue.treevalue <= 9){
    TreeLogicBlue.bucketvalue -= 1;
    //TreeLogicBlue.bucketvalue += 1;
  };
  return TreeLogicBlue.bucketvalue;
};
scope.oneBucket = function() {
  if(TreeLogicBlue.treevalue > 0){
    TreeLogicBlue.bucketvalue += 1;
  }
  return TreeLogicBlue.bucketvalue;
};
scope.twoBucket = function() {
  if(TreeLogicBlue.treevalue > 1){
    TreeLogicBlue.bucketvalue += 2;
  } else {
    TreeLogicBlue.bucketvalue = 10;
  }
  return TreeLogicBlue.bucketvalue;
};
scope.threeBucket = function() {
  if(TreeLogicBlue.treevalue > 2){
    TreeLogicBlue.bucketvalue += 3;
  } else {
    TreeLogicBlue.bucketvalue = 10;
  }
  return TreeLogicBlue.bucketvalue;
};
scope.fourBucket = function() {
  if(TreeLogicBlue.treevalue > 3){
    TreeLogicBlue.bucketvalue += 4;
  } else {
    TreeLogicBlue.bucketvalue = 10;
  }
  return TreeLogicBlue.bucketvalue;
};
scope.interpretSpinnerBucket = function() {
  console.log("in spinner interpreter for buckets")
  var spin = Spin.spinVal;
  if (spin == 'Spill') {
    console.log("spinner is Spill")
    return TreeLogicBlue.spillBucket()
  }
  else if (spin == 'Bird') {
    console.log("spinner is Bird")
    return TreeLogicBlue.birdBucket();
  }
  else if (spin == '1') {
    console.log("spinner is 1")
    return TreeLogicBlue.oneBucket();
  }
  else if (spin == '2') {
    console.log("spinner is 2")
    return TreeLogicBlue.twoBucket();
  }
  else if (spin == '3') {
    console.log("spinner is 3")
    return TreeLogicBlue.threeBucket();
  }
  else {
    console.log("spinner is 4")
    return TreeLogicBlue.fourBucket();
  }
};
scope.newBucketVal = TreeLogicBlue.interpretSpinnerBucket();

})(TreeLogicBlue);
