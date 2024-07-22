// const { v4 } = require('uuid');

const db = require('../../database'); // o node entende que o arquivo é o index

// mock temporário
// id: 'uuid' -> 'Universal Unique Id' (hash única para que não consigam decobrir o id do usuário )
// const contacts = [
//   {
//     id: v4(),
//     name: 'Lincoln',
//     email: 'lincoln@mail.com',
//     phone: '123456789',
//     category_id: v4(),
//   },
//   {
//     id: v4(),
//     name: 'Jose',
//     email: 'jose@mail.com',
//     phone: '2148841233',
//     category_id: v4(),
//   },
// ];

class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    // return new Promise((resolve, reject) => { resolve(contacts); });
    const rows = await db.query(`
    SELECT contacts.*, categories.name AS category_name
    FROM contacts
    LEFT JOIN categories ON categories.id = contacts.category_id
    ORDER BY contacts.name ${direction}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
    SELECT contacts.*, categories.name AS category_name
    FROM contacts
    LEFT JOIN categories ON categories.id = contacts.category_id
    WHERE contacts.id = $1
    `, [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return row;
  }

  async create({
    name, email, phone, category_id,
  }) {
    //  SQL INJECTION
    //  Ocorre quando nenhum tratamento é realizado na entrada de dados das requests
    //  permitindo que usuários injetem instruções SQL DENTRO do banco de dados
    const [row] = await db.query(`INSERT INTO  contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
      `, [name, email, phone, category_id]);

    return row;
  }

  async update(id, {
    name, email, phone, category_id,
  }) {
    const row = await db.query(
      `UPDATE contacts
      SET name = $1, email = $2, phone = $3, category_id = $4
      WHERE id = $5
      RETURNING *`,
      [name, email, phone, category_id, id],
    );
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM contacts WHERE id = $1', [id]);
    // [row] -> undefined = falsy
    // por isso usa o deleteOp
    return deleteOp;
  }
}

module.exports = new ContactsRepository();
