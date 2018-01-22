angular
    .module('primeiraApp')
    .run(['$rootScope', 'consts', function ($rootScope, consts) {
        $rootScope.consts = consts
    }])
    .run(RouterRunProvider);

RouterRunProvider.$inject = ['$log', '$rootScope', '$http', '$location', '$window', 'auth'];

function RouterRunProvider($log, $rootScope, $http, $location, $window, auth) {
    validateUser();

    $rootScope.$on('$locationChangeStart', (event, next, current) => {
        $log.debug('$locationChangeStart');
        $log.debug(next);
        $log.debug(current);
        validateUser()
    });

    function validateUser() {
        const user = auth.getUser()
        const authPage = 'auth.html'
        const isAuthPage = $window.location.href.includes(authPage)

        if (!user && !isAuthPage) {
            $window.location.href = authPage;
        } else if (user && !user.isValid) {
            auth.validateToken(user.token, (err, valid) => {
                if (!valid) {
                    $window.location.href = authPage;
                } else {
                    user.isValid = true;
                    $http.defaults.headers.common.Authorization = user.token;
                    isAuthPage ? $window.location.href = '/' : $location.path('/dashboard')

                }
            })
        }
    }
}