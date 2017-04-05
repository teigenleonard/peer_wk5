var myApp = angular.module( 'myApp', []);

myApp.controller( 'ListingController', ['$scope', function($scope){
    $scope.dataArray = data;
    console.log($scope.dataArray);


}]);
