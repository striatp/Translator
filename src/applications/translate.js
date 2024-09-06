module.exports = {
  data: {
    name: "Translate",
    description: "Translated into the desired language in your settings, the selected message.",
    type: 1,
    integration_types: [0],
    contexts: [0, 2]
  },
  code: `$interactionReply[
    $ephemeral
    hello
  ]`
}
