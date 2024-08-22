const express = require('express');
const router = express.Router();
const tbHardTimePlanController = require('../controllers/tb_hardtime_plan');

router.get('/', tbHardTimePlanController.getAllRecords);
router.get('/:cn', tbHardTimePlanController.getRecordById);
router.post('/', tbHardTimePlanController.createRecord);
router.put('/:cn', tbHardTimePlanController.updateRecord);
router.delete('/:cn', tbHardTimePlanController.deleteRecord);

module.exports = router;
