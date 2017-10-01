(function () {
    angular
        .module('primeiraApp')
        .controller('BillingCycleCtrl', BillingCycleController);

    BillingCycleController.$inject = ['$http', '$location', 'msgs', 'tabs']

    function BillingCycleController($http, $location, msgs, tabs) {
        const vm = this;
        const url = 'http://localhost:3003/api/billingCycles'

        Object.assign(vm, { create, refresh, remove, update, showTabUpdate, showTabDelete, addCredit, cloneCredit, deleteCredit, addDebt, cloneDebt, deleteDebt, calculateValues })

        function refresh() {
            const page = parseInt($location.search().page) || 1;

            $http.get(`${url}?skip=${(page - 1) * 10}&limit=10`)
                .then((response) => {
                    vm.billingCycle = { credits: [{}], debts: [{}] }
                    vm.billingCycles = response.data;
                    calculateValues()

                    $http.get(`${url}/count`)
                        .then((response) => {
                            vm.pages = Math.ceil(response.data.value / 10)
                            tabs.show(vm, { tabList: true, tabCreate: true })
                        })
                })
        }

        function update() {
            const updateUrl = `${url}/${vm.billingCycle._id}`
            $http.put(updateUrl, vm.billingCycle)
                .then((response) => {
                    refresh()
                    msgs.addSuccess('Operação realizada com sucesso!')
                })
                .catch((response) => msgs.addError(response.data.errors))
        }

        function create() {
            $http.post(url, vm.billingCycle)
                .then((response) => {
                    refresh();
                    msgs.addSuccess('Operação realizada com sucesso!')
                })
                .catch((response) => msgs.addError(response.data.errors))
        }

        function remove() {
            const resource = `${url}/${vm.billingCycle._id}`
            $http.delete(resource, vm.billingCycle)
                .then((response) => {
                    refresh();
                    msgs.addSuccess('Operação realizada com sucesso!')
                })
                .catch((response) => msgs.addError(response.data.errors))
        }

        function addCredit(index) {
            vm.billingCycle.credits.splice(index + 1, 0, {})
        }

        function cloneCredit(index, { name, value }) {
            vm.billingCycle.credits.splice(index + 1, 0, { name, value })
            calculateValues()
        }

        function deleteCredit(index) {
            if (vm.billingCycle.credits.length > 1) {
                vm.billingCycle.credits.splice(index, 1)
            }
        }

        function addDebt(index) {
            vm.billingCycle.debts.splice(index + 1, 0, {})
        }

        function cloneDebt(index, { name, value, status }) {
            vm.billingCycle.debts.splice(index + 1, 0, { name, value, status })
            calculateValues()
        }

        function deleteDebt(index) {
            if (vm.billingCycle.debts.length > 1) {
                vm.billingCycle.debts.splice(index, 1)
            }
        }

        function showTabUpdate(billingCycle) {
            vm.billingCycle = billingCycle
            calculateValues()
            tabs.show(vm, { tabUpdate: true })
        }

        function showTabDelete(billingCycle) {
            vm.billingCycle = billingCycle
            calculateValues()
            tabs.show(vm, { tabDelete: true })
        }

        function calculateValues() {
            vm.credit = 0;
            vm.debt = 0;

            if (vm.billingCycle) {
                vm.billingCycle.credits.forEach(({ value }) => vm.credit += !value || isNaN(value) ? 0 : parseFloat(value))
                vm.billingCycle.debts.forEach(({ value }) => vm.debt += !value || isNaN(value) ? 0 : parseFloat(value))
            }

            vm.total = vm.credit - vm.debt;
        }

        refresh();
    }

})();