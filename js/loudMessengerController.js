angular.module('selfBootstrappingModule.controllers.loudMessenger', [])
.filter('loudMessage', [function(dateTime) {
    return function(message) {
        return message.toUpperCase() + "!!";
    }
}])
