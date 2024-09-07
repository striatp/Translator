const { config } = require("./config.local.js");

module.exports = {
  botToken: config.token,
  theme: {
    colors: {
      primaryColor: "#FFFFFF",
      secondaryColor: "#FF00FF"
    }
  }
};
