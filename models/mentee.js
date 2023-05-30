// models/item.js
const connection = require('../config/db');

const Mentee = {};

Mentee.getAll = (callback) => {
  connection.query('SELECT * FROM mentee', callback);
};

Mentee.getById = (id, callback) => {
  connection.query(
    'SELECT full_name, email, phone_number, profile_picture FROM mentee WHERE id = ?',
    [id],
    callback
  );
};

Mentee.create = (data, callback) => {
  connection.query('INSERT INTO mentee SET ?', data, callback);
};

Mentee.update = (id, data, callback) => {
  connection.query('UPDATE mentee SET ? WHERE id = ?', [data, id], callback);
};

Mentee.delete = (id, callback) => {
  connection.query('DELETE FROM mentee WHERE id = ?', [id], callback);
};

Mentee.getByEmailAndPassword = (email, password, callback) => {
  const query = 'SELECT * FROM mentee WHERE email = ? AND password = ?';
  const values = [email, password];
  connection.query(query, values, (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    if (results.length === 0) {
      callback(null, null);
      return;
    }
    const mentee = results[0];
    callback(null, mentee);
  });
};


Mentee.checkEmailExists = (email, callback) => {
  const query = `SELECT COUNT(*) AS count FROM mentee WHERE email = ?`;
  connection.query(query, [email], (err, results) => {
    if (err) throw err;

    const emailCount = results[0].count;
    callback(emailCount > 0);
  });
};

Mentee.addMentee  = (full_name, email, password, callback) => {
  const query = `INSERT INTO mentee (full_name, email, password) VALUES (?, ?, ?)`;
  connection.query(query, [full_name, email, password], (err, results) => {
    if (err) throw err;

    callback();
  });
};

Mentee.megetById = (id, callback) => {
  connection.query(
    'SELECT full_name, email, phone_number, profile_picture FROM mentee WHERE id = ?',
    [id],
    callback
  );
};

Mentee.UpdateMebyId = (id, data, callback) => {
  connection.query('UPDATE mentee SET ? WHERE id = ?', [data, id], callback);
};
module.exports = Mentee;
