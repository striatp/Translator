const config = require("../config.js");
const local = require("../config.local.js");
const api_key = `${local.credentials.api_keys.pixart_sigma}`;

module.exports = {
  data: {
    name: "ask",
    description: "Ask the new ChatGPT 4 model a question.",
    type: 1,
    options: [
      {
        type: 3,
        name: "prompt",
        description: "Write down your question.",
        required: true,
        max_length: 750,
        min_length: 2
      }
    ]
  },
  code: `
$ephemeral
$defer

$let[link;https://api.kastg.xyz/api/ai/chatgptV4?prompt=$encodeURI[$option[prompt]]&key=${api_key}]
$onlyIf[$httpRequest[$get[link];GET]==200;
  $interactionReply[
    $description[An error occured while trying to make te HTTP request.]
    $color[${config.embed_colors.primary}]
  ]
]

$interactionReply[
  $httpResult[result;0;response]
]
`
}
