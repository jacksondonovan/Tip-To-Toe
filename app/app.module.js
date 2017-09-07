var app = angular.module('app',["ngRoute"])


app.controller('homedisplay',function($scope){
  $scope.message = 'JACKSON DONOVAN'
  console.log('JACKIE')
})

app.controller('carouselhelper',function($scope){
  $scope.carouselTitle = 'Click Through Our Featured Styles'
})

app.controller('dynamichours',function($scope){
  $scope.hours = 'Hours'
  $scope.today = new Date();
  console.log($scope.today.getDate());
  $scope.whichDay = function(day){
    switch (day) {
      case 0:
        $scope.displayHours = '10AM–5:30PM'
        break;
      case 1:
        $scope.displayHours = '9:30AM–7:00PM'
        break;
      case 2:
        $scope.displayHours = '9:30AM–7:00PM'
        break;
      case 3:
        $scope.displayHours = '9:30AM–7:00PM'
        break;
      case 4:
        $scope.displayHours = '9:30AM–7:00PM'
        break;
      case 5:
        $scope.displayHours = '9:30AM–7:00PM'
        break;
      case 6:
        $scope.displayHours = '9:30AM–6:30PM'
        break;


      default: $scope.displayHours = '9:30AM–7:00PM'
    }
  }
  $scope.displayHours = $scope.whichDay($scope.today.getDate());
})

app.config(["$routeProvider",function($routeProvider){
  $routeProvider
   .when('/home',{
     templateUrl: '/templates/home.hbs',
     contoller: 'homedisplay'
   })
   .when('/about',{
     templateUrl: '/templates/about.hbs',
     controller:'dynamichours'
   })
   .when('/photos',{
     templateUrl: '/templates/photos.hbs',
     controller: 'carouselhelper'
   })
   .when('/contact',{
     templateUrl: '/templates/contact.hbs',
     controller: 'dynamichours'
   })
   .otherwise({
     redirectTo: '/home'
   })
}])
