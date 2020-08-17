const express = require('express');

const router = express.Router();

const userControler = require('../controlers/userControler');

// Routes

router.post('/login', authControler.login);
router.get('/logout', authControler.logout);

// Protect all routes after this point
router.use(authControler.protect);

router.get(
  '/me',

  userControler.getMe,
  userControler.getUser
);

module.exports = router;
