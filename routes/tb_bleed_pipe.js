const express = require('express');
const router = express.Router();
const tbBleedPipeController = require('../controllers/tb_bleed_pipe');

router.get('/', tbBleedPipeController.getAllRecords);
router.get('/:cn', tbBleedPipeController.getRecordById);
router.post('/', tbBleedPipeController.createRecord);
router.put('/:cn', tbBleedPipeController.updateRecord);
router.delete('/:cn', tbBleedPipeController.deleteRecord);

module.exports = router;
