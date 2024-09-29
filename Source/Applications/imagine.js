const local = require("../config.local.js");
const api_key = `${local.credentials.api_keys.pixart_sigma}`;

module.exports = {
  data: {
    name: "imagine",
    description: "Generate an image from a prompt.",
    type: 1,
    options: [
      {
        type: 3,
        name: "prompt",
        description: "Describe the image you would like to generate.",
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
        description: "Select a specific ratio for the presentation of your image.",
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
$ephemeral
$defer

$let[ExecutionTimeA;$executionTime]
$let[link;https://api.kastg.xyz/api/ai/pixart-sigma?prompt=$encodeURI[$option[prompt]]&n_p=(worst%20quality,%20low%20quality,%20normal%20quality,%20lowres,%20low%20details,%20oversaturated,%20undersaturated,%20overexposed,%20underexposed,%20grayscale,%20bw,%20bad%20photo,%20bad%20photography,%20bad%20art:1.4),%20(watermark,%20signature,%20text%20font,%20username,%20error,%20logo,%20words,%20letters,%20digits,%20autograph,%20trademark,%20name:1.2),%20(blur,%20blurry,%20grainy),%20morbid,%20ugly,%20asymmetrical,%20mutated%20malformed,%20mutilated,%20poorly%20lit,%20bad%20shadow,%20draft,%20cropped,%20out%20of%20frame,%20cut%20off,%20censored,%20jpeg%20artifacts,%20out%20of%20focus,%20glitch,%20duplicate,%20(airbrushed,%20cartoon,%20anime,%20semi-realistic,%20cgi,%20render,%20blender,%20digital%20art,%20manga,%20amateur:1.3),%20(3D%20,3D%20Game,%203D%20Game%20Scene,%203D%20Character:1.1),%20(bad%20hands,%20bad%20anatomy,%20bad%20body,%20bad%20face,%20bad%20teeth,%20bad%20arms,%20bad%20legs,%20deformities:1.3)&style=$if[$option[style]==;no-style;$option[style]]&ratio=$if[$option[ratio]==;square;$option[ratio]]&key=${api_key}]
$!httpRequest[$get[link];GET]
$let[ExecutionTime;$sub[$executionTime;$get[ExecutionTimeA]]]

$interactionReply[
  🪄 **Prompt** : "$option[prompt]" *($round[$get[ExecutionTime];2])*
  $attachment[$httpResult[result;0;url];image.png]
]
`
}
