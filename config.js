const config = require("./config.local.js");
const bot_token = `${config.token}`

module.exports = {
  botToken: bot_token,
  theme: {
    embed_colors: {
      primaryColor: "#FF3C65"
    }
  }
}
