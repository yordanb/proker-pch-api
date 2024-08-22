const express = require('express');
const router = express.Router();
const tbOvhDF2Controller = require('../controllers/tb_ovh_df2');

router.get('/', tbOvhDF2Controller.getAllRecords);
router.get('/:cn', tbOvhDF2Controller.getRecordById);
router.post('/', tbOvhDF2Controller.createRecord);
router.put('/:cn', tbOvhDF2Controller.updateRecord);
router.delete('/:cn', tbOvhDF2Controller.deleteRecord);

module.exports = router;
