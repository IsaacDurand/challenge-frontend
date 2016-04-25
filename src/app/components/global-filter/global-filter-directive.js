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
            var promise = MockAPI.get({ browser: ["ie"] });
            promise.then(function f(result) {

                // console.log("result", result);
                gfc.data = result.length;

            });

            gfc.foo = "bar";

        }

    }

})();
