const express = require('express');
const router = express.Router();
const tbOrdinariEngineController = require('../controllers/tb_ordinari_engine');

router.get('/', tbOrdinariEngineController.getAllRecords);
router.get('/:cn', tbOrdinariEngineController.getRecordById);
router.post('/', tbOrdinariEngineController.createRecord);
router.put('/:cn', tbOrdinariEngineController.updateRecord);
router.delete('/:cn', tbOrdinariEngineController.deleteRecord);

module.exports = router;
