TreeLogicPink = {
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
    if(TreeLogicPink.treevalue <= 8){
      TreeLogicPink.treevalue += 2;
    } else {
      TreeLogicPink.treevalue = 10;
    };
    return TreeLogicPink.treevalue;
  };
  scope.birdTree = function() {
    if(TreeLogicPink.treevalue <= 9){
      TreeLogicPink.treevalue += 1;
      //TreeLogicPink.bucketvalue += 1;
    } else {
      TreeLogicPink.treevalue = 10;
    };
    return TreeLogicPink.treevalue;
  };
  scope.oneTree = function() {
    if(TreeLogicPink.treevalue > 0){
      TreeLogicPink.treevalue -= 1;
    }
    return TreeLogicPink.treevalue;
  };
  scope.twoTree = function() {
    if(TreeLogicPink.treevalue > 1){
      TreeLogicPink.treevalue -= 2;
    } else {
      TreeLogicPink.treevalue = 0;
    }
    return TreeLogicPink.treevalue;
  };
  scope.threeTree = function() {
    if(TreeLogicPink.treevalue > 2){
      TreeLogicPink.treevalue -= 3;
    } else {
      TreeLogicPink.treevalue = 0;
    }
    return TreeLogicPink.treevalue;
  };
  scope.fourTree = function() {
    if(TreeLogicPink.treevalue > 3){
      TreeLogicPink.treevalue -= 4;
    } else {
      TreeLogicPink.treevalue = 0;
    }
    return TreeLogicPink.treevalue;
  };
  scope.interpretSpinnerTree = function() {
    console.log("in spinner interpreter for trees")
  	var spin = Spin.spinVal;
  	if (spin == 'Spill') {
      console.log("spinner is Spill")
  		return TreeLogicPink.spillTree()
  	}
  	else if (spin == 'Bird') {
      console.log("spinner is Bird")
  		return TreeLogicPink.birdTree();
  	}
    else if (spin == '1') {
      console.log("spinner is 1")
      return TreeLogicPink.oneTree();
    }
    else if (spin == '2') {
      console.log("spinner is 2")
      return TreeLogicPink.twoTree();
    }
    else if (spin == '3') {
      console.log("spinner is 3")
      return TreeLogicPink.threeTree();
    }
    else {
      console.log("spinner is 4")
      return TreeLogicPink.fourTree();
    }
  };
  scope.newTreeVal = TreeLogicPink.interpretSpinnerTree();


// UPDATE BUCKET VALUE

scope.spillBucket = function() {
  if(TreeLogicPink.treevalue <= 8){
    TreeLogicPink.bucketvalue -= 2;
  } else {
    TreeLogicPink.bucketvalue -= 1;
  };
  return TreeLogicPink.bucketvalue;
};
scope.birdBucket = function() {
  if(TreeLogicPink.treevalue <= 9){
    TreeLogicPink.bucketvalue -= 1;
    //TreeLogicPink.bucketvalue += 1;
  };
  return TreeLogicPink.bucketvalue;
};
scope.oneBucket = function() {
  if(TreeLogicPink.treevalue > 0){
    TreeLogicPink.bucketvalue += 1;
  }
  return TreeLogicPink.bucketvalue;
};
scope.twoBucket = function() {
  if(TreeLogicPink.treevalue > 1){
    TreeLogicPink.bucketvalue += 2;
  } else {
    TreeLogicPink.bucketvalue = 10;
  }
  return TreeLogicPink.bucketvalue;
};
scope.threeBucket = function() {
  if(TreeLogicPink.treevalue > 2){
    TreeLogicPink.bucketvalue += 3;
  } else {
    TreeLogicPink.bucketvalue = 10;
  }
  return TreeLogicPink.bucketvalue;
};
scope.fourBucket = function() {
  if(TreeLogicPink.treevalue > 3){
    TreeLogicPink.bucketvalue += 4;
  } else {
    TreeLogicPink.bucketvalue = 10;
  }
  return TreeLogicPink.bucketvalue;
};
scope.interpretSpinnerBucket = function() {
  console.log("in spinner interpreter for buckets")
  var spin = Spin.spinVal;
  if (spin == 'Spill') {
    console.log("spinner is Spill")
    return TreeLogicPink.spillBucket()
  }
  else if (spin == 'Bird') {
    console.log("spinner is Bird")
    return TreeLogicPink.birdBucket();
  }
  else if (spin == '1') {
    console.log("spinner is 1")
    return TreeLogicPink.oneBucket();
  }
  else if (spin == '2') {
    console.log("spinner is 2")
    return TreeLogicPink.twoBucket();
  }
  else if (spin == '3') {
    console.log("spinner is 3")
    return TreeLogicPink.threeBucket();
  }
  else {
    console.log("spinner is 4")
    return TreeLogicPink.fourBucket();
  }
};
scope.newBucketVal = TreeLogicPink.interpretSpinnerBucket();

})(TreeLogicPink);
