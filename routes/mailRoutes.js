const express = require('express');

const router = express.Router();

const mailController = require('../controllers/mailController');

// Routes

router.post('/contact', mailController.contact);

// Protect all routes after this point
// router.use(authControler.protect);

// router.get(
//   '/me',

//   userControler.getMe,
//   userControler.getUser
// );

module.exports = router;
