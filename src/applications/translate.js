module.exports = {
  data: {
    name: "Translate",
    description: "Translates the selected message into the preferred language in your settings.",
    type: 3,
    integration_types: [0],
    contexts: [0, 2]
  },
  code: `$interactionReply[
    $ephemeral
    hello
  ]`
}
