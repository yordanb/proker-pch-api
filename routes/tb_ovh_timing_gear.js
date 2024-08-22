const express = require('express');
const router = express.Router();
const tbOvhTimingGearController = require('../controllers/tb_ovh_timing_gear');

router.get('/', tbOvhTimingGearController.getAllRecords);
router.get('/:cn', tbOvhTimingGearController.getRecordById);
router.post('/', tbOvhTimingGearController.createRecord);
router.put('/:cn', tbOvhTimingGearController.updateRecord);
router.delete('/:cn', tbOvhTimingGearController.deleteRecord);

module.exports = router;
