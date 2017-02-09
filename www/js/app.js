// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material','ion-affix', 'ionMdInput', 'ngCordova', 'ngStorage']);

app.run(function($ionicPlatform, $rootScope) {
	$ionicPlatform.ready(function() {
	    if (window.cordova && window.cordova.plugins.Keyboard) {
	    	cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	    	cordova.plugins.Keyboard.disableScroll(true);
	    }
	    if (window.StatusBar) {
	    	StatusBar.styleDefault();
	    }
	});
})


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.servicios', {
        url: '/servicios',
        views: {
            'menuContent': {
                templateUrl: 'templates/servicios.html',
                controller: 'ServiciosCtrl'
            }
        }
    })

    .state('app.ink', {
        url: '/ink',
        views: {
            'menuContent': {
                templateUrl: 'templates/ink.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.motion', {
        url: '/motion',
        views: {
            'menuContent': {
                templateUrl: 'templates/motion.html',
                controller: 'MotionCtrl'
            }
        }
    })

    .state('app.iglesias', {
        url: '/iglesias',
        views: {
            'menuContent': {
                templateUrl: 'templates/iglesias.html',
                controller: 'IglesiasCtrl'
            }
        }
    })

	.state('app.mapaIglesia', {
		url: '/mapaIglesia/:latitud/:longitud/:nombre',
		views: {
			'menuContent': {
				templateUrl: 'templates/mapaIglesia.html',
				controller: 'IglesiasCtrl',
				params:{
					 'latitud':null, 
					 'longitud':null,
					 'nombre': null
				}
			}
		}
	})
	
	.state('login', {
        url: '/login',        
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
        
        
    })
	
	.state('app.mapaPunto', {
		url: '/mapaPunto/:latitud/:longitud/:nombre',
		views: {
			'menuContent': {
				templateUrl: 'templates/mapaPunto.html',
				controller: 'PuntosCtrl',
				params:{
					 'latitud':null, 
					 'longitud':null,
					 'nombre': null
				}
			}
		}
	})

    .state('app.puntos', {
        url: '/puntos',
        views: {
            'menuContent': {
                templateUrl: 'templates/puntos.html',
                controller: 'PuntosCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/iglesias');
});
