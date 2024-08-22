const express = require('express');
const router = express.Router();
const tbThermostatController = require('../controllers/tb_thermostat');

router.get('/', tbThermostatController.getAllRecords);
router.get('/:cn', tbThermostatController.getRecordById);
router.post('/', tbThermostatController.createRecord);
router.put('/:cn', tbThermostatController.updateRecord);
router.delete('/:cn', tbThermostatController.deleteRecord);

module.exports = router;
