(function() {
    function MessageCtrl(Message, $uibModal) {
        //this.Rooms = Room.all;
        console.log("Inside MessageCtrl " + Message);
        console.log("Inside MessageCtrl " + $uibModal);
        
        this.open = function() {
        $uibModal.open({
          templateUrl: '/templates/Message.html',
          controller: 'MessageCtrl',
          controllerAs: "message"
          });
        console.log("MessageCtrl - after $uibModal.open ")
        };
    }

    angular
        .module('blocChat')
        .controller('MessageCtrl', ["Message" ,"$uibModal", MessageCtrl]);
})();