module.exports = {
  config: {
    name: "girls77",
    version: "1.0.0",
    author: "𝐒𝐇𝐈𝐒𝐇𝐈𝐑",
    countDown: 5,
    role: 0,
    shortDescription: "Girls77 Video Collection",
    longDescription: "Random video collection",
    category: "media",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }) {
    const videos = [
      "https://files.catbox.moe/xktox6.mp4",
      "https://files.catbox.moe/rw1vxd.mp4",
      "https://files.catbox.moe/8r5z4r.mp4",
      "https://files.catbox.moe/2otopk.mp4",
      "https://files.catbox.moe/sg6ag6.mp4",
      "https://files.catbox.moe/2n69yc.mp4",
      "https://files.catbox.moe/tqx4i3.mp4",
      "https://files.catbox.moe/u6ppwr.mp4",
      "https://files.catbox.moe/6picwc.mp4",
      "https://files.catbox.moe/fjp6eh.mp4",
      "https://files.catbox.moe/tt12v3.mp4",
      "https://files.catbox.moe/qjb65x.mp4",
      "https://files.catbox.moe/lgg303.mp4",
      "https://files.catbox.moe/2l5de7.mp4",
      "https://files.catbox.moe/1itbo4.mp4",
      "https://files.catbox.moe/b2e4co.mp4",
      "https://files.catbox.moe/784po9.mp4",
      "https://files.catbox.moe/uthj7a.mp4",
      "https://files.catbox.moe/qf3epm.mp4",
      "https://files.catbox.moe/bzex44.mp4",
      "https://files.catbox.moe/z0pq75.mp4",
      "https://files.catbox.moe/kg8lht.mp4",
      "https://files.catbox.moe/fbgztj.mp4",
      "https://files.catbox.moe/81s5ll.mp4",
      "https://files.catbox.moe/pcefyb.mp4",
      "https://files.catbox.moe/g87uij.mp4",
      "https://files.catbox.moe/t0m4fd.mp4",
      "https://files.catbox.moe/psnyvf.mp4",
      "https://files.catbox.moe/y9581k.mp4",
      "https://files.catbox.moe/50v589.mp4",
      "https://files.catbox.moe/r1f7r2.mp4",
      "https://files.catbox.moe/vbkw1k.mp4",
      "https://files.catbox.moe/tc0jzj.mp4",
      "https://files.catbox.moe/yajxkr.mp4",
      "https://files.catbox.moe/856809.mp4",
      "https://files.catbox.moe/biihbv.mp4",
      "https://files.catbox.moe/qv4pal.mp4"
    ];

    const video = videos[Math.floor(Math.random() * videos.length)];

    const message =
      "╭━━━〔 𝐆𝐈𝐑𝐋𝐒 𝟕𝟕 〕━━━╮\n" +
      "┃ ✦ 𝐑𝐚𝐧𝐝𝐨𝐦 𝐕𝐢𝐝𝐞𝐨\n" +
      "┃ ✦ 𝐂𝐨𝐥𝐥𝐞𝐜𝐭𝐢𝐨𝐧 𝐋𝐨𝐚𝐝𝐞𝐝\n" +
      "┃ ✦ 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐒𝐇𝐈𝐒𝐇𝐈𝐑\n" +
      "╰━━━━━━━━━━━━━━━━╯";

    api.sendMessage(message, event.threadID, () => {
      api.sendMessage(
        {
          body: "💗 𝐆𝐈𝐑𝐋𝐒 𝟕𝟕 | 𝐒𝐇𝐈𝐒𝐇𝐈𝐑",
          attachment: null
        },
        event.threadID
      );
    });
  }
};
