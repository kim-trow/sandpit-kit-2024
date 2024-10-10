// METHOD 'router.use'
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
// Add your routes here


// Simple radio routing example
router.post('/red_or_blue', function (request, response) {
    let choice = request.session.data["redOrBlue"]
    if (choice == "red") {
        response.redirect('confirmation_red')
    } else if (choice == "blue") {
        response.redirect('confirmation_blue')
    } else {
       // Put error message here
    }
})

// Checkbox routing example
router.post('/checkbox_example/ingredients', function (req, res) {
    let ingredients = req.session.data["ingredients"]
    console.log(ingredients)
    if (ingredients == undefined) {
        // Put error message here
        console.log("The data is undefined - it's not an array yet - add an error message")
        res.redirect('result_shopping')
    } else if (ingredients.length === 0 ) {
        // Put error message here
        console.log("The array is empty - add an error message")
        res.redirect('result_shopping')
    } else if (ingredients.includes("eggs") && ingredients.includes("flour") && ingredients.includes("sugar") && ingredients.includes("butter")) {
        res.redirect('result_cake')
    } else if (ingredients.includes("eggs") && ingredients.includes("flour") && ingredients.includes("butter")) { 
        res.redirect('result_pancakes')
    } else if (ingredients.includes("eggs") && ingredients.includes("butter")) { 
        res.redirect('result_omelette')
    } else {
        res.redirect('result_shopping')
    }
})

module.exports = router;

//----//

// // METHOD 'require'
// module.exports = function (router) {

// // Add your routes here
// router.get('red_or_blue', function (req, res) {
//     res.render('red_or_blue');
// })

// router.post('red_or_blue', function (req, res) {
//     let choice = req.session.data["redOrBlue"]
//     if (choice == "red") {
//         res.redirect('confirmation_red')
//     } else if (choice == "blue") {
//         res.redirect('confirmation_blue')
//     } else {
        
//     }
// })

// }


