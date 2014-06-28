// Declare simple app that contains random case filter
var simpleApp = angular.module('simpleApp', [])
.filter('randomCaseMessage', [function () {
    return function (message) {
        var randomMessage = [];
        angular.forEach(message.split(''), function(value) {
            if (Math.floor((Math.random() * 2))) {
                this.push(value.toUpperCase());
            } else {
                this.push(value.toLowerCase());
            }
        }, randomMessage);

        return randomMessage.join('');
    };
}]);
