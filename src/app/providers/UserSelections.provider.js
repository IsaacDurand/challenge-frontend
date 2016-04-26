// See http://stackoverflow.com/questions/16935024/how-to-use-a-controller-for-two-directives

(function UserSelectionsProvider() {

    "use strict";

    angular
        .module("va.challenge.frontend")
        .factory("UserSelections", UserSelections);

    function UserSelections(MockAPI) {

        var data;
        var selectedMetrics;

        return {
            getSelectedMetrics: function getSelectedMetrics() {

                return selectedMetrics;

            },
            setSelectedMetrics: function setSelectedMetrics(metrics) {

                selectedMetrics = metrics;

            },
            getData: function getData() {

                return data;

            },
            setData: function setData(browsers) {

                var list = (!browsers.length || browsers.length === 7) ? [] : browsers;

                MockAPI.get({ browser: list })
                    .then(function updateData(result) {

                        data = result;

                    });

                // ** How to give this service access to the other service?

            }
        };

    }

})();
