(function(angular) {
    'use strict';

    angular.module('poke')
        .factory('poke.Pokemon', ['$http', '$q', func]);

    function func($http, $q) {

        function Pokemon(data) {
            this.loaded = false;
            this.failed = false;
            this.name = data;


            this.init(data.resource_uri);
        }

        Pokemon.prototype.init = function(resource_uri) {
            $http.get('http://pokeapi.co/' + resource_uri).then(function(data) {
                this.loaded = true;
                console.log(data);
            }.bind(this));
        };

        return Pokemon;
    }
})(angular);
