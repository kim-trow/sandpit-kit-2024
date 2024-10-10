// METHOD 'router.use'
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
// Add your routes here

router.post('/red_or_blue', function (req, res) {
    let choice = req.session.data["redOrBlue"]
    if (choice == "red") {
        res.redirect('confirmation_red')
    } else if (choice == "blue") {
        res.redirect('confirmation_blue')
    } else {
        
    }
})

module.exports = router;

//----//


