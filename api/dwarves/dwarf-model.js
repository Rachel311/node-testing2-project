const db = require('../../data/db-config')

module.exports = {
    insert,
    getAll,
    getById,
    remove,
    update
}

function getAll() {
    return db('dwarf')
}

function getById(id) {
    return db('dwarf')
        .where('id', id)
}

async function insert(dwarf) {
    const [id] = await db('dwarf').insert(dwarf);
    return getById(id)
}
function remove(id){
    const deletedDwarf = getById(id);
    db('posts').where('id', id).del();
    return deletedDwarf;
}

function update() {
    return db('dwarf')
}