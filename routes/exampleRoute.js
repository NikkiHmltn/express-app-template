const router = require('express').Router();
const {exampleFunc} = require('../controllers') //all functions imported from controller's index.js

// ROUTES - METHODS //
router.get('/', exampleFunc.getPage)
router.post('/', exampleFunc.createPage)
router.put('/', exampleFunc.editPage)
router.delete('/', exampleFunc.deletePage)

module.exports = router;