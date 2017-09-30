angular
    .module('primeiraApp')
    .constant('consts', {
        appName: 'Stack MEAN - Primeira Aplicação',
        version: '1.0',
        owner: 'gabriel.freitas',
        year: '2017',
        site: 'http://gdfreitas.com.br',
        apiUrl: 'http://localhost:3003/api',
        oapiUrl: 'http://localhost:3003/oapi',
        userKey: '_primeira_app_user'
    })
    .run(['$rootScope', 'consts', function ($rootScope, consts) {
        $rootScope.consts = consts // xunbadão refatorar pós curso
    }])