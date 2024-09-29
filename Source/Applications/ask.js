const local = require("../../config.local.js");
const api_key = ${local.credentials.api_key};

module.exports = {
  data: {
    name: "imagine",
    description: "test",
    type: 1,
    options: [
      {
        type: 3,
        name: "prompt",
        description: "Describe the image you want to generate.",
        required: true,
        max_length: 200,
        min_length: 5
      }, {
        type: 3,
        name: "style",
        description: "Select a generation style for your image.",
        required: false,
        choices: [
          {
            name: "No Style",
            value: "no-style"
          }, {
            name: "Cinematic",
            value: "cinematic"
          }, {
            name: "Anime",
            value: "anime"
          }, {
            name: "Photographic",
            value: "photographic"
          }, {
            name: "Manga",
            value: "manga"
          }, {
            name: "Digital Art",
            value: "digital-art"
          }, {
            name: "Pixel Art",
            value: "pixel-art"
          }, {
            name: "Fantasy Art",
            value: "fantasy-art"
          }, {
            name: "Neon Punk",
            value: "neonpunk"
          }, {
            name: "3D Model",
            value: "3d-model"
          }
        ]
      }, {
        type: 3,
        name: "ratio",
        description: "Select a specific ratio for my presentation of your image.",
        required: false,
        choices: [
          {
            name: "Square",
            value: "square"
          }, {
            name: "Portrait",
            value: "portrait"
          }, {
            name: "Landscape",
            value: "landscape"
          }, {
            name: "1024x1024",
            value: "1024x1024"
          }, {
            name: "1024x712",
            value: "1024x712"
          }, {
            name: "712x1024",
            value: "712x1023"
          }, {
            name: "1024x512",
            value: "1024x512"
          }, {
            name: "512x1024",
            value: "512x1024"
          }
        ]
      }
    ]
  },
  code: `
$let[link;https://api.kastg.xyz/api/ai/pixart-sigma?prompt=$encodeURI[$option[prompt]]&style=$if[$option[style]==;no-style;$option[style]]&ratio=$if[$option[ratio]==;square;$option[ratio]]&key=${api_key}]
$httpRequest[$get[link];GET]
  $interactionReply[
  $ephemeral
  $defer
  $httpResult[result;0;url]
`
}
