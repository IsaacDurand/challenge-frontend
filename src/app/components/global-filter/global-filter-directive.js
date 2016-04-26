(function GlobalFilterDirective() {

    "use strict";

    angular
        .module("va.challenge.frontend")
        .directive("globalFilter", GlobalFilter);

    function GlobalFilter() {

        var config = {
            restict: "E",
            templateUrl: "app/components/global-filter/global-filter.html",
            controller: GlobalFilterController,
            controllerAs: "gfc"
        };

        return config;

        function GlobalFilterController($scope, MockAPI) {

            var gfc = this;
            // var promise = MockAPI.get({ browser: ["ie"] });
            // promise.then(function f(result) {
            //
            //     gfc.data = result.length;
            //
            // });

            gfc.message = function message() {

                var browsersSelected = {
                    chrome: $scope.chromeSelected,
                    ie: $scope.ieSelected,
                    safari: $scope.safariSelected,
                    firefox: $scope.firefoxSelected,
                    "chrome-mobile": $scope.chromeMobileSelected,
                    androidwebkit: $scope.androidwebkitSelected,
                    "mobile-safari": $scope.mobileSafariSelected
                };

                return Object.keys(browsersSelected)
                    .filter(function rejectFalses(key) {

                        return !!browsersSelected[key];

                    });

            };

            var param = {};

        }

    }

})();
