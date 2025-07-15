const express = require('express');
const router = express.Router();
const { auth, requireRole } = require('../middleware/auth');

// Protected dashboard route
router.get('/dashboard', auth, (req, res) => {
  res.json({ msg: `Welcome, user ${req.user.id}!`, role: req.user.role });
});

// Admin-only route
router.get('/admin', auth, requireRole('admin'), (req, res) => {
  res.json({ msg: 'Welcome, admin!', role: req.user.role });
});

module.exports = router; 