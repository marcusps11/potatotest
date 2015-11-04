angular
.module('flickrApp')
.controller('FlickrController', FlickrController);

FlickrController.$inject = ['$http']


function FlickrController($http){
  var self = this 
  self.photo = null
  self.tags = null
  self.title = null
  self.all = []
  self.author_id = null
  self.date = null;
  self.link = null


  self.getDate = function(data){
    var pub = data.published
    var d 
    var monthMinus
    var month
    var day
    var year
    var hours
    var minutes

    for (var i = 0; i < pub.length; i++) {
      d = new Date(data.published)
      monthMinus = d.getMonth()
      month = (monthMinus + 1)
      day = d.getDate();
      year = d.getFullYear()
      hours = d.getHours()
      minutes = d.getMinutes()
      
      var date = {
        date: month,
        day: day,
        year:year,
        hours: hours,
        minutes, minutes
      }
    }
    self.date = date
    self.newObject(data, date)
  }

  self.getPhoto = function(){
    $http
    .jsonp('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK')
    .then(function(response){
      var data = response.data.items
      angular.forEach(data, function(data, key){
      self.getDate(data)
      })

    })  
  }

  self.showPhoto = function(photo){
    self.photo = photo.flickr.media.m
    self.tags = photo.flickr.tags
    self.title = photo.flickr.title
    self.author = photo.flickr.author_id
    self.link = photo.flickr.link
    // console.log(self.photo)
  }

  self.newObject = function(data, date){
    data['key3'] = date
    self.all.push(data)

  }
  
}

