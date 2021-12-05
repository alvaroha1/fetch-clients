const clients = require("./clients.json");

exports.getClients = (req, res) => {
  try {
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json(error);
  }
  
};