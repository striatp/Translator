module.exports = {
  data: {
    name: "translate",
    description: "Translated into the desired language in your settings, the selected message.",
    type: 1,
    integration_types: [0, 1]
  },
  code: `$interactionReply[
    $ephemeral
    hello
  ]`
}
