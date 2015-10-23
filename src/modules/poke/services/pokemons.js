(function(angular) {
    'use strict';

    angular.module('poke')
        .factory('poke.services.pokemons', ['$http', '$q', 'poke.Pokemon', func]);

    function func($http, $q, Pokemon) {
        var allPromise = null;

        var listAll = function() {
            if (allPromise) {
                return allPromise;
            }

            var deferred = $q.defer();

            $http.get('http://pokeapi.co/api/v1/pokedex/1/').then(function(result) {
                var data = result.data.pokemon.map(function(d) {
                    return new Pokemon(d);
                });

                deferred.resolve(data);
            });

            return (allPromise = deferred.promise);
        };

        return {
            listAll: listAll
        };
    }
})(angular);
