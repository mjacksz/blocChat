(function() {
  function Room($firebaseArray) {
    var Room = {};
    
    // Both lines are needed
    var ref = firebase.database().ref().child("rooms"); // A reference to the Firebase database ?
    var rooms = $firebaseArray(ref);   

    Room.all = rooms;

    //Room.add = function(room) {
        //Use the firebase method $add here
        // rooms.$add(room).then(function(ref) 
        // rooms.$add(room)
    //})
     
    
    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]); // Inject the $firebaseArray service
})();