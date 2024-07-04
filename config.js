//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibURMTVA5WGZsNzlaSlBWRWdvK1NxWHd6bHFEZlE4SnBybjNSUHVQWURHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUUyZDV6RisvY1A1cVZIMkc2RmlHMDdLc1ZSMnRqeXNYbDgrcjk2MXduOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SThJR0dEbVJSYWdiaHhKL0hEN0d5VWUzbllMZnVyZXo4ZXJLcHVGcUVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0N3cxSWNqdHRPbEVHY3A5VVFEdXh5cnp4WWt0R1pRZ2VDNFNxZHdBN0ZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitJTllFZ1RUYTZxZ2RlTmJOTk1pbzVodWJ3SktYakFHdmFicTZzV2Mzbm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9IK1doT05hcWVFK05zOE03WFptb1BGdXZ2ckFpbm5Kdis4VWczSnBHMDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT05DVkI4Ry9XRWZZc0pyekFpaFo4MXl6cFFnZkNJVmRRTmpnU2JES0ZGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDNxcm4xLzhVdDJ6WWtRdmVlVHhGekQ2ZTVwZWVWdVVORFgyL0kySDVWUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJ4N1gzUGdEcThkRllwRXlsNTFkL3ZkNzgrd0ZwL1hGaDhqdmFZajBIWkFzczlyeHk1L3d6STRKcjA5eGFPVXJZUTJtK3BIQU82ODVpKzMwQVllMUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6IndaMzQ1NGE3K25DNUkrNW0waTVuVmZuVUF2ZFlrMUJWcnZNU01GNFhOQWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTY3ODc4MDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQURGMTUxNUQ1MkY0QzY5QzM5NUY1NkE0RjRGRUFENDgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDEyMjkyMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTY3ODc4MDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTlGMDZBMEIxNTNDOUUxQ0IzQjE0NTkzODUxNjE0MjgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDEyMjkyMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTY3ODc4MDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQThCREE5OTk5ODk0NDFEOTI5MzI3OTE1NzYzNEJGMDUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDEyMjkyNH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTY3ODc4MDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDM0QTAzNzM5Njc4M0Y0RUNFRDM2ODM1NjAxRUU4NDMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDEyMjkyNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiajAyUGhCalVTSzZpb1UwcjE4eG4wZyIsInBob25lSWQiOiIzODMwYmUwOC03MzU4LTQzMmYtYTE1NS1hMGJlZGMzNWFhYjIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2VtOUc2SVhaOFhGSEwrK004YTBZTDJlZ0ZrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBRZWt6TWlPRTBOQVc1TDlsUzlVRlNQWjdlcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJLUDkzOTlWSyIsIm1lIjp7ImlkIjoiOTQ3MTY3ODc4MDM6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwn5mCIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPNmgvTmtCRUp2OG03UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnL0dWUnBzRDlBVDk0UWhLd1J4L0VrVjJVQjZ5ZHZ6Y2E0bWM1Z2xJT0Q4PSIsImFjY291bnRTaWduYXR1cmUiOiIxaXNlc21YeFdMYXg2UnpyNThJN0JHUVFET1ZEZTlKK0pVZzYxTVZWcllRa1JmdnBTdUlSM3luR0VlVGgvSk1PTmxLT1RPd2l0aGE2VURycm5OcWRDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT05HS0ZWclc1a2hJMkxabVF6UGprc2lya0x1Z3VWeUd2Qnh6TVM2T3R0aHpDV1drNE0xSkZnZWgxWFNFRGJNZ3NTNStxd1F1T3VjakMwN3Y4U1J2RFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxNjc4NzgwMzo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllQeGxVYWJBL1FFL2VFSVNzRWNmeEpGZGxBZXNuYjgzR3VKbk9ZSlNEZy8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAxMjI5MjAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRG8yIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
