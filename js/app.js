'use strict';
(function () {
  angular
      .module('fsApp', [

        // Modules
        'ui.router',
        'ngSanitize',
        'angular.filter',
        'ui.materialize',

        // Components
        'fsApp.navigation',
        'fsApp.footer',
        'fsApp.home',
        'fsApp.blackboard',
        'fsApp.info',
        'fsApp.jobs',
        'fsApp.lostfound',
        'fsApp.mensa',
        'fsApp.mvv',
        'fsApp.news',
        'fsApp.rooms',
        'fsApp.timetable',
        'fsApp.editor',

        // Directives
        'fsApp.developer.directive',

        // Services
        'fsApp.data.service',
        'fsApp.filter.service'
      ])
      .config(FsAppConfig);

  function FsAppConfig($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
          url: "/home",
          views: {
            "navigation": {
              templateUrl: "components/navigation/navigation.html",
              controller: "NavController as nav"
            },
            "content": {
              templateUrl: "components/home/home.html",
              controller: "HomeController as home"
            },
            "footer": {
              templateUrl: "components/footer/footer.html",
              controller: "FooterController as footer"
            }
          }
        })
        .state('blackboard', {
          url: "/blackboard",
          views: {
            "navigation": {
              templateUrl: "components/navigation/navigation.html",
              controller: "NavController as nav"
            },
            "content": {
              templateUrl: "components/blackboard/blackboard.html",
              controller: "BlackboardController as blackboard"
            },
            "footer": {
              templateUrl: "components/footer/footer.html",
              controller: "FooterController as footer"
            }
          }
        })
        .state('info', {
          url: "/info",
          views: {
            "navigation": {
              templateUrl: "components/navigation/navigation.html",
              controller: "NavController as nav"
            },
            "content": {
              templateUrl: "components/info/info.html",
              controller: "InfoController as info"
            },
            "footer": {
              templateUrl: "components/footer/footer.html",
              controller: "FooterController as footer"
            }
          }
        })
        .state('jobs', {
          url: "/jobs",
          views: {
            "navigation": {
              templateUrl: "components/navigation/navigation.html",
              controller: "NavController as nav"
            },
            "content": {
              templateUrl: "components/jobs/jobs.html",
              controller: "JobsController as jobs"
            },
            "footer": {
              templateUrl: "components/footer/footer.html",
              controller: "FooterController as footer"
            }
          }
        })
        .state('lostfound', {
          url: "/lostfound",
          views: {
            "navigation": {
              templateUrl: "components/navigation/navigation.html",
              controller: "NavController as nav"
            },
            "content": {
              templateUrl: "components/lostfound/lostfound.html",
              controller: "LostFoundController as lostfound"
            },
            "footer": {
              templateUrl: "components/footer/footer.html",
              controller: "FooterController as footer"
            }
          }
        })
        .state('mensa', {
          url: "/mensa",
          views: {
            "navigation": {
              templateUrl: "components/navigation/navigation.html",
              controller: "NavController as nav"
            },
            "content": {
              templateUrl: "components/mensa/mensa.html",
              controller: "MensaController as mensa"
            },
            "footer": {
              templateUrl: "components/footer/footer.html",
              controller: "FooterController as footer"
            }
          }
        })
        .state('mvv', {
          url: "/mvv",
          views: {
            "navigation": {
              templateUrl: "components/navigation/navigation.html",
              controller: "NavController as nav"
            },
            "content": {
              templateUrl: "components/mvv/mvv.html",
              controller: "MvvController as mvv"
            },
            "footer": {
              templateUrl: "components/footer/footer.html",
              controller: "FooterController as footer"
            }
          }
        })
        .state('news', {
          url: "/news",
          views: {
            "navigation": {
              templateUrl: "components/navigation/navigation.html",
              controller: "NavController as nav"
            },
            "content": {
              templateUrl: "components/news/news.html",
              controller: "NewsController as news"
            },
            "footer": {
              templateUrl: "components/footer/footer.html",
              controller: "FooterController as footer"
            }
          }
        })
        .state('rooms', {
          url: "/rooms",
          views: {
            "navigation": {
              templateUrl: "components/navigation/navigation.html",
              controller: "NavController as nav"
            },
            "content": {
              templateUrl: "components/rooms/rooms.html",
              controller: "RoomsController as rooms"
            },
            "footer": {
              templateUrl: "components/footer/footer.html",
              controller: "FooterController as footer"
            }
          }
        })
        .state('timetable', {
          url: "/timetable",
          views: {
            "navigation": {
              templateUrl: "components/navigation/navigation.html",
              controller: "NavController as nav"
            },
            "content": {
              templateUrl: "components/timetable/timetable.html",
              controller: "TimetableController as timetable"
            },
            "footer": {
              templateUrl: "components/footer/footer.html",
              controller: "FooterController as footer"
            }
          }
        })
        .state('editor', {
          url: "/editor",
          views: {
            "navigation": {
              templateUrl: "components/navigation/navigation.html",
              controller: "NavController as nav"
            },
            "content": {
              templateUrl: "components/timetable/editor/editor.html",
              controller: "TimetableEditorController as editor"
            },
            "footer": {
              templateUrl: "components/footer/footer.html",
              controller: "FooterController as footer"
            }
          }
        });
  }
})();