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
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
router.get('/:id/edit', skillsCtrl.edit);
router.put('/:id', skillsCtrl.update);

module.exports = router;
