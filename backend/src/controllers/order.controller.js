const fs = require('fs');
const path = require('path');
const Order = require('../models/order.model');

exports.createOrder = async (req, res) => {
  try {
    const { full_name, email, phone, order_details, payment_image } = req.body;

    if (!payment_image) {
      return res.status(400).json({ message: "Image requise" });
    }

    // Décoder Base64
    const base64Data = payment_image.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    const filename = `${Date.now()}.png`;
    const filePath = path.join(__dirname, '../uploads', filename);

    fs.writeFileSync(filePath, buffer);

    const orderData = {
      full_name,
      email,
      phone,
      order_details,
      payment_image: filename
    };

    const result = await Order.createOrder(orderData);

    res.status(201).json({ message: "Commande enregistrée", order: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
