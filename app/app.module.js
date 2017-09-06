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

app.controller('dynamichours',function($scope){
  $scope.hours = 'Our Hours'
  $scope.today = new Date();
  $scope.displayHours = '9:30AM - 7:00PM';
  if($scope.today === 'Wednesday'){
    console.log('WOWOWOWOWOWOWOOWOWOWOWOWOWOWOWO')
  }
  // $scope.whichDay = function($scope.today){
  //   switch ($scope.today) {
  //     case 'Sunday':
  //       $scope.displayHours = '10AM–5:30PM'
  //       break;
  //     case 'Monday':
  //       $scope.displayHours = '9:30AM–7PM'
  //       break;
  //     case 'Tuesday':
  //       $scope.displayHours = '9:30AM–7PM'
  //       break;
  //     case 'Wednesday':
  //       $scope.displayHours = '9:30AM–7PM'
  //       break;
  //     case 'Thursday':
  //       $scope.displayHours = '9:30AM–7PM'
  //       break;
  //     case 'Friday':
  //       $scope.displayHours = '9:30AM–7PM'
  //       break;
  //     case 'Saturday':
  //       $scope.displayHours = '9:30AM–6:30PM'
  //       break;
  //     default: $scope.displayHours = '9:30AM–7PM'
  //   }
  // }
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
     templateUrl: '/templates/contact.hbs',
     controller: 'dynamichours'
   })
   .otherwise({
     redirectTo: '/home'
   })
}])
