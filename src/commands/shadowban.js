module.exports = {
  type: "messageCreate",
  code: `
  $let[ShadowBannedUsers;$getServerVar[ShadowBannedUsers;$guildID]]
  $onlyIf[$includes[$get[ShadowBannedUsers];$authorID]==false;]

  $deleteMessages[$channelID;$messageID]
  `
}
