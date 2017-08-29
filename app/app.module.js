var app = angular.module('app',["ngRoute"])

// app.component('home',{
//   controller: function($scope){
//
//   },
//   templateUrl: '/templates/home.hbs'
// })

app.controller('homedisplay',function($scope){
  $scope.message = 'JACKSON DONOVAN'
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
     templateUrl: '/templates/photos.hbs'
   })
   .when('/contact',{
     templateUrl: '/templates/contact.hbs'
   })
   .otherwise({
     redirectTo: '/home'
   })
}])
