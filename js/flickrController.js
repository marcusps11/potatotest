angular
.module('flickrApp')
.controller('FlickrController', FlickrController);

FlickrController.$inject = ['$http']


function FlickrController($http){
  var self = this 
  self.photo = null
  self.all = []
  self.images = []

  this.getPhoto = function(){
    console.log('am')
    $http
    .jsonp('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK')
    .then(function(response){
      var data = response.data.items
      angular.forEach(data, function(data, key){
        self.images.push(data.media)
        self.all.push(data)
      })

    })  
  }

  self.showPhoto = function(photo){
    self.photo = photo.flickr.media.m
    console.log(self.photo)
   }

  
 }

