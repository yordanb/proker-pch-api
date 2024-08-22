const express = require('express');
const router = express.Router();
const tbOvhDF1Controller = require('../controllers/tb_ovh_df1');

router.get('/', tbOvhDF1Controller.getAllRecords);
router.get('/:cn', tbOvhDF1Controller.getRecordById);
router.post('/', tbOvhDF1Controller.createRecord);
router.put('/:cn', tbOvhDF1Controller.updateRecord);
router.delete('/:cn', tbOvhDF1Controller.deleteRecord);

module.exports = router;
