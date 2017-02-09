angular.module('starter').controller('IglesiasCtrl', function ($scope, $compile, $stateParams,$state, ionicMaterialMotion) {

    var reset = function() {
        var inClass = document.querySelectorAll('.in');
        for (var i = 0; i < inClass.length; i++) {
            inClass[i].classList.remove('in');
            inClass[i].removeAttribute('style');
        }
        var done = document.querySelectorAll('.done');
        for (var i = 0; i < done.length; i++) {
            done[i].classList.remove('done');
            done[i].removeAttribute('style');
        }
        var ionList = document.getElementsByTagName('ion-list');
        for (var i = 0; i < ionList.length; i++) {
            var toRemove = ionList[i].className;
            if (/animate-/.test(toRemove)) {
                ionList[i].className = ionList[i].className.replace(/(?:^|\s)animate-\S*(?:$|\s)/, '');
            }
        }
    };

    $scope.ripple = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-ripple';
        setTimeout(function() {
            ionicMaterialMotion.ripple();
        }, 500);
    };

    $scope.fadeSlideInRight = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in-right';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideInRight();
        }, 500);
    };

    $scope.fadeSlideIn = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideIn();
        }, 500);
    };

    $scope.blinds = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
        setTimeout(function() {
            ionicMaterialMotion.blinds(); // ionic.material.motion.blinds(); //ionicMaterialMotion
        }, 500);
    };
	
	//MAPAS IGLESIA
	
	    $scope.mostrarMapa= function(latitud, longitud, nombre){
		
    	var param = { 'latitud':latitud, 'longitud':longitud, 'nombre':nombre };
    	$state.go('app.mapaIglesia',param);
    	
    }
    $scope.generarMapa = function(){
		
    	 var mapOptions = {
 		        // the Teide ;-)
    			 
 		        center: {lat: parseFloat($stateParams.latitud), lng: parseFloat($stateParams.longitud)},
 		        zoom: 16,
 		        mapTypeId: google.maps.MapTypeId.ROADMAP,
 		        mapTypeControlOptions: {
 		          mapTypeIds: []
 		        },
 		        panControl: false,
 		        streetViewControl: false,
 		        zoomControlOptions: {
 		          style: google.maps.ZoomControlStyle.SMALL
 		        }
 		      };
 		      var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 			  var myLatlng = new google.maps.LatLng(parseFloat($stateParams.latitud),parseFloat($stateParams.longitud));
 		      var contentString = "<div><a ng-click='clickTest()'>Iglesia Evangelica Pentecostal</a></div>";
 		        var compiled = $compile(contentString)($scope);
 		        var infowindow = new google.maps.InfoWindow({
 		            content: compiled[0]
 		        });
 		        var marker = new google.maps.Marker({
 		            position: myLatlng,
 		            map: map,
 		            title: 'Iglesia'
 		        });
 		        
 		        google.maps.event.addListener(marker, 'click', function() {
 		            infowindow.open(map,marker);
 		        }); 
 		      $scope.map = map;
 		     $scope.nombreIglesia = $stateParams.nombre;
    }
	//FIN MAPA

   // 

});