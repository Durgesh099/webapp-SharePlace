const express = require('express')
const {check} = require('express-validator')
const placeControllers = require('../controllers/places-controllers')
const router = express.Router()

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Osho Garden',
        description: 'Nature spot with lots of trees and a small canal',
        location: 'https://www.google.com/maps/place/Osho+Teerth+Park/@18.5358783,73.8858212,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c1004113e727:0xdb7ded8050f08a1f!8m2!3d18.5358733!4d73.8906921!16s%2Fg%2F1tfzkswy?entry=ttu',
        address: 'GVPR+89R, D. H. Dhunjibhoy Road, Between Lane Number 2 and 3, Koregaon Rd, Koregaon Park, Pune, Maharashtra 411001',
        creator: 'u1'
    }
]

router.get('/:pid', placeControllers.getPlaceById)

router.get('/user/:uid', placeControllers.getPlacesByUserId)

router.post('/',
[
    check('title').not().isEmpty(),
    check('description').isLength({min:5}),
    check('address').not().isEmpty()
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