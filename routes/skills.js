var express = require('express');
var router = express.Router();

// Require the controller that exports Skills CRUD functions
var skillsCtrl = require('../controllers/skills');

// All actual paths start with "/skills"

// Get /skills
router.get('/', skillsCtrl.index);
// Get /skills/new
router.get('/new', skillsCtrl.new);
// Get /skills/:id
router.get('/:id', skillsCtrl.show);


module.exports = router;
