angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
      return $http({
        method: 'POST',
        data: user,
        url: '/api/login'
      });
    },

    getFriends: function(user) {
      console.log("trying");
      return $http({
        method: 'GET',
        data: user,
        url: '/api/profiles'
      })
        .then(function( response ) {
    		return response.data;
    	});
    }
  };
});
