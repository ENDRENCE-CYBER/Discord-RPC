var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Founder Of MSTD",
assets : {
large_image : "1",
large_text : "Join To Our Squad" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Discord" , url : "https://discord.gg/mstd"},{label : "Subscribe",url : "https://www.youtube.com/channel/UCOAdwee_oV45SjPZTlz5eHQ"}]
}
})
})
client.login({ clientId : "811916497492508672" }).catch(console.error);