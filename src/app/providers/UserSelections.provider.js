// See http://stackoverflow.com/questions/16935024/how-to-use-a-controller-for-two-directives

(function UserSelectionsProvider() {

    "use strict";

    angular
        .module("va.challenge.frontend")
        .factory("UserSelections", UserSelections);

    function UserSelections() {

        var data;

        return {
            getData: function getData() {

                return data;

            },
            setData: function setData(newData) {

                data = newData;

            }
        };

    }

})();
