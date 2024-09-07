const config = require("../../config.local.js");
const bot_token = `${config.token}`

module.exports = {
  data: {
    name: "Translate Message",
    type: 3,
    integration_types: [1],
    contexts: [0, 1, 2]
  },
  code: `
  $interactionReply[
    $ephemeral
    $let[channelId;$djsEval[ctx.interaction.channelId]]
    $let[messageId;$option[message]]

    $httpAddHeader[Authorization;Bot ${bot_token}]
    $!httpRequest[https://discord.com/api/v10/channels/$get[channelId]/messages/$get[messageId];GET]
    $log[$httpResult]
  ]`
}
