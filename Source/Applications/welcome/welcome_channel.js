const permission = require("../../../Ressources/discord_permissions.json");
const configs = require("../../../config.js")
const english = require("../../../Ressources/Translations/en.json");

module.exports = {
  data: {
    name: "channel",
    description: "Set the channel where welcome messages will be sent.",
    type: 1,
    options: [
      {
        type: 7,
        name: "channel",
        description: `${english.option.description.select_channel}`,
        required: true
      }
    ]
  },
  code: `
$onlyIf[$hasPerms[$guildID;$authorID;ManageGuild]==true;
  $ephemeral
  $description[You need the \`ManageGuild\` permission to run this command.]
  $color[${config.embed_colors.primary}]
]
`
}
