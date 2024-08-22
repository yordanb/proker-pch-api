const express = require('express');
const router = express.Router();
const tbClucthController = require('../controllers/tb_clutch');

router.get('/', tbClucthController.getAllRecords);
router.get('/:cn', tbClucthController.getRecordById);
router.post('/', tbClucthController.createRecord);
router.put('/:cn', tbClucthController.updateRecord);
router.delete('/:cn', tbClucthController.deleteRecord);

module.exports = router;
