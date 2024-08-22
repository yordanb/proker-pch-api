const express = require('express');
const router = express.Router();
const tbFrontHubController = require('../controllers/tb_front_hub');

router.get('/', tbFrontHubController.getAllRecords);
router.get('/:cn', tbFrontHubController.getRecordById);
router.post('/', tbFrontHubController.createRecord);
router.put('/:cn', tbFrontHubController.updateRecord);
router.delete('/:cn', tbFrontHubController.deleteRecord);

module.exports = router;
