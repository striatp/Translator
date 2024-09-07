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
    $djsEval[ctx.interaction.channelId]
    $option[message]
  ]`
}
