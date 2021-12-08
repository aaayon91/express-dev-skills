const skills = [
    {id: 1, skill: 'HTML', done: true},
    {id: 2, skill: 'CSS', done: false},
    {id: 3, skill: 'JavaScript', done: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function getAll() {
    return skills;
}

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function update(updateData, id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills[idx].skill = updateData.skill;
}