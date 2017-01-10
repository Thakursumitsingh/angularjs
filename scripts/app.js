 var app = angular.module('app',['ngRoute']);
 
 app.config( function($routeProvider, $locationProvider){
     $routeProvider
            
		.when('/product', {
			templateUrl: 'modules/templates/products.html',
			controller: 'productController'
		})
           
                $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
 });
 
 
    app.service('MetaService', function() {
       var title = '';
       var metaKeywords = '';
       return {
          set: function(newTitle, newKeywords) {
              metaKeywords = newKeywords;
              title = newTitle; 
          },
          metaTitle: function(){ return title; },
          metaKeywords: function() { return metaKeywords; }
       }
    });

   app.controller('myCtrl',function($scope,$rootScope,MetaService){
      $rootScope.metaservice = MetaService;
      $rootScope.metaservice.set("IndiaMART Mobile Site - Products Seller","noindex,nofollow");
   });
   
   
  