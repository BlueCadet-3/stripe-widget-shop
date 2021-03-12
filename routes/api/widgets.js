const express = require('express');
const router = express.Router();
const widgetsCtrl = require('../../controllers/api/widgets');

router.get('/', usersCtrl.getAll);

module.exports = router;