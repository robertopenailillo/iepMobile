app.controller('AppCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout) {
   
	
	
	
	// Form data for the login modal
    $scope.loginData = {};

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }

   /* var fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
        //location.href = 'https://twitter.com/satish_vr2011';
        window.open('https://twitter.com/satish_vr2011', '_blank');
    });*/

    // .fromTemplate() method
    var template = '<ion-popover-view>' +
                    '   <ion-header-bar>' +
                    '       <h1 class="title">Iglesia</h1>' +
                    '   </ion-header-bar>' +
                    '   <ion-content class="padding">' +
					'<label class="item item-input item-select">' +
                    '<div class="input-label">' +
                    '   País:' +
                    '</div>' +
                    '<select>' +
                    '   <option>Argentina</option>' +
					'   <option>Costa Rica</option>' +
                    '    <option selected>Chile</option>' +
                    '    <option>Peru</option>' +
                    '    <option>EEUU</option>' +
                    '    <option>España</option>' +
                    '</select>' +
					'</label>' +
					
						'<label class="item item-input item-select">' +
                    '<div class="input-label">' +
                    '   Ciudad:' +
                    '</div>' +
                    '<select>' +
                    '   <option>Valparaíso</option>' +
					'   <option>Viña del Mar</option>' +
                    '    <option selected>Peñablanca</option>' +
                    '    <option>Santiago</option>' +
                    '    <option>Concepcion</option>' +
                    '    <option>Teno</option>' +
                    '</select>' +
					'</label>' +
                    
                    '   </ion-content>' +
                    '</ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });
    $scope.closePopover = function () {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    });
});