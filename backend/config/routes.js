const express = require('express')

// parametro vem lá de server.js
module.exports = (server) => {

    // rotas da API
    const router = express.Router()

    // define middlewares para /api
    server.use('/api', router);

    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')

    const billingSummaryService = require('../api/billingSummary/billingSummaryService')
    router.route('/billingSummary').get(billingSummaryService.getSummary)

}