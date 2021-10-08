const request = require('supertest');
const server = require('../server.js');
const Dwarf = require('./dwarf-model');
const db = require('../../data/db-config');

// fake data
const dwalin = {name: 'dwalin'}
const balin = {name: 'balin'}
const gimli = {name: 'gimli'}
const gloin = {name: 'gloin'}

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db('dwarfs').truncate()
})

afterAll(async () => {
    await db.destroy()
})

// it('correct env', () => {
//     expect(process.env.DB_ENV).toBe('testing')
// })

describe('dwarfs model', () => {
    describe('insert function', () => {
        it('adds a dwarf to the db', async () => {
            let all
            await Dwarf.insert(dwalin)
            all = await db('dwarfs')
            expect(all).toHaveLength(1)

            await Dwarf.insert(balin)
            all = await db('dwarfs')
            expect(all).toHaveLength(2)
        })
        it('values of dwarfs from db', async () => {
            const dwarfs = await Dwarf.insert(balin)
            expect(dwarfs).toMatchObject({id:1, ...balin})
        })
    })
    describe('update function', () => {
        it('updates the dwarfs', async () => {
            const [id] = await db('dwarfs').insert(balin)
            await Dwarf.update(id, {name: 'Balin'})
            const updated = await db('dwarf').where({id}).first()
            expect(updated.name).toBe('Balin')
        })
    })
    it('check updated dwarfs', async() => {
        const [id] = await db('dwarfs').insert(balin)
        await Dwarf.update(id, {name: 'Balin'})
        const updated = await db('dwarfs').where({id}).first()
        expect(updated).toMatchObject({id:id, name:'Balin'})
        })
    })
