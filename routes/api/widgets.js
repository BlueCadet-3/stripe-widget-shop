const express = require('express');
const router = express.Router();
const widgetsCtrl = require('../../controllers/api/widgets');

router.get('/', widgetsCtrl.getAll);

module.exports = router;
