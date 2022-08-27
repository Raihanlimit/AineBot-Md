import instagramGetUrl from "instagram-url-direct";
let handler = async (m, { conn, args, command, usedPrefix }) => {
  if (!args[0])
    throw `Use example ${usedPrefix}${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`;
  let response = await instagramGetUrl(args[0]);
  for (let data of response.url_list) {
    await conn.sendFile(m.chat, data, "ig.mp4", data, m);
  }
};
handler.help = ["instagram <url>"];
handler.tags = ["downloader"];

handler.command = /^i(nsta)?g(ram)?(dl)?$/i
module.exports = handler
