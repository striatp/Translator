const configs = require("../../../config.js")
const english = require("../../../translations/en.json");

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
$onlyIf[$hasP]
`
}
