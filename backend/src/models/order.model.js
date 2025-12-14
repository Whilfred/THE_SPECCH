const db = require('../config/db');

exports.createOrder = async (data) => {
  const query = `
    INSERT INTO orders (full_name, email, phone, order_details, payment_image)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  const values = [
    data.full_name,
    data.email,
    data.phone,
    data.order_details,
    data.payment_image
  ];

  return db.query(query, values);
};
