angular
.module('flickrApp')
.controller('FlickrController', FlickrController);

FlickrController.$inject = ['$http']


function FlickrController($http){
  var self = this 
  this.newPhoto = {}
  self.all = []


  this.getPhoto = function(){
    console.log('gettinghere')
    $http
    .jsonp('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK')
    .then(function(response){
      var data = response.data.items
      angular.forEach(data, function(data, key){
      console.log(key, data)
      self.all.push(data)


    })


    })
  }

 //  self.addPhoto = function(data){
 //    angular.forEach(data, function(data) {
 //      self.all.push(data);
 //    })
 //    // console.log(self.all)

 // }



}