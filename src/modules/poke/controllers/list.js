(function(angular) {
    'use strict';

    angular.module('poke')
        .controller('poke.controllers.list', ['$scope', 'poke.services.pokemons', func]);

    function func($scope, service) {

        service.listAll().then(function(result) {
            $scope.data = result;
        });

    }
})(angular);
