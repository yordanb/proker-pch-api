const express = require('express');
const router = express.Router();
const tbRearHubController = require('../controllers/tb_rear_hub');

router.get('/', tbRearHubController.getAllRecords);
router.get('/:cn', tbRearHubController.getRecordById);
router.post('/', tbRearHubController.createRecord);
router.put('/:cn', tbRearHubController.updateRecord);
router.delete('/:cn', tbRearHubController.deleteRecord);

module.exports = router;
