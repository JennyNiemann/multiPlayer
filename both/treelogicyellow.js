TreeLogicYellow = {
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
    if(TreeLogicYellow.treevalue <= 8){
      TreeLogicYellow.treevalue += 2;
    } else {
      TreeLogicYellow.treevalue = 10;
    };
    return TreeLogicYellow.treevalue;
  };
  scope.birdTree = function() {
    if(TreeLogicYellow.treevalue <= 9){
      TreeLogicYellow.treevalue += 1;
      //TreeLogicYellow.bucketvalue += 1;
    } else {
      TreeLogicYellow.treevalue = 10;
    };
    return TreeLogicYellow.treevalue;
  };
  scope.oneTree = function() {
    if(TreeLogicYellow.treevalue > 0){
      TreeLogicYellow.treevalue -= 1;
    }
    return TreeLogicYellow.treevalue;
  };
  scope.twoTree = function() {
    if(TreeLogicYellow.treevalue > 1){
      TreeLogicYellow.treevalue -= 2;
    } else {
      TreeLogicYellow.treevalue = 0;
    }
    return TreeLogicYellow.treevalue;
  };
  scope.threeTree = function() {
    if(TreeLogicYellow.treevalue > 2){
      TreeLogicYellow.treevalue -= 3;
    } else {
      TreeLogicYellow.treevalue = 0;
    }
    return TreeLogicYellow.treevalue;
  };
  scope.fourTree = function() {
    if(TreeLogicYellow.treevalue > 3){
      TreeLogicYellow.treevalue -= 4;
    } else {
      TreeLogicYellow.treevalue = 0;
    }
    return TreeLogicYellow.treevalue;
  };
  scope.interpretSpinnerTree = function() {
    console.log("in spinner interpreter for trees")
  	var spin = Spin.spinVal;
  	if (spin == 'Spill') {
      console.log("spinner is Spill")
  		return TreeLogicYellow.spillTree()
  	}
  	else if (spin == 'Bird') {
      console.log("spinner is Bird")
  		return TreeLogicYellow.birdTree();
  	}
    else if (spin == '1') {
      console.log("spinner is 1")
      return TreeLogicYellow.oneTree();
    }
    else if (spin == '2') {
      console.log("spinner is 2")
      return TreeLogicYellow.twoTree();
    }
    else if (spin == '3') {
      console.log("spinner is 3")
      return TreeLogicYellow.threeTree();
    }
    else {
      console.log("spinner is 4")
      return TreeLogicYellow.fourTree();
    }
  };
  scope.newTreeVal = TreeLogicYellow.interpretSpinnerTree();


// UPDATE BUCKET VALUE

scope.spillBucket = function() {
  if(TreeLogicYellow.treevalue <= 8){
    TreeLogicYellow.bucketvalue -= 2;
  } else {
    TreeLogicYellow.bucketvalue -= 1;
  };
  return TreeLogicYellow.bucketvalue;
};
scope.birdBucket = function() {
  if(TreeLogicYellow.treevalue <= 9){
    TreeLogicYellow.bucketvalue -= 1;
    //TreeLogicYellow.bucketvalue += 1;
  };
  return TreeLogicYellow.bucketvalue;
};
scope.oneBucket = function() {
  if(TreeLogicYellow.treevalue > 0){
    TreeLogicYellow.bucketvalue += 1;
  }
  return TreeLogicYellow.bucketvalue;
};
scope.twoBucket = function() {
  if(TreeLogicYellow.treevalue > 1){
    TreeLogicYellow.bucketvalue += 2;
  } else {
    TreeLogicYellow.bucketvalue = 10;
  }
  return TreeLogicYellow.bucketvalue;
};
scope.threeBucket = function() {
  if(TreeLogicYellow.treevalue > 2){
    TreeLogicYellow.bucketvalue += 3;
  } else {
    TreeLogicYellow.bucketvalue = 10;
  }
  return TreeLogicYellow.bucketvalue;
};
scope.fourBucket = function() {
  if(TreeLogicYellow.treevalue > 3){
    TreeLogicYellow.bucketvalue += 4;
  } else {
    TreeLogicYellow.bucketvalue = 10;
  }
  return TreeLogicYellow.bucketvalue;
};
scope.interpretSpinnerBucket = function() {
  console.log("in spinner interpreter for buckets")
  var spin = Spin.spinVal;
  if (spin == 'Spill') {
    console.log("spinner is Spill")
    return TreeLogicYellow.spillBucket()
  }
  else if (spin == 'Bird') {
    console.log("spinner is Bird")
    return TreeLogicYellow.birdBucket();
  }
  else if (spin == '1') {
    console.log("spinner is 1")
    return TreeLogicYellow.oneBucket();
  }
  else if (spin == '2') {
    console.log("spinner is 2")
    return TreeLogicYellow.twoBucket();
  }
  else if (spin == '3') {
    console.log("spinner is 3")
    return TreeLogicYellow.threeBucket();
  }
  else {
    console.log("spinner is 4")
    return TreeLogicYellow.fourBucket();
  }
};
scope.newBucketVal = TreeLogicYellow.interpretSpinnerBucket();

})(TreeLogicYellow);
