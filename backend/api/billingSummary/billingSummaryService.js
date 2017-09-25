const _ = require('lodash')
const BillingCycle = require('../billingCycle/billingCycle')

// middleware para sumarizar  todo o ciclo de pagamento
function getSummary(req, res) {
    // fluxo de agregação  (pipeline aggregation) 
    // docs: https://docs.mongodb.com/manual/reference/operator/aggregation
    BillingCycle.aggregate({
        $project: { credit: { $sum: '$credits.value' }, debt: { $sum: '$debts.value' } }
    }, {
        $group: { _id: null, credit: { $sum: '$credit' }, debt: { $sum: '$debt' } }
    }, {
        $project: { _id: 0, credit: 1, debt: 1 }
    }, (error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            // função do lodash _.defaults define valores padrões para caso os valores das propriedades estejam null, undefined
            res.json(_.defaults(result[0], { credit: 0, debt: 0 }))
        }
    })
}

module.exports = { getSummary }