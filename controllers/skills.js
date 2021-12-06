const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create
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

function newSkill(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
    Skill.create(req.body);
    res.redirect('/skills');
}
