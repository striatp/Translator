const config = require("../../config.js");
const primary = `${config.theme.embed_colors.primary}`

module.exports = {
  data: {
    // Display a member's avatar with a user context menu command."
    name: "Avatar",
    type: 2
  },
  code: `
  $let[user;$option[user]]
  $onlyIf[$userExists[$get[user]]==true;
    $interactionReply[
      $ephemeral
      $description[This user does not exist.]
      $color[${primary}]
    ]
  ]
  $interactionReply[
    $ephemeral
    $attachment[$userAvatar[$get[user]];avatar.png]
    $addActionRow
      $addButton[$userAvatar[$get[user]];View on browser;Link]
  ]
  `
}
