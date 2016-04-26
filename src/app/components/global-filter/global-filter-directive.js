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

        function GlobalFilterController($scope, MockAPI, UserSelections) {

            var gfc = this;

            // This function runs nonstop. Is that bad?
            gfc.message = function message() {

                var browserStatus = {
                    chrome: $scope.chromeSelected,
                    ie: $scope.ieSelected,
                    safari: $scope.safariSelected,
                    firefox: $scope.firefoxSelected,
                    "chrome-mobile": $scope.chromeMobileSelected,
                    androidwebkit: $scope.androidwebkitSelected,
                    "mobile-safari": $scope.mobileSafariSelected
                };

                var selectedBrowsers = Object.keys(browserStatus)
                    .filter(function rejectFalses(key) {

                        return !!browserStatus[key];

                    });

                UserSelections.setData(selectedBrowsers);

                gfc.paramForService = (!selectedBrowsers.length || selectedBrowsers.length === 7) ? [] : selectedBrowsers;

                MockAPI.get({ browser: gfc.paramForService })
                    .then(function updateData(result) {

                        gfc.data = result;

                    });

                return selectedBrowsers;

            };

        }

    }

})();
