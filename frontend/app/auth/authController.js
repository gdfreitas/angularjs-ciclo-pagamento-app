(function () {

    angular
        .module('primeiraApp')
        .controller('AuthCtrl', AuthController)

    AuthController.$inject = ['$location', 'msgs', 'auth']

    function AuthController($location, msgs, auth) {
        const vm = this

        Object.assign(vm, {
            getUser,
            logout,
            changeMode,
            login,
            signup
        });

        (function () {
            vm.loginMode = true
            vm.user = {};
        })()

        function getUser() {
            return auth.getUser()
        }

        function logout() {
            auth.logout(() => $location.path('/'))
        }

        function changeMode() {
            vm.loginMode = !vm.loginMode
        }

        function login() {
            auth.login(vm.user, err => err ? msgs.addError(err) : $location.path('/'))
        }

        function signup() {
            auth.signup(vm.user, err => err ? msgs.addError(err) : $location.path('/'))
        }

    }

})()