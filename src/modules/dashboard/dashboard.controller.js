(function () {
    angular
        .module('cicloPagamento')
        .controller('DashboardCtrl', DashboardController)

    DashboardController.$inject = ['$scope', '$http', 'consts']

    function DashboardController($scope, $http, consts) {
        const vm = this

        Object.assign(vm, {
            getSummary
        })

        function getSummary() {
            $http.get(`${consts.apiUrl}/ciclos-pagamentos/summary`).then((response) => { // destructuring e default values
                const { credit = 0, debt = 0 } = response.data;

                vm.credit = credit;
                vm.debt = debt;
                vm.total = credit - debt;
            })
        }

        getSummary();
    }

})();

