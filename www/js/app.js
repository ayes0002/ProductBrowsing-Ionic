// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.fiction', {
    url: '/fiction',
    params: {
        id: 1
    },
    views: {
      'tab-fiction': {
        templateUrl: 'templates/tab-fiction.html',
        controller: 'CategoryCtrl'
      }
    }
  })

  .state('tab.non-fiction', {
      url: '/non-fiction',
      params: {
        id: 2
      },
      views: {
        'tab-non-fiction': {
          templateUrl: 'templates/tab-nonfiction.html',
          controller: 'CategoryCtrl'
        }
      }
    })
    .state('tab.history', {
      url: '/history',
      params: {
        id: 3
      },
      views: {
        'tab-history': {
          templateUrl: 'templates/tab-history.html',
          controller: 'CategoryCtrl'
        }
      }
    })

  .state('tab.science', {
    url: '/science',
    params: {
        id: 4
    },
    views: {
      'tab-science': {
        templateUrl: 'templates/tab-science.html',
        controller: 'CategoryCtrl'
      }
    }
  })
  
    .state('tab.fiction.id',{
        url:'/:book_id',
        views: {
            'tab-fiction@tab': {
                templateUrl: "templates/details.html",
                controller: "DetailsCtrl"   
            }
        }
    })
      
    .state('tab.non-fiction.id',{
        url:'/:book_id',
        views: {
            'tab-non-fiction@tab': {
                templateUrl: "templates/details.html",
                controller: "DetailsCtrl"   
            }
        }
    })
      
    .state('tab.history.id',{
        url:'/:book_id',
        views: {
            'tab-history@tab': {
                templateUrl: "templates/details.html",
                controller: "DetailsCtrl"   
            }
        }
    })
            
    .state('tab.science.id',{
        url:'/:book_id',
        views: {
            'tab-science@tab': {
                templateUrl: "templates/details.html",
                controller: "DetailsCtrl"   
            }
        }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/fiction');

});
