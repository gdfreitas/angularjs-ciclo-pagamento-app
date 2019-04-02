(function () {

    angular
        .module('cicloPagamento')
        .factory('handleResponseError', HandleResponseErrorFactory)

    HandleResponseErrorFactory.$inject = ['$q', '$window', 'consts'];

    function HandleResponseErrorFactory($q, $window, consts) {

        function responseError(errorResponse) {

            if (errorResponse.status === 403) {
                localStorage.removeItem(consts.userKey)
                $window.location.href = '/'
            }

            return $q.reject(errorResponse)
        }

        return { responseError }
    }

})();