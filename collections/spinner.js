Spinner = new Meteor.Collection('spinner');

Spinner.allow({
  insert: function(userId, doc) {
    return false;
  },
  update: function(userId, doc) {
    return false;
  },
  remove: function(userId, doc) {
    return false;
  }
});


// var playerOrder = {
// 	updateOrder: function() {
// 		this.playerList = this.playerList.push(this.playerList.shift());
// 	}
// 	current: function() {
// 		return this.playerList.shift();	
// 	}

// }

// PlayerOrder = new Meteor.Collection('playerOrder', {
//   transform: function (doc) {
//     var newInstance = Object.create(player);
//     return  _.extend(newInstance, doc);
//   }
// });

// PlayerOrder.allow({
//   insert: function(userId, doc) {
//     return false;
//   },
//   update: function(userId, doc) {
//     return false;
//   },
//   remove: function(userId, doc) {
//     return false;
//   }
// });