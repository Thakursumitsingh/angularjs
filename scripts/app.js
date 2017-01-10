 var app = angular.module('app',[]);
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