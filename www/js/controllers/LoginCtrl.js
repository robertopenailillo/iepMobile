app.controller('LoginCtrl', function ($scope, $timeout, $stateParams, ionicMaterialInk,$state) {

  
    
    ionicMaterialInk.displayEffect();
	
	$scope.LogIn = function(user) {
    $state.go('app.iglesias');
  };

    //$scope.blinds();

});