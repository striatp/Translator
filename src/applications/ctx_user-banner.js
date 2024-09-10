const config = require("../../config.js");
const primaryColor = `${config.theme.embed_colors.primaryColor}`

module.exports = {
  data: {
    // Display a member's avatar with a user context menu command."
    name: "User Banner",
    type: 2
  },
  code: `
  $let[user;$option[user]]
  $onlyIf[$userExists[$get[user]]==true;
    $interactionReply[
      $ephemeral
      $description[This user does not exist.]
      $color[${primaryColor}]
    ]
  ]
  $onlyIf[$userBanned[$get[user]]!=;
    $interactionReply[
      $ephemeral
      $description[This user does not have a banner.]
      $color[${primaryColor}]
    ]
  ]
  $interactionReply[
    $ephemeral
    $attachment[$userBanner[$get[user]];banner.png]
    $addActionRow
      $addButton[$userBanner[$get[user]];View on browser;Link]
  ]
  `
}
