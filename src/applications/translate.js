module.exports = {
  data: {
    name: "Translate Message",
    type: 3,
    integration_types: [1],
    contexts: [0, 1, 2]
  },
  code: `
  $log[$channelID]
  $interactionReply[
    $ephemeral
    hello
  ]`
}
