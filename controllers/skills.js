const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newTodo
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
};

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
    });
}

function newTodo(req, res) {
    res.render('skills/new');
}

