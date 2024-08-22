const express = require('express');
const router = express.Router();
const tbOvhTMController = require('../controllers/tb_ovh_tm');

router.get('/', tbOvhTMController.getAllRecords);
router.get('/:cn', tbOvhTMController.getRecordById);
router.post('/', tbOvhTMController.createRecord);
router.put('/:cn', tbOvhTMController.updateRecord);
router.delete('/:cn', tbOvhTMController.deleteRecord);

module.exports = router;
