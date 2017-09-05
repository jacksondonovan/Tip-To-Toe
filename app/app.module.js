var app = angular.module('app',["ngRoute"])


app.controller('homedisplay',function($scope){
  const vm = this;
  vm.jack = 'jack'
  $scope.message = 'JACKSON DONOVAN'
  console.log('JACKIE')
})

app.controller('carouselhelper',function($scope){
  $scope.carouselTitle = 'Click Through Our Featured Styles'
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
