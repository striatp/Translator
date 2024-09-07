module.exports = {
  data: {
    name: "Avatar",
    type: 2
  },
  code: `
  $let[user;$option[user]]
  $interactionReply[
    $ephemeral
    $attachment[$userAvatar[$get[user]];avatar.png]
    $addActionRow
      $addButton[$userAvatar[$get[user]];View on browser;Link]
  ]
  `
}
