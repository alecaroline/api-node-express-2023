
import db from '../database/db.js'

//Regras de negócio e conexão com o banco


const list = async () => {
    return await db.query('SELECT * FROM users')
}

const create = async (user) => {

    const {name, email, pass} = user
    return await db.query('INSERT INTO users (name, email, pass) VALUES (?, ?, ?)', 
    [name, email, pass])

}


export default {list, create}