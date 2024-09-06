module.exports = {
  data: {
    name: "translate",
    type: 3,
    integration_types: [1],
    contexts: [0, 1, 2]
  },
  code: `$interactionReply[
    $ephemeral
    hello
  ]`
}
