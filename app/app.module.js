var app = angular.module('app',["ngRoute"])


app.controller('homedisplay',function($scope){
  const vm = this;
  vm.jack = 'jack'
  $scope.message = 'JACKSON DONOVAN'
  $scope.funny = function(){
    $scope.message = 'HAHA'
  }
  console.log('JACKIE')
})

app.controller('carouselhelper',function($scope){
  $scope.carouselTitle = 'Featured Styles'
})

app.config(["$routeProvider",function($routeProvider){
  $routeProvider
   .when('/home',{
     templateUrl: '/templates/home.hbs',
     contoller: 'homedisplay'
   })
   .when('/about',{
     templateUrl: '/templates/about.hbs'
   })
   .when('/photos',{
     templateUrl: '/templates/photos.hbs',
     controller: 'carouselhelper'
   })
   .when('/contact',{
     templateUrl: '/templates/contact.hbs'
   })
   .otherwise({
     redirectTo: '/home'
   })
}])
