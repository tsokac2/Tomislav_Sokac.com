app.config( function($routeProvider, $locationProvider){
    $routeProvider
    .when("/home", {
        templateUrl: "view/home.html",
    })

    .when("/profile", {
        templateUrl: "view/profile.html",
    })

    .when("/experience", {
        templateUrl: "view/experience.html",
    })

    .when("/skills", {
        templateUrl: "view/skills.html",
    })

    .when("/projects", {
        templateUrl: "view/projects.html",
    }).

    otherwise( {
        redirectTo: "/home"
    })
     $locationProvider.html5Mode(true);
});
