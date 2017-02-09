angular.module('sentraMobile').controller('GeoProveedoresCtrl', function($scope, $compile, $controller, $state,$stateParams, eTicketService){
	$scope.listaConvenios = "";
    angular.extend(this, $controller('LoadingCtrl', {$scope: $scope}));
    
    $scope.setListaConvenios = function(data){
    	
		if(data!= null){
			$scope.listaConvenios = data;
			console.debug($scope.listaConvenios);
		}
	}
	
    
    $scope.listarProveedores= function(){
    	console.info("iniciando listar proveedores");
    	eTicketService.listarProveedores($scope.setListaConvenios);
    	
    }
    $scope.mostrarMapa= function(latitud, longitud, nombre){
    	var param = { 'latitud':latitud, 'longitud':longitud, 'nombre':nombre };
    	$state.go('app.mostrarMapa',param);
    	
    }
    $scope.generarMapa = function(data){
    	 var mapOptions = {
 		        // the Teide ;-)
    			 
 		        center: {lat: parseFloat($stateParams.latitud), lng: parseFloat($stateParams.longitud)},
 		        zoom: 20,
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
 		      var contentString = "<div><a ng-click='clickTest()'>Restaurante Alcusa (Convenio SEnTRA)!</a></div>";
 		        var compiled = $compile(contentString)($scope);
 		        var infowindow = new google.maps.InfoWindow({
 		            content: compiled[0]
 		        });
 		        var marker = new google.maps.Marker({
 		            position: myLatlng,
 		            map: map,
 		            title: 'Restaurante Alcusa (Convenio SEnTRA)'
 		        });
 		        console.debug(marker);
 		        google.maps.event.addListener(marker, 'click', function() {
 		            infowindow.open(map,marker);
 		        });
 		        
 		      $scope.map = map;
 		     $scope.nombreRestaurant = $stateParams.nombre;
    }
    
    
    	
	});