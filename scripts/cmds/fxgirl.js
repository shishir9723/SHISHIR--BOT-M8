module.exports = {
  config: {
    name: "fxgirl",
    version: "4.0.0",
    author: "𝐒𝐇𝐈𝐒𝐇𝐈𝐑",
    countDown: 5,
    role: 0,
    shortDescription: "𝐅𝐗 𝐆𝐈𝐑𝐋 𝐕𝐈𝐃𝐄𝐎",
    longDescription: "𝐑𝐚𝐧𝐝𝐨𝐦 𝐂𝐚𝐭𝐛𝐨𝐱 𝐕𝐢𝐝𝐞𝐨𝐬",
    category: "media",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {

    const videos = [
      "https://files.catbox.moe/8mm6kh.mp4",
      "https://files.catbox.moe/ssikpx.mp4",
      "https://files.catbox.moe/joz0lj.mp4",
      "https://files.catbox.moe/gds0hh.mp4",
      "https://files.catbox.moe/b2a2ve.mp4",
      "https://files.catbox.moe/mv9mwn.mp4",
      "https://files.catbox.moe/ropskb.mp4",
      "https://files.catbox.moe/tgfaq9.mp4",
      "https://files.catbox.moe/4ss681.mp4",
      "https://files.catbox.moe/3711f6.mp4",
      "https://files.catbox.moe/396xbs.mp4",
      "https://files.catbox.moe/tioyic.mp4",
      "https://files.catbox.moe/de8grq.mp4",
      "https://files.catbox.moe/rwvx62.mp4",
      "https://files.catbox.moe/oijjyt.mp4",
      "https://files.catbox.moe/fmb56q.mp4",
      "https://files.catbox.moe/j125v4.mp4",
      "https://files.catbox.moe/pj1r2a.mp4",
      "https://files.catbox.moe/e4lurj.mp4",
      "https://files.catbox.moe/u38xwi.mp4",
      "https://files.catbox.moe/9whci4.mp4",
      "https://files.catbox.moe/e1ou76.mp4",
      "https://files.catbox.moe/d1vksa.mp4",
      "https://files.catbox.moe/mgqwml.mp4",
      "https://files.catbox.moe/5sau1u.mp4",
      "https://files.catbox.moe/nobuhr.mp4",
      "https://files.catbox.moe/7tx3ur.mp4",
      "https://files.catbox.moe/xwu69p.mp4",
      "https://files.catbox.moe/lqmn3w.mp4",
      "https://files.catbox.moe/n92ev9.mp4",
      "https://files.catbox.moe/wh848g.mp4",
      "https://files.catbox.moe/fgfmhg.mp4",
      "https://files.catbox.moe/m7jvzy.mp4",
      "https://files.catbox.moe/o14k29.mp4",
      "https://files.catbox.moe/vk4a17.mp4",
      "https://files.catbox.moe/2xpazi.mp4",
      "https://files.catbox.moe/g7a1y9.mp4",
      "https://files.catbox.moe/srmay9.mp4",
      "https://files.catbox.moe/dhc13f.mp4",
      "https://files.catbox.moe/1al5i0.mp4",
      "https://files.catbox.moe/2bxzx0.mp4",
      "https://files.catbox.moe/nw5k61.mp4",
      "https://files.catbox.moe/f3pogm.mp4",
      "https://files.catbox.moe/o5234v.mp4",
      "https://files.catbox.moe/bex9ml.mp4",
      "https://files.catbox.moe/crt7ai.mp4",
      "https://files.catbox.moe/oymzv7.mp4"
    ];

    const video = videos[
      Math.floor(Math.random() * videos.length)
    ];

    try {
      const stream = await global.utils.getStreamFromURL(video);

      return message.reply({
        body:
          "╭━━━〔 𝐅𝐗 𝐆𝐈𝐑𝐋 〕━━━╮\n" +
          "┃\n" +
          "┃  ✧ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙑𝙄𝘿𝙀𝙊 ✧\n" +
          "┃\n" +
          "┃  ♡ 𝐄𝐧𝐣𝐨𝐲 𝐘𝐨𝐮𝐫 𝐕𝐢𝐝𝐞𝐨\n" +
          "┃  ♡ 𝐓𝐨𝐭𝐚𝐥 𝐕𝐢𝐝𝐞𝐨: 47\n" +
          "┃  ♡ 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲: 𝐒𝐇𝐈𝐒𝐇𝐈𝐑\n" +
          "┃\n" +
          "╰━━━━━━━━━━━━━━━━━━╯",

        attachment: stream
      });

    } catch (error) {
      console.error("FXGIRL ERROR:", error);

      return message.reply(
        "╭━━━〔 𝐄𝐑𝐑𝐎𝐑 〕━━━╮\n" +
        "┃ ❌ 𝐕𝐢𝐝𝐞𝐨 𝐋𝐨𝐚𝐝 𝐅𝐚𝐢𝐥𝐞𝐝!\n" +
        "┃ ♡ 𝐏𝐥𝐞𝐚𝐬𝐞 𝐓𝐫𝐲 𝐀𝐠𝐚𝐢𝐧\n" +
        "╰━━━━━━━━━━━━━━━━╯"
      );
    }
  }
};
