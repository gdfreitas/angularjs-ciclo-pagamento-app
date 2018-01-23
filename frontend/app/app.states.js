angular
    .module('primeiraApp')
    .config(RouterConfigProvider);

RouterConfigProvider.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

function RouterConfigProvider($stateProvider, $urlProvider, $httpProvider) {

    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: './modules/dashboard/dashboard.html'
        })
        .state('billingCycle', {
            url: '/billingCycles?page',
            templateUrl: './modules/billing-cycle/tabs.html'
        })

    //$urlProvider.otherwise('/dashboard')

    $httpProvider.interceptors.push('handleResponseError')

}