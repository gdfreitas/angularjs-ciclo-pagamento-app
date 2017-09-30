angular
    .module('primeiraApp')
    .config(RouterConfigProvider)
    .run(RouterRunProvider);

RouterConfigProvider.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

function RouterConfigProvider($stateProvider, $urlProvider, $httpProvider) {

    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/dashboard.html'
        })
        .state('billingCycle', {
            url: '/billingCycles?page',
            templateUrl: 'billingCycle/tabs.html'
        })

    //$urlProvider.otherwise('/dashboard')

    $httpProvider.interceptors.push('handleResponseError')

}

RouterRunProvider.$inject = ['$rootScope', '$http', '$location', '$window', 'auth'];

function RouterRunProvider($rootScope, $http, $location, $window, auth) {
    validateUser();

    $rootScope.$on('$locationChangeStart', () => {
        console.log('$locationChangeStart');
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