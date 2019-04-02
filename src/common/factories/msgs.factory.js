(function () {
    angular
        .module('cicloPagamento')
        .factory('msgs', MsgsFactory)

    MsgsFactory.$inject = ['toastr']

    function MsgsFactory(toastr) {

        function _addMsg(msgs, title, method) {
            if (msgs instanceof Array) {
                msgs.forEach(msg => toastr[method](msg, title))
            } else {
                toastr[method](msgs, title)
            }
        }

        function addSuccess(msgs) {
            _addMsg(msgs, 'Sucesso', 'success')
        }

        function addError(msgs) {
            _addMsg(msgs, 'Erro', 'error')
        }

        function addWarning(msgs) {
            _addMsg(msgs, 'Aviso', 'warning')
        }

        return { addSuccess, addError }
    }

})();