// METHOD 'router.use'

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
module.exports = router

// Add your routes here 

router.use('/version1/', require('./views/version1/_routes.js'));
router.use('/version2/', require('./views/version2/_routes.js'));


//----//

// // METHOD 'require'

// const express = require('express')
// const router = express.Router()

// // Add your routes here 

// require('./views/version1/_routes.js')(router);
// require('./views/version2/_routes.js')(router);

// module.exports = router

