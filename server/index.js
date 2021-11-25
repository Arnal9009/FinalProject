// Export express mongose to let
const express = require("express");
const mongoose = require("mongoose");
const config = require("config")

// Making server from lib express
const app = express();

// Making port using function get from config with key and taking info
const PORT = config.get('serverPort')

// Making function which will conect to base and start server 
const start = async () => {
  try {
    await mongoose.connect(config.get("dbUrl"));
    // Here transfor function port and 2 
    app.listen(PORT, () => {
      console.log('Server STARTED', PORT);
    })
  } catch (e) {
    
  }
};

start();