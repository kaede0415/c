const { Client, Intents, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  data: {
    name: "help",
    description: "コマンド一覧を表示します",
  },
  async execute(interaction) {
    const embed = new MessageEmbed()
    .setTitle("HELP")
    .addField(`= help =`,">>> この画面")
    .addField(`= embed =`,">>> 埋め込み生成")
    .addField(`= verify =`,">>> 認証パネル設置")
    .addField(`= request =`,">>> idを指定して追加")
    .addField(`= call =`,">>> 登録されている全員を追加")
    .setColor("RANDOM")
    await interaction.reply({ embeds: [ embed ] })
  }
}