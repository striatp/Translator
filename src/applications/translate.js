module.exports = {
  data: {
    name: "Translate",
    type: 3,
    integration_types: [0],
    contexts: [0, 2]
  },
  code: `$interactionReply[
    $ephemeral
    hello
  ]`
}
