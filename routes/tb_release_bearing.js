const express = require('express');
const router = express.Router();
const tbReleaseBearingController = require('../controllers/tb_release_bearing');

router.get('/', tbReleaseBearingController.getAllRecords);
router.get('/:cn', tbReleaseBearingController.getRecordById);
router.post('/', tbReleaseBearingController.createRecord);
router.put('/:cn', tbReleaseBearingController.updateRecord);
router.delete('/:cn', tbReleaseBearingController.deleteRecord);

module.exports = router;
