const Order = require('../models/order.model');

exports.createOrder = async (req, res) => {
  try {
    const { full_name, email, phone, order_details } = req.body;

    console.log('--- Création commande ---');
    console.log('BODY:', req.body);
    console.log('FILE:', req.file);
    console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

    if (!req.file) {
      console.log('Aucun fichier uploadé !');
      return res.status(400).json({ message: "Image requise" });
    }

    const orderData = {
      full_name,
      email,
      phone,
      order_details,
      payment_image: req.file.filename
    };

    console.log('Données de la commande à insérer :', orderData);

    const result = await Order.createOrder(orderData);

    if (!result || !result.rows || result.rows.length === 0) {
      console.log('Aucune commande créée dans la DB');
      return res.status(500).json({ message: "Erreur lors de la création de la commande" });
    }

    console.log('Commande créée avec succès :', result.rows[0]);

    res.status(201).json({
      message: "Commande enregistrée",
      order: result.rows[0]
    });

  } catch (err) {
    console.error('Erreur lors de la création de la commande :', err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
