angular
    .module('primeiraApp')
    .config(RouterConfigProvider);

RouterConfigProvider.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
];

function RouterConfigProvider($stateProvider, $urlProvider) {

    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/dashboard.html'
        })
        .state('billingCycle', {
            url: '/billingCycles',
            templateUrl: 'billingCycle/tabs.html'
        })

    $urlProvider
        .otherwise('/dashboard')

}