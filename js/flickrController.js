angular
.module('flickrApp')
.controller('FlickrController', FlickrController);

FlickrController.$inject = ['$http']


function FlickrController($http){
  var self = this 
  self.photo = null
  self.tags = null
  self.all = []
  self.images = []
  self.term = null

self.search = function(term){
  console.log(term)
  self.term = term


  var d = new Date(term)
  var n = d.getDate();
  var year = d.getFullYear()
  var month = d.getMonth()
  console.log(n)
  console.log(year)
  console.log(month)
  console.log(monthString)


}

  this.getPhoto = function(){
    console.log('am')
    $http
    .jsonp('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK')
    .then(function(response){
      var data = response.data.items
      angular.forEach(data, function(data, key){
        self.images.push(data.media)
        console.log(data)
        self.all.push(data)
      })

    })  
  }

  self.showPhoto = function(photo){
    self.photo = photo.flickr.media.m
    self.tags = photo.flickr.tags
    console.log(self.photo)
   }

  
 }

