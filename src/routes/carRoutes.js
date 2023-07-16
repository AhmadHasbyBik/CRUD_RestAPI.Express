const express = require('express');
const carController = require('../controller/carController')

const router = express.Router();

router.get('/', carController.getAllCars);
router.get('/:id', carController.getCarById);
router.post('/', carController.createCar);
router.patch('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);


module.exports = router;