const express = require('express')
const {check} = require('express-validator')
const placeControllers = require('../controllers/places-controllers')
const router = express.Router()
const fileUpload = require('../middleware/file-upload')
const checkauth = require('../middleware/check-auth')

router.get('/', placeControllers.getPlaces)

router.post('/search', placeControllers.getSearchedPlaces)

router.get('/:pid', placeControllers.getPlaceById)

router.get('/user/:uid', placeControllers.getPlacesByUserId)

router.use(checkauth)

router.post('/',
fileUpload.single('image'),
[
    check('title').not().isEmpty(),
    check('description').isLength({min:5}),
    check('address').not().isEmpty(),
    check('location').not().isEmpty()
],
placeControllers.createPlace)

router.patch('/:pid',
[
    check('title').not().isEmpty(),
    check('description').isLength({min:5})
],
placeControllers.updatePlace)

router.delete('/:pid', placeControllers.deletePlace)

module.exports = router