const express = require('express');
const fitnessRoutes = require('./fitness.route');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * @request method api/v1/users, auth, public, provider,
 */

router.use('/fitness', fitnessRoutes);





module.exports = router;
