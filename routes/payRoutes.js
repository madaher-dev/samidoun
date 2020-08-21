const express = require('express');

const router = express.Router();

const payController = require('../controllers/payController');

// Routes

router.post('/getSession', payController.getSession);

// Protect all routes after this point
// router.use(authControler.protect);

// router.get(
//   '/me',

//   userControler.getMe,
//   userControler.getUser
// );

module.exports = router;
