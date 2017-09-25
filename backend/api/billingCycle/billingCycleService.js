const _ = require('lodash')
const BillingCycle = require('./billingCycle')

// define os métodos http pelo node-restful
BillingCycle.methods(['get', 'post', 'put', 'delete'])

// configurações de atualizacao - put
BillingCycle.updateOptions({
    new: true,  // toda vez que atualiza um objeto retornar o objeto novo. padrão retorna o antigo
    runValidators: true  // rodar as validações também nos updates. padrão não executa nenuhma validação
})

// interceptar as requisicoes após método para tratar as mensagens de erro
BillingCycle
    .after('post', sendErrorsOrNext)
    .after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
    const bundle = res.locals.bundle

    if (bundle.errors) {
        let errors = parseErrors(bundle.errors)
        res.status(500).json({ errors })
    } else {
        next()
    }
}

function parseErrors(nodeRestfulErrors) {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors;
}

// rota customizada para contador
BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

module.exports = BillingCycle