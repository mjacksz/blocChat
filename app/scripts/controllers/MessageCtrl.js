(function() {
    function MessageCtrl(Message, $uibModal) {
        //this.Rooms = Room.all;
        console.log("Inside MessageCtrl");
        
        this.open = function() {
        $uibModal.open({
          templateUrl: '/templates/Message.html',
          controller: 'MessageCtrl',
          controllerAs: "message"
        });
    };
    }

    angular
        .module('blocChat')
        .controller('MessageCtrl', ["Message" ,"$uibModal", MessageCtrl]);
})();