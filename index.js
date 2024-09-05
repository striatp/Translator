const { ForgeClient } = require("@tryforge/forgescript");
const { ForgeDB } = require("@tryforge/forge.db");
const { Token } = require("./config.local.js");

// Client initialization
const client = new ForgeClient({
    "intents": [
        "Guilds",
        "MessageContent"
    ],
    "events": [
        "debug",
        "error",
        "ready",
        "shardError",
        "shardDisconnect",
        "shardReady",
        "shardReconnecting",
        "shardResume"
    ],
    "extensions": [
        new ForgeDB()
    ]
})
   
// Load the commands
client.commands.load("src/commands")
client.applicationCommands.load("src/applications")
   
// Your bot token
client.login(Token);
