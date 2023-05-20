// models/item.js
const connection = require('../config/db');

const Mentee = {};

Mentee.getAll = (callback) => {
  connection.query('SELECT * FROM mentee', callback);
};

Mentee.getById = (id, callback) => {
  connection.query('SELECT * FROM mentee WHERE id = ?', [id], callback);
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

module.exports = Mentee;
