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
    $!httpRequest[https://api.kastg.xyz/api/tool/translate?input=$getMessage[1270434516984402041;1281914775353294871;content]&to=$locale&from=auto;GET]
    $httpResult[result;0;output]
  ]`
}
