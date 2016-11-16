angular.module('starter.services', [])

.factory('Category', function CategoryFactory($http){
    return {
        Categories: function(){
            return $http({method: 'GET', url:'data.json'});
        },
        Category: function(id){
//            var category={};
//            this.Categories()
//            .then(function(response){
//                var categories = response.data.books;
//                var title;
//                for (var i=0; i<categories.length; i++){
//                    if(categories[i]._id == id){
//                        category = categories[i];
//                        console.log(category);
//                    }
//                }
//                return category;
//            }), function(response){
//                console.log("Error!");
//            };
            return $http({method: 'GET', url:'data.json'});
        }
    }
})

.factory('Product', function ProductFactory($http){
    return {
        Products: function(){
            return $http({method: 'GET', url:'data.json'});
        },
        Product: function(id){
//            var book={};
//            this.Products()
//            .then(function(response){
//                var details = response.data.books;
//                var title;
//                for (var i=0; i<details.length; i++){
//                    if(details[i]._id == id){
//                        book = details[i];
//                        console.log(book);
//                    }
//                }
//                return book;
//            }), function(response){
//                console.log("Error!");
//            };
            return $http({method: 'GET', url:'data.json'});
        }
    }
})

//.factory('Chats', function() {
//  // Might use a resource here that returns a JSON array
//
//  // Some fake testing data
//  var chats = [{
//    id: 0,
//    name: 'Ben Sparrow',
//    lastText: 'You on your way?',
//    face: 'img/ben.png'
//  }, {
//    id: 1,
//    name: 'Max Lynx',
//    lastText: 'Hey, it\'s me',
//    face: 'img/max.png'
//  }, {
//    id: 2,
//    name: 'Adam Bradleyson',
//    lastText: 'I should buy a boat',
//    face: 'img/adam.jpg'
//  }, {
//    id: 3,
//    name: 'Perry Governor',
//    lastText: 'Look at my mukluks!',
//    face: 'img/perry.png'
//  }, {
//    id: 4,
//    name: 'Mike Harrington',
//    lastText: 'This is wicked good ice cream.',
//    face: 'img/mike.png'
//  }];
//
//  return {
//    all: function() {
//      return chats;
//    },
//    remove: function(chat) {
//      chats.splice(chats.indexOf(chat), 1);
//    },
//    get: function(chatId) {
//      for (var i = 0; i < chats.length; i++) {
//        if (chats[i].id === parseInt(chatId)) {
//          return chats[i];
//        }
//      }
//      return null;
//    }
//  };
//});
