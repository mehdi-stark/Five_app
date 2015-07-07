app.controller('allMomentsController', function ($scope, $rootScope, $cordovaFile) {
    if (!$rootScope.moments) {
        $cordovaFile.readAsText(cordova.file.dataDirectory, 'moments.json').then(

            function (result) {
                alert ("BON LA");
                if (typeof result == 'string') {
                    $rootScope.moments = JSON.parse(result);
                }
                else {
                    $rootScope.moments = result;
                }
            },
            function (err) {  });
    }
});