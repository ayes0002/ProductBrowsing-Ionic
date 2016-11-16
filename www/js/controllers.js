angular.module('starter.controllers', ['ionic-ratings'])

.controller('CategoryCtrl', ['$scope', 'Category', '$stateParams', function($scope, Category, $stateParams){
    console.log("my category id in the CategoryCtrl is: ", $stateParams.id);
    var book = [];
    var ratings = [];
    var bookR = {};
    $scope.productId = $stateParams.id;
    Category.Categories()
    .then(function(response){
        var books = response.data.books;
        for (var i=0; i<books.length; i++){
            booksR = {
                id: books[i]._id,
                rating: books[i].rating
            }
            ratings.push(booksR);
            if(books[i].cat_id == $scope.productId){
                book.push(books[i]);
            }
        }
        console.log(ratings);
        if (typeof(Storage) !== "undefined") {
            for (var k=0; k<ratings.length; k++){
                localStorage.setItem(ratings[k].id, ratings[k].rating);   
            }
        } else {
            alert("Local Storage not supported");
        }
        $scope.category = book;
    }), function(response){
        console.log("Error");
    }
}])

.controller('DetailsCtrl', ['$scope', '$stateParams', 'Product', function( $scope, $stateParams, Product){
    
    console.log("my category id in the Details Ctrl is: ", $stateParams.book_id);
    $scope.id = $stateParams.book_id;
    $scope.ratingsObject = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: 'rgb(200, 200, 100)',
        iconOffColor:  'rgb(0, 0, 0)',
        rating:  localStorage.getItem($scope.id),
        minRating:1,
        callback: function(rating) {
            $scope.ratingsCallback(rating);
        }
    };
    console.log($scope.ratingsObject.rating);

    $scope.ratingsCallback = function(rating) {
        console.log('Selected rating is : ', rating);
        localStorage.setItem($scope.id, rating);
    };
    $scope.book = Product.Product($scope.id)
    .then(function(response){
        $scope.book = {};
        var bookRating = {};
        var details = response.data.books;
        var title;
        for (var i=0; i<details.length; i++){
            if(details[i]._id == $scope.id){
                $scope.book = details[i];
            }
        }
    }), function(response){
        console.log("Error");
    }
}]);