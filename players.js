// =============================================================
// NBA PLAYERS DATABASE  (2023-24 / 2024-25 / 2025-26)
// =============================================================

/**
 * シーズンメタデータ
 * completed: true  → シーズン終了確定データ（変更なし）
 * completed: false → 進行中シーズン（随時更新が必要）
 * dataAsOf: データの基準日
 */
const NBA_SEASON_META = {
  "2025-26": {
    label:     "2025-26",
    badge:     "LATEST",
    badgeColor:"#e05a5a",
    note:      "2025-26シーズン確定ロスター（2026年6月時点）",
    completed: true,
    dataAsOf:  "2026-06-01",
  },
  "2024-25": {
    label:     "2024-25",
    badge:     "確定",
    badgeColor:"#2ecc71",
    note:      "2024-25シーズン確定ロスター（開幕日ベース）",
    completed: true,
    dataAsOf:  "2025-06-01",
  },
  "2023-24": {
    label:     "2023-24",
    badge:     "確定",
    badgeColor:"#2ecc71",
    note:      "2023-24シーズン確定ロスター（開幕日ベース）",
    completed: true,
    dataAsOf:  "2024-06-01",
  },
};

const TEAM_COLORS = {
  LAL:"#552583", GSW:"#1D428A", BOS:"#007A33", DEN:"#0E2240",
  OKC:"#007AC1", NYK:"#006BB6", MIL:"#00471B", MIA:"#98002E",
  LAC:"#C8102E", PHI:"#006BB6", PHX:"#1D1160", MIN:"#0C2340",
  DAL:"#00538C", MEM:"#5D76A9", BKN:"#000000", CHI:"#CE1141",
  CLE:"#860038", TOR:"#CE1141", SAS:"#C4CED4", HOU:"#CE1141",
  SAC:"#5A2D81", UTA:"#002B5C", POR:"#E03A3E", ATL:"#E03A3E",
  ORL:"#0077C0", CHA:"#1D1160", DET:"#C8102E", IND:"#002D62",
  WAS:"#002B5C",
};

const NBA_PLAYERS_BY_SEASON = {


// ─────────────────────────────────────────────
// 2025-26  ★ ESPN公式APIデータ (2026-06-05 取得)
//   source: site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/{id}/roster
// ─────────────────────────────────────────────
"2025-26": [
  // ── LAL (Lakers) ── Pacific, West  [53-29]
  { name:"Luka Doncic",             team:"LAL", pos:"PG", height:203, jersey:77, age:27, conf:"West", div:"Pacific",   emoji:"🐉" },
  { name:"LeBron James",            team:"LAL", pos:"SF", height:206, jersey:23, age:41, conf:"West", div:"Pacific",   emoji:"👑" },
  { name:"Austin Reaves",           team:"LAL", pos:"SG", height:196, jersey:15, age:28, conf:"West", div:"Pacific",   emoji:"🤠" },
  { name:"Deandre Ayton",           team:"LAL", pos:"C",  height:213, jersey:5,  age:27, conf:"West", div:"Pacific",   emoji:"🏔️" },
  { name:"Dalton Knecht",           team:"LAL", pos:"SF", height:198, jersey:4,  age:25, conf:"West", div:"Pacific",   emoji:"🆕" },
  { name:"Maxi Kleber",             team:"LAL", pos:"PF", height:208, jersey:14, age:34, conf:"West", div:"Pacific",   emoji:"🇩🇪" },
  { name:"Marcus Smart",            team:"LAL", pos:"PG", height:191, jersey:36, age:32, conf:"West", div:"Pacific",   emoji:"🐻" },
  { name:"Bronny James",            team:"LAL", pos:"SG", height:188, jersey:9,  age:21, conf:"West", div:"Pacific",   emoji:"👶" },
  { name:"Rui Hachimura",           team:"LAL", pos:"PF", height:203, jersey:28, age:28, conf:"West", div:"Pacific",   emoji:"🇯🇵" },
  { name:"Jarred Vanderbilt",       team:"LAL", pos:"PF", height:203, jersey:2,  age:27, conf:"West", div:"Pacific",   emoji:"🐦" },

  // ── GSW (Warriors) ── Pacific, West
  { name:"Stephen Curry",           team:"GSW", pos:"PG", height:188, jersey:30, age:38, conf:"West", div:"Pacific",   emoji:"🎯" },
  { name:"Draymond Green",          team:"GSW", pos:"PF", height:198, jersey:23, age:36, conf:"West", div:"Pacific",   emoji:"💪" },
  { name:"Jimmy Butler",            team:"GSW", pos:"SF", height:198, jersey:10, age:36, conf:"West", div:"Pacific",   emoji:"😤" },
  { name:"Kristaps Porzingis",      team:"GSW", pos:"C",  height:218, jersey:7,  age:30, conf:"West", div:"Pacific",   emoji:"🇱🇻" },
  { name:"Brandin Podziemski",      team:"GSW", pos:"SG", height:193, jersey:2,  age:23, conf:"West", div:"Pacific",   emoji:"🆕" },
  { name:"Moses Moody",             team:"GSW", pos:"SG", height:196, jersey:4,  age:24, conf:"West", div:"Pacific",   emoji:"💫" },
  { name:"De'Anthony Melton",       team:"GSW", pos:"SG", height:188, jersey:8,  age:28, conf:"West", div:"Pacific",   emoji:"🔒" },
  { name:"Al Horford",              team:"GSW", pos:"C",  height:203, jersey:20, age:40, conf:"West", div:"Pacific",   emoji:"🌟" },

  // ── BOS (Celtics) ── Atlantic, East
  { name:"Jayson Tatum",            team:"BOS", pos:"SF", height:203, jersey:0,  age:28, conf:"East", div:"Atlantic",  emoji:"☘️" },
  { name:"Jaylen Brown",            team:"BOS", pos:"SG", height:198, jersey:7,  age:29, conf:"East", div:"Atlantic",  emoji:"🔒" },
  { name:"Derrick White",           team:"BOS", pos:"SG", height:193, jersey:9,  age:31, conf:"East", div:"Atlantic",  emoji:"🤍" },
  { name:"Payton Pritchard",        team:"BOS", pos:"PG", height:185, jersey:11, age:28, conf:"East", div:"Atlantic",  emoji:"🎱" },
  { name:"Nikola Vucevic",          team:"BOS", pos:"C",  height:206, jersey:4,  age:35, conf:"East", div:"Atlantic",  emoji:"🇲🇪" },

  // ── DEN (Nuggets) ── Northwest, West
  { name:"Nikola Jokic",            team:"DEN", pos:"C",  height:211, jersey:15, age:31, conf:"West", div:"Northwest", emoji:"🐴" },
  { name:"Jamal Murray",            team:"DEN", pos:"PG", height:193, jersey:27, age:29, conf:"West", div:"Northwest", emoji:"🍁" },
  { name:"Aaron Gordon",            team:"DEN", pos:"PF", height:203, jersey:32, age:30, conf:"West", div:"Northwest", emoji:"🦁" },
  { name:"Cameron Johnson",         team:"DEN", pos:"SF", height:203, jersey:23, age:30, conf:"West", div:"Northwest", emoji:"🌵" },
  { name:"Christian Braun",         team:"DEN", pos:"SG", height:198, jersey:0,  age:25, conf:"West", div:"Northwest", emoji:"🆕" },
  { name:"DaRon Holmes II",         team:"DEN", pos:"PF", height:206, jersey:14, age:23, conf:"West", div:"Northwest", emoji:"🆕" },

  // ── OKC (Thunder) ── Northwest, West  [2024-25 CHAMPIONS]
  { name:"Shai Gilgeous-Alexander", team:"OKC", pos:"PG", height:198, jersey:2,  age:27, conf:"West", div:"Northwest", emoji:"⚡" },
  { name:"Chet Holmgren",           team:"OKC", pos:"C",  height:216, jersey:7,  age:24, conf:"West", div:"Northwest", emoji:"🌩️" },
  { name:"Jalen Williams",          team:"OKC", pos:"SG", height:196, jersey:8,  age:25, conf:"West", div:"Northwest", emoji:"🎆" },
  { name:"Luguentz Dort",           team:"OKC", pos:"SG", height:193, jersey:5,  age:27, conf:"West", div:"Northwest", emoji:"🛡️" },
  { name:"Alex Caruso",             team:"OKC", pos:"SG", height:196, jersey:9,  age:32, conf:"West", div:"Northwest", emoji:"🔬" },
  { name:"Isaiah Hartenstein",      team:"OKC", pos:"C",  height:213, jersey:55, age:28, conf:"West", div:"Northwest", emoji:"🏋️" },
  { name:"Jared McCain",            team:"OKC", pos:"PG", height:191, jersey:3,  age:22, conf:"West", div:"Northwest", emoji:"🆕" },
  { name:"Cason Wallace",           team:"OKC", pos:"SG", height:191, jersey:22, age:22, conf:"West", div:"Northwest", emoji:"🆕" },

  // ── NYK (Knicks) ── Atlantic, East
  { name:"Jalen Brunson",           team:"NYK", pos:"PG", height:188, jersey:11, age:29, conf:"East", div:"Atlantic",  emoji:"🗽" },
  { name:"Karl-Anthony Towns",      team:"NYK", pos:"C",  height:213, jersey:32, age:30, conf:"East", div:"Atlantic",  emoji:"🏙️" },
  { name:"OG Anunoby",              team:"NYK", pos:"SF", height:201, jersey:8,  age:28, conf:"East", div:"Atlantic",  emoji:"🇬🇧" },
  { name:"Josh Hart",               team:"NYK", pos:"SG", height:196, jersey:3,  age:31, conf:"East", div:"Atlantic",  emoji:"💼" },
  { name:"Mikal Bridges",           team:"NYK", pos:"SG", height:198, jersey:25, age:29, conf:"East", div:"Atlantic",  emoji:"🌉" },
  { name:"Jordan Clarkson",         team:"NYK", pos:"SG", height:193, jersey:0,  age:33, conf:"East", div:"Atlantic",  emoji:"🎸" },

  // ── MIL (Bucks) ── Central, East
  { name:"Giannis Antetokounmpo",   team:"MIL", pos:"PF", height:211, jersey:34, age:31, conf:"East", div:"Central",   emoji:"🦌" },
  { name:"Myles Turner",            team:"MIL", pos:"C",  height:211, jersey:3,  age:30, conf:"East", div:"Central",   emoji:"🛡️" },
  { name:"Kyle Kuzma",              team:"MIL", pos:"PF", height:203, jersey:18, age:30, conf:"East", div:"Central",   emoji:"🔴" },
  { name:"Gary Trent Jr.",          team:"MIL", pos:"SG", height:196, jersey:5,  age:27, conf:"East", div:"Central",   emoji:"🏹" },
  { name:"Bobby Portis",            team:"MIL", pos:"PF", height:206, jersey:9,  age:31, conf:"East", div:"Central",   emoji:"⚡" },

  // ── MIA (Heat) ── Southeast, East
  { name:"Bam Adebayo",             team:"MIA", pos:"C",  height:206, jersey:13, age:28, conf:"East", div:"Southeast", emoji:"🔥" },
  { name:"Tyler Herro",             team:"MIA", pos:"SG", height:196, jersey:14, age:26, conf:"East", div:"Southeast", emoji:"🔫" },
  { name:"Andrew Wiggins",          team:"MIA", pos:"SF", height:201, jersey:22, age:31, conf:"East", div:"Southeast", emoji:"🇨🇦" },
  { name:"Norman Powell",           team:"MIA", pos:"SG", height:193, jersey:24, age:33, conf:"East", div:"Southeast", emoji:"💪" },
  { name:"Nikola Jovic",            team:"MIA", pos:"PF", height:208, jersey:5,  age:22, conf:"East", div:"Southeast", emoji:"🇷🇸" },

  // ── LAC (Clippers) ── Pacific, West
  { name:"Kawhi Leonard",           team:"LAC", pos:"SF", height:198, jersey:2,  age:34, conf:"West", div:"Pacific",   emoji:"🦾" },
  { name:"Darius Garland",          team:"LAC", pos:"PG", height:185, jersey:10, age:26, conf:"West", div:"Pacific",   emoji:"🌀" },
  { name:"Bradley Beal",            team:"LAC", pos:"SG", height:193, jersey:0,  age:32, conf:"West", div:"Pacific",   emoji:"🎴" },
  { name:"Brook Lopez",             team:"LAC", pos:"C",  height:216, jersey:11, age:38, conf:"West", div:"Pacific",   emoji:"🛁" },
  { name:"John Collins",            team:"LAC", pos:"PF", height:206, jersey:20, age:28, conf:"West", div:"Pacific",   emoji:"🏋️" },
  { name:"Bogdan Bogdanovic",       team:"LAC", pos:"SG", height:196, jersey:7,  age:33, conf:"West", div:"Pacific",   emoji:"🇷🇸" },

  // ── PHI (76ers) ── Atlantic, East
  { name:"Joel Embiid",             team:"PHI", pos:"C",  height:213, jersey:21, age:32, conf:"East", div:"Atlantic",  emoji:"🇨🇲" },
  { name:"Tyrese Maxey",            team:"PHI", pos:"PG", height:188, jersey:0,  age:25, conf:"East", div:"Atlantic",  emoji:"💨" },
  { name:"Paul George",             team:"PHI", pos:"SF", height:203, jersey:8,  age:36, conf:"East", div:"Atlantic",  emoji:"🌙" },

  // ── PHX (Suns) ── Pacific, West
  { name:"Devin Booker",            team:"PHX", pos:"SG", height:196, jersey:1,  age:29, conf:"West", div:"Pacific",   emoji:"📚" },
  { name:"Jalen Green",             team:"PHX", pos:"SG", height:193, jersey:4,  age:24, conf:"West", div:"Pacific",   emoji:"💚" },
  { name:"Dillon Brooks",           team:"PHX", pos:"SF", height:201, jersey:3,  age:30, conf:"West", div:"Pacific",   emoji:"🐶" },
  { name:"Ryan Dunn",               team:"PHX", pos:"SF", height:201, jersey:0,  age:23, conf:"West", div:"Pacific",   emoji:"🆕" },
  { name:"Khaman Maluach",          team:"PHX", pos:"C",  height:216, jersey:10, age:19, conf:"West", div:"Pacific",   emoji:"🆕" },

  // ── MIN (Timberwolves) ── Northwest, West
  { name:"Anthony Edwards",         team:"MIN", pos:"SG", height:193, jersey:5,  age:24, conf:"West", div:"Northwest", emoji:"🐺" },
  { name:"Rudy Gobert",             team:"MIN", pos:"C",  height:216, jersey:27, age:33, conf:"West", div:"Northwest", emoji:"🗼" },
  { name:"Julius Randle",           team:"MIN", pos:"PF", height:206, jersey:30, age:31, conf:"West", div:"Northwest", emoji:"🔨" },
  { name:"Naz Reid",                team:"MIN", pos:"C",  height:206, jersey:11, age:26, conf:"West", div:"Northwest", emoji:"🔥" },
  { name:"Jaden McDaniels",         team:"MIN", pos:"SF", height:206, jersey:3,  age:25, conf:"West", div:"Northwest", emoji:"🐉" },
  { name:"Donte DiVincenzo",        team:"MIN", pos:"SG", height:193, jersey:0,  age:29, conf:"West", div:"Northwest", emoji:"🎯" },

  // ── DAL (Mavericks) ── Southwest, West
  { name:"Cooper Flagg",            team:"DAL", pos:"PF", height:206, jersey:32, age:19, conf:"West", div:"Southwest", emoji:"🚩" },
  { name:"Kyrie Irving",            team:"DAL", pos:"PG", height:188, jersey:11, age:34, conf:"West", div:"Southwest", emoji:"🌀" },
  { name:"Klay Thompson",           team:"DAL", pos:"SG", height:196, jersey:31, age:36, conf:"West", div:"Southwest", emoji:"🌊" },
  { name:"PJ Washington",           team:"DAL", pos:"PF", height:201, jersey:25, age:27, conf:"West", div:"Southwest", emoji:"🌟" },
  { name:"Daniel Gafford",          team:"DAL", pos:"C",  height:208, jersey:21, age:27, conf:"West", div:"Southwest", emoji:"🚂" },
  { name:"Naji Marshall",           team:"DAL", pos:"SF", height:198, jersey:13, age:28, conf:"West", div:"Southwest", emoji:"🔧" },
  { name:"Dereck Lively II",        team:"DAL", pos:"C",  height:216, jersey:2,  age:22, conf:"West", div:"Southwest", emoji:"🆕" },

  // ── MEM (Grizzlies) ── Southwest, West
  { name:"Ja Morant",               team:"MEM", pos:"PG", height:188, jersey:12, age:26, conf:"West", div:"Southwest", emoji:"🚀" },
  { name:"Zach Edey",               team:"MEM", pos:"C",  height:221, jersey:14, age:24, conf:"West", div:"Southwest", emoji:"🏔️" },
  { name:"GG Jackson",              team:"MEM", pos:"PF", height:206, jersey:45, age:21, conf:"West", div:"Southwest", emoji:"🆕" },
  { name:"Santi Aldama",            team:"MEM", pos:"PF", height:213, jersey:7,  age:25, conf:"West", div:"Southwest", emoji:"🇪🇸" },
  { name:"Jaylen Wells",            team:"MEM", pos:"SF", height:201, jersey:0,  age:22, conf:"West", div:"Southwest", emoji:"🆕" },

  // ── BKN (Nets) ── Atlantic, East
  { name:"Michael Porter Jr.",      team:"BKN", pos:"SF", height:208, jersey:17, age:27, conf:"East", div:"Atlantic",  emoji:"📈" },
  { name:"Nic Claxton",             team:"BKN", pos:"C",  height:211, jersey:33, age:27, conf:"East", div:"Atlantic",  emoji:"🕸️" },
  { name:"Ziaire Williams",         team:"BKN", pos:"SF", height:206, jersey:1,  age:24, conf:"East", div:"Atlantic",  emoji:"🆕" },

  // ── CHI (Bulls) ── Central, East
  { name:"Anfernee Simons",         team:"CHI", pos:"SG", height:191, jersey:22, age:26, conf:"East", div:"Central",   emoji:"🌹" },
  { name:"Josh Giddey",             team:"CHI", pos:"PG", height:201, jersey:3,  age:23, conf:"East", div:"Central",   emoji:"🇦🇺" },
  { name:"Matas Buzelis",           team:"CHI", pos:"PF", height:203, jersey:14, age:21, conf:"East", div:"Central",   emoji:"🆕" },
  { name:"Patrick Williams",        team:"CHI", pos:"SF", height:198, jersey:44, age:24, conf:"East", div:"Central",   emoji:"🏋️" },

  // ── CLE (Cavaliers) ── Central, East
  { name:"Donovan Mitchell",        team:"CLE", pos:"SG", height:185, jersey:45, age:29, conf:"East", div:"Central",   emoji:"🦅" },
  { name:"Evan Mobley",             team:"CLE", pos:"C",  height:211, jersey:4,  age:24, conf:"East", div:"Central",   emoji:"🛡️" },
  { name:"Jarrett Allen",           team:"CLE", pos:"C",  height:206, jersey:31, age:28, conf:"East", div:"Central",   emoji:"🦒" },
  { name:"James Harden",            team:"CLE", pos:"PG", height:196, jersey:1,  age:36, conf:"East", div:"Central",   emoji:"🧔" },
  { name:"Max Strus",               team:"CLE", pos:"SG", height:196, jersey:2,  age:30, conf:"East", div:"Central",   emoji:"💫" },

  // ── TOR (Raptors) ── Atlantic, East
  { name:"Scottie Barnes",          team:"TOR", pos:"PF", height:203, jersey:4,  age:24, conf:"East", div:"Atlantic",  emoji:"🍁" },
  { name:"RJ Barrett",              team:"TOR", pos:"SF", height:198, jersey:9,  age:25, conf:"East", div:"Atlantic",  emoji:"🇨🇦" },
  { name:"Immanuel Quickley",       team:"TOR", pos:"PG", height:188, jersey:5,  age:26, conf:"East", div:"Atlantic",  emoji:"⚡" },
  { name:"Brandon Ingram",          team:"TOR", pos:"SF", height:203, jersey:3,  age:28, conf:"East", div:"Atlantic",  emoji:"🌴" },
  { name:"Jakob Poeltl",            team:"TOR", pos:"C",  height:213, jersey:19, age:30, conf:"East", div:"Atlantic",  emoji:"🇦🇹" },
  { name:"Gradey Dick",             team:"TOR", pos:"SG", height:201, jersey:1,  age:22, conf:"East", div:"Atlantic",  emoji:"🆕" },

  // ── SAS (Spurs) ── Southwest, West
  { name:"Victor Wembanyama",       team:"SAS", pos:"C",  height:224, jersey:1,  age:22, conf:"West", div:"Southwest", emoji:"👽" },
  { name:"De'Aaron Fox",            team:"SAS", pos:"PG", height:191, jersey:4,  age:28, conf:"West", div:"Southwest", emoji:"🦊" },
  { name:"Stephon Castle",          team:"SAS", pos:"PG", height:198, jersey:5,  age:21, conf:"West", div:"Southwest", emoji:"🏰" },
  { name:"Dylan Harper",            team:"SAS", pos:"PG", height:196, jersey:2,  age:20, conf:"West", div:"Southwest", emoji:"🆕" },
  { name:"Devin Vassell",           team:"SAS", pos:"SG", height:196, jersey:24, age:25, conf:"West", div:"Southwest", emoji:"🌵" },

  // ── HOU (Rockets) ── Southwest, West
  { name:"Kevin Durant",            team:"HOU", pos:"SF", height:211, jersey:7,  age:37, conf:"West", div:"Southwest", emoji:"🐍" },
  { name:"Alperen Sengun",          team:"HOU", pos:"C",  height:211, jersey:28, age:23, conf:"West", div:"Southwest", emoji:"🇹🇷" },
  { name:"Amen Thompson",           team:"HOU", pos:"SG", height:201, jersey:1,  age:23, conf:"West", div:"Southwest", emoji:"⚡" },
  { name:"Reed Sheppard",           team:"HOU", pos:"PG", height:188, jersey:15, age:21, conf:"West", div:"Southwest", emoji:"🆕" },
  { name:"Fred VanVleet",           team:"HOU", pos:"PG", height:183, jersey:5,  age:32, conf:"West", div:"Southwest", emoji:"🇨🇦" },
  { name:"Jabari Smith Jr.",        team:"HOU", pos:"PF", height:211, jersey:10, age:23, conf:"West", div:"Southwest", emoji:"💎" },
  { name:"Tari Eason",              team:"HOU", pos:"PF", height:203, jersey:17, age:25, conf:"West", div:"Southwest", emoji:"🔥" },

  // ── SAC (Kings) ── Pacific, West
  { name:"Domantas Sabonis",        team:"SAC", pos:"C",  height:208, jersey:11, age:30, conf:"West", div:"Pacific",   emoji:"🇱🇹" },
  { name:"Zach LaVine",             team:"SAC", pos:"SG", height:196, jersey:8,  age:31, conf:"West", div:"Pacific",   emoji:"🐂" },
  { name:"Keegan Murray",           team:"SAC", pos:"SF", height:203, jersey:13, age:25, conf:"West", div:"Pacific",   emoji:"🔴" },
  { name:"DeMar DeRozan",           team:"SAC", pos:"SG", height:198, jersey:10, age:36, conf:"West", div:"Pacific",   emoji:"🇨🇦" },
  { name:"Malik Monk",              team:"SAC", pos:"PG", height:191, jersey:0,  age:28, conf:"West", div:"Pacific",   emoji:"🐒" },

  // ── UTA (Jazz) ── Northwest, West
  { name:"Lauri Markkanen",         team:"UTA", pos:"PF", height:216, jersey:23, age:29, conf:"West", div:"Northwest", emoji:"🇫🇮" },
  { name:"Walker Kessler",          team:"UTA", pos:"C",  height:218, jersey:24, age:24, conf:"West", div:"Northwest", emoji:"🧱" },
  { name:"Jaren Jackson Jr.",       team:"UTA", pos:"PF", height:208, jersey:20, age:26, conf:"West", div:"Northwest", emoji:"🦁" },
  { name:"Keyonte George",          team:"UTA", pos:"PG", height:193, jersey:3,  age:22, conf:"West", div:"Northwest", emoji:"🆕" },
  { name:"Ace Bailey",              team:"UTA", pos:"SG", height:206, jersey:19, age:19, conf:"West", div:"Northwest", emoji:"🆕" },

  // ── POR (Blazers) ── Northwest, West
  { name:"Damian Lillard",          team:"POR", pos:"PG", height:188, jersey:0,  age:35, conf:"West", div:"Northwest", emoji:"🌹" },
  { name:"Jrue Holiday",            team:"POR", pos:"PG", height:193, jersey:5,  age:35, conf:"West", div:"Northwest", emoji:"🛡️" },
  { name:"Scoot Henderson",         team:"POR", pos:"PG", height:191, jersey:0,  age:22, conf:"West", div:"Northwest", emoji:"💨" },
  { name:"Deni Avdija",             team:"POR", pos:"SF", height:203, jersey:8,  age:25, conf:"West", div:"Northwest", emoji:"🇮🇱" },
  { name:"Donovan Clingan",         team:"POR", pos:"C",  height:218, jersey:23, age:22, conf:"West", div:"Northwest", emoji:"🆕" },
  { name:"Shaedon Sharpe",          team:"POR", pos:"SG", height:196, jersey:17, age:23, conf:"West", div:"Northwest", emoji:"⚔️" },

  // ── ATL (Hawks) ── Southeast, East
  { name:"Jalen Johnson",           team:"ATL", pos:"SF", height:203, jersey:1,  age:24, conf:"East", div:"Southeast", emoji:"🆕" },
  { name:"Jonathan Kuminga",        team:"ATL", pos:"SF", height:198, jersey:0,  age:23, conf:"East", div:"Southeast", emoji:"🇨🇩" },
  { name:"Asa Newell",              team:"ATL", pos:"PF", height:208, jersey:14, age:20, conf:"East", div:"Southeast", emoji:"🆕" },
  { name:"Dyson Daniels",           team:"ATL", pos:"SG", height:201, jersey:5,  age:23, conf:"East", div:"Southeast", emoji:"🇦🇺" },
  { name:"Onyeka Okongwu",          team:"ATL", pos:"C",  height:206, jersey:17, age:25, conf:"East", div:"Southeast", emoji:"🦅" },
  { name:"Zaccharie Risacher",      team:"ATL", pos:"SF", height:203, jersey:10, age:21, conf:"East", div:"Southeast", emoji:"🇫🇷" },

  // ── ORL (Magic) ── Southeast, East
  { name:"Paolo Banchero",          team:"ORL", pos:"PF", height:208, jersey:5,  age:23, conf:"East", div:"Southeast", emoji:"🪄" },
  { name:"Franz Wagner",            team:"ORL", pos:"SF", height:208, jersey:22, age:24, conf:"East", div:"Southeast", emoji:"🇩🇪" },
  { name:"Jalen Suggs",             team:"ORL", pos:"PG", height:196, jersey:4,  age:25, conf:"East", div:"Southeast", emoji:"🏈" },
  { name:"Desmond Bane",            team:"ORL", pos:"SG", height:198, jersey:3,  age:27, conf:"East", div:"Southeast", emoji:"🎳" },
  { name:"Wendell Carter Jr.",      team:"ORL", pos:"C",  height:208, jersey:34, age:27, conf:"East", div:"Southeast", emoji:"🎡" },
  { name:"Jonathan Isaac",          team:"ORL", pos:"PF", height:208, jersey:1,  age:28, conf:"East", div:"Southeast", emoji:"🙏" },

  // ── CHA (Hornets) ── Southeast, East
  { name:"LaMelo Ball",             team:"CHA", pos:"PG", height:201, jersey:1,  age:24, conf:"East", div:"Southeast", emoji:"🐝" },
  { name:"Miles Bridges",           team:"CHA", pos:"SF", height:201, jersey:0,  age:28, conf:"East", div:"Southeast", emoji:"🌁" },
  { name:"Brandon Miller",          team:"CHA", pos:"SF", height:203, jersey:24, age:23, conf:"East", div:"Southeast", emoji:"🆕" },
  { name:"Coby White",              team:"CHA", pos:"PG", height:193, jersey:3,  age:26, conf:"East", div:"Southeast", emoji:"❄️" },
  { name:"Kon Knueppel",            team:"CHA", pos:"SG", height:198, jersey:7,  age:20, conf:"East", div:"Southeast", emoji:"🆕" },

  // ── DET (Pistons) ── Central, East
  { name:"Cade Cunningham",         team:"DET", pos:"PG", height:201, jersey:2,  age:24, conf:"East", div:"Central",   emoji:"⚙️" },
  { name:"Jalen Duren",             team:"DET", pos:"C",  height:208, jersey:0,  age:22, conf:"East", div:"Central",   emoji:"🔧" },
  { name:"Ausar Thompson",          team:"DET", pos:"SF", height:201, jersey:9,  age:23, conf:"East", div:"Central",   emoji:"🆕" },
  { name:"Isaiah Stewart",          team:"DET", pos:"PF", height:203, jersey:28, age:25, conf:"East", div:"Central",   emoji:"💪" },
  { name:"Kevin Huerter",           team:"DET", pos:"SG", height:201, jersey:27, age:27, conf:"East", div:"Central",   emoji:"🔴" },

  // ── IND (Pacers) ── Central, East
  { name:"Tyrese Haliburton",       team:"IND", pos:"PG", height:196, jersey:0,  age:26, conf:"East", div:"Central",   emoji:"🏎️" },
  { name:"Pascal Siakam",           team:"IND", pos:"PF", height:203, jersey:43, age:32, conf:"East", div:"Central",   emoji:"🇨🇲" },
  { name:"Ivica Zubac",             team:"IND", pos:"C",  height:213, jersey:40, age:29, conf:"East", div:"Central",   emoji:"🇭🇷" },
  { name:"Andrew Nembhard",         team:"IND", pos:"PG", height:193, jersey:2,  age:26, conf:"East", div:"Central",   emoji:"🇨🇦" },
  { name:"Aaron Nesmith",           team:"IND", pos:"SF", height:196, jersey:23, age:26, conf:"East", div:"Central",   emoji:"🏹" },

  // ── WAS (Wizards) ── Southeast, East
  { name:"Trae Young",              team:"WAS", pos:"PG", height:185, jersey:3,  age:27, conf:"East", div:"Southeast", emoji:"🦅" },
  { name:"Anthony Davis",           team:"WAS", pos:"C",  height:208, jersey:23, age:33, conf:"East", div:"Southeast", emoji:"🦁" },
  { name:"Alex Sarr",               team:"WAS", pos:"C",  height:213, jersey:20, age:21, conf:"East", div:"Southeast", emoji:"🆕" },
  { name:"D'Angelo Russell",        team:"WAS", pos:"PG", height:191, jersey:5,  age:30, conf:"East", div:"Southeast", emoji:"🏀" },
  { name:"Bilal Coulibaly",         team:"WAS", pos:"SG", height:201, jersey:0,  age:21, conf:"East", div:"Southeast", emoji:"🇫🇷" },
],

// ─────────────────────────────────────────────
// 2024-25  (前シーズン)
// ─────────────────────────────────────────────
"2024-25": [
  // Lakers — Luka トレード前の後半シーズン
  { name:"LeBron James",            team:"LAL", pos:"SF", height:206, jersey:23, age:40, conf:"West", div:"Pacific",   emoji:"👑" },
  { name:"Anthony Davis",           team:"LAL", pos:"C",  height:208, jersey:3,  age:31, conf:"West", div:"Pacific",   emoji:"🦁" },
  { name:"Austin Reaves",           team:"LAL", pos:"SG", height:196, jersey:15, age:26, conf:"West", div:"Pacific",   emoji:"🤠" },
  { name:"Dalton Knecht",           team:"LAL", pos:"SG", height:196, jersey:4,  age:23, conf:"West", div:"Pacific",   emoji:"🆕" },
  { name:"Bronny James",            team:"LAL", pos:"SG", height:188, jersey:9,  age:20, conf:"West", div:"Pacific",   emoji:"👶" },
  { name:"D'Angelo Russell",        team:"LAL", pos:"PG", height:193, jersey:1,  age:28, conf:"West", div:"Pacific",   emoji:"🏀" },
  // Warriors
  { name:"Stephen Curry",           team:"GSW", pos:"PG", height:188, jersey:30, age:36, conf:"West", div:"Pacific",   emoji:"🎯" },
  { name:"Draymond Green",          team:"GSW", pos:"PF", height:198, jersey:23, age:34, conf:"West", div:"Pacific",   emoji:"💪" },
  { name:"Andrew Wiggins",          team:"GSW", pos:"SF", height:201, jersey:22, age:29, conf:"West", div:"Pacific",   emoji:"🇨🇦" },
  { name:"Jonathan Kuminga",        team:"GSW", pos:"SF", height:198, jersey:0,  age:21, conf:"West", div:"Pacific",   emoji:"🇨🇩" },
  { name:"Buddy Hield",             team:"GSW", pos:"SG", height:193, jersey:17, age:31, conf:"West", div:"Pacific",   emoji:"🌴" },
  // Celtics — 2024-25 チャンピオン防衛狙い
  { name:"Jayson Tatum",            team:"BOS", pos:"SF", height:203, jersey:0,  age:26, conf:"East", div:"Atlantic",  emoji:"☘️" },
  { name:"Jaylen Brown",            team:"BOS", pos:"SG", height:198, jersey:7,  age:28, conf:"East", div:"Atlantic",  emoji:"🔒" },
  { name:"Jrue Holiday",            team:"BOS", pos:"PG", height:193, jersey:4,  age:34, conf:"East", div:"Atlantic",  emoji:"🛡️" },
  { name:"Kristaps Porzingis",      team:"BOS", pos:"C",  height:221, jersey:8,  age:29, conf:"East", div:"Atlantic",  emoji:"🇱🇻" },
  { name:"Al Horford",              team:"BOS", pos:"C",  height:206, jersey:42, age:38, conf:"East", div:"Atlantic",  emoji:"🌟" },
  { name:"Derrick White",           team:"BOS", pos:"SG", height:193, jersey:9,  age:30, conf:"East", div:"Atlantic",  emoji:"🤍" },
  { name:"Payton Pritchard",        team:"BOS", pos:"PG", height:185, jersey:11, age:26, conf:"East", div:"Atlantic",  emoji:"🎱" },
  // Nuggets
  { name:"Nikola Jokic",            team:"DEN", pos:"C",  height:211, jersey:15, age:29, conf:"West", div:"Northwest", emoji:"🐴" },
  { name:"Jamal Murray",            team:"DEN", pos:"PG", height:193, jersey:27, age:27, conf:"West", div:"Northwest", emoji:"🍁" },
  { name:"Michael Porter Jr.",      team:"DEN", pos:"SF", height:206, jersey:1,  age:26, conf:"West", div:"Northwest", emoji:"📈" },
  { name:"Aaron Gordon",            team:"DEN", pos:"PF", height:203, jersey:50, age:29, conf:"West", div:"Northwest", emoji:"🦁" },
  // Thunder
  { name:"Shai Gilgeous-Alexander", team:"OKC", pos:"PG", height:198, jersey:2,  age:26, conf:"West", div:"Northwest", emoji:"⚡" },
  { name:"Chet Holmgren",           team:"OKC", pos:"C",  height:213, jersey:7,  age:22, conf:"West", div:"Northwest", emoji:"🌩️" },
  { name:"Jalen Williams",          team:"OKC", pos:"SG", height:198, jersey:8,  age:23, conf:"West", div:"Northwest", emoji:"🎆" },
  { name:"Luguentz Dort",           team:"OKC", pos:"SG", height:185, jersey:5,  age:25, conf:"West", div:"Northwest", emoji:"🛡️" },
  { name:"Jared McCain",            team:"OKC", pos:"PG", height:188, jersey:3,  age:20, conf:"West", div:"Northwest", emoji:"🆕" },
  { name:"Cason Wallace",           team:"OKC", pos:"SG", height:188, jersey:22, age:20, conf:"West", div:"Northwest", emoji:"🆕" },
  { name:"Isaiah Joe",              team:"OKC", pos:"SG", height:196, jersey:11, age:24, conf:"West", div:"Northwest", emoji:"🎯" },
  // Knicks — KAT 加入 (MIN→NYK)
  { name:"Jalen Brunson",           team:"NYK", pos:"PG", height:185, jersey:11, age:28, conf:"East", div:"Atlantic",  emoji:"🗽" },
  { name:"Karl-Anthony Towns",      team:"NYK", pos:"C",  height:213, jersey:32, age:29, conf:"East", div:"Atlantic",  emoji:"🏙️" },
  { name:"OG Anunoby",              team:"NYK", pos:"SF", height:201, jersey:8,  age:27, conf:"East", div:"Atlantic",  emoji:"🇬🇧" },
  { name:"Josh Hart",               team:"NYK", pos:"SG", height:193, jersey:3,  age:29, conf:"East", div:"Atlantic",  emoji:"💼" },
  { name:"Julius Randle",           team:"NYK", pos:"PF", height:203, jersey:30, age:29, conf:"East", div:"Atlantic",  emoji:"🔨" },
  // Bucks
  { name:"Giannis Antetokounmpo",   team:"MIL", pos:"PF", height:211, jersey:34, age:30, conf:"East", div:"Central",   emoji:"🦌" },
  { name:"Damian Lillard",          team:"MIL", pos:"PG", height:188, jersey:0,  age:34, conf:"East", div:"Central",   emoji:"🌹" },
  { name:"Brook Lopez",             team:"MIL", pos:"C",  height:213, jersey:11, age:36, conf:"East", div:"Central",   emoji:"🛁" },
  { name:"Khris Middleton",         team:"MIL", pos:"SF", height:203, jersey:22, age:32, conf:"East", div:"Central",   emoji:"🎨" },
  // Heat
  { name:"Bam Adebayo",             team:"MIA", pos:"C",  height:206, jersey:13, age:27, conf:"East", div:"Southeast", emoji:"🔥" },
  { name:"Tyler Herro",             team:"MIA", pos:"SG", height:196, jersey:14, age:24, conf:"East", div:"Southeast", emoji:"🔫" },
  { name:"Jimmy Butler",            team:"MIA", pos:"SF", height:201, jersey:22, age:35, conf:"East", div:"Southeast", emoji:"😤" },
  // Clippers
  { name:"Kawhi Leonard",           team:"LAC", pos:"SF", height:201, jersey:2,  age:33, conf:"West", div:"Pacific",   emoji:"🦾" },
  { name:"James Harden",            team:"LAC", pos:"PG", height:196, jersey:1,  age:35, conf:"West", div:"Pacific",   emoji:"🧔" },
  { name:"Ivica Zubac",             team:"LAC", pos:"C",  height:216, jersey:40, age:27, conf:"West", div:"Pacific",   emoji:"🇭🇷" },
  // 76ers
  { name:"Joel Embiid",             team:"PHI", pos:"C",  height:213, jersey:21, age:30, conf:"East", div:"Atlantic",  emoji:"🇨🇲" },
  { name:"Tyrese Maxey",            team:"PHI", pos:"PG", height:188, jersey:0,  age:23, conf:"East", div:"Atlantic",  emoji:"💨" },
  { name:"Paul George",             team:"PHI", pos:"SF", height:203, jersey:8,  age:34, conf:"East", div:"Atlantic",  emoji:"🌙" },
  // Suns
  { name:"Kevin Durant",            team:"PHX", pos:"SF", height:208, jersey:35, age:36, conf:"West", div:"Pacific",   emoji:"🐍" },
  { name:"Devin Booker",            team:"PHX", pos:"SG", height:196, jersey:1,  age:28, conf:"West", div:"Pacific",   emoji:"📚" },
  { name:"Bradley Beal",            team:"PHX", pos:"SG", height:193, jersey:3,  age:31, conf:"West", div:"Pacific",   emoji:"🎴" },
  // Timberwolves
  { name:"Anthony Edwards",         team:"MIN", pos:"SG", height:193, jersey:5,  age:23, conf:"West", div:"Northwest", emoji:"🐺" },
  { name:"Rudy Gobert",             team:"MIN", pos:"C",  height:216, jersey:27, age:32, conf:"West", div:"Northwest", emoji:"🗼" },
  { name:"Naz Reid",                team:"MIN", pos:"PF", height:206, jersey:11, age:25, conf:"West", div:"Northwest", emoji:"🔥" },
  { name:"Mike Conley",             team:"MIN", pos:"PG", height:183, jersey:10, age:37, conf:"West", div:"Northwest", emoji:"🎖️" },
  // Mavericks — Luka / Kyrie / Klay
  { name:"Luka Doncic",             team:"DAL", pos:"PG", height:201, jersey:77, age:25, conf:"West", div:"Southwest", emoji:"🇸🇮" },
  { name:"Kyrie Irving",            team:"DAL", pos:"PG", height:188, jersey:11, age:32, conf:"West", div:"Southwest", emoji:"🌀" },
  { name:"Klay Thompson",           team:"DAL", pos:"SG", height:198, jersey:31, age:34, conf:"West", div:"Southwest", emoji:"🌊" },
  { name:"PJ Washington",           team:"DAL", pos:"PF", height:201, jersey:25, age:26, conf:"West", div:"Southwest", emoji:"🌟" },
  { name:"Maxi Kleber",             team:"DAL", pos:"PF", height:208, jersey:42, age:32, conf:"West", div:"Southwest", emoji:"🇩🇪" },
  // Grizzlies
  { name:"Ja Morant",               team:"MEM", pos:"PG", height:188, jersey:12, age:24, conf:"West", div:"Southwest", emoji:"🚀" },
  { name:"Jaren Jackson Jr.",       team:"MEM", pos:"C",  height:211, jersey:13, age:24, conf:"West", div:"Southwest", emoji:"🦁" },
  { name:"Desmond Bane",            team:"MEM", pos:"SG", height:196, jersey:22, age:25, conf:"West", div:"Southwest", emoji:"🎳" },
  { name:"Marcus Smart",            team:"MEM", pos:"PG", height:191, jersey:36, age:30, conf:"West", div:"Southwest", emoji:"🐻" },
  // Nets
  { name:"Cam Thomas",              team:"BKN", pos:"SG", height:193, jersey:24, age:22, conf:"East", div:"Atlantic",  emoji:"🗼" },
  { name:"Nic Claxton",             team:"BKN", pos:"C",  height:211, jersey:33, age:24, conf:"East", div:"Atlantic",  emoji:"🕸️" },
  // Bulls
  { name:"Zach LaVine",             team:"CHI", pos:"SG", height:196, jersey:8,  age:29, conf:"East", div:"Central",   emoji:"🐂" },
  { name:"Nikola Vucevic",          team:"CHI", pos:"C",  height:213, jersey:9,  age:33, conf:"East", div:"Central",   emoji:"🇲🇪" },
  { name:"Alex Caruso",             team:"CHI", pos:"SG", height:196, jersey:6,  age:30, conf:"East", div:"Central",   emoji:"🔬" },
  { name:"Coby White",              team:"CHI", pos:"PG", height:193, jersey:0,  age:23, conf:"East", div:"Central",   emoji:"❄️" },
  // Cavaliers
  { name:"Donovan Mitchell",        team:"CLE", pos:"SG", height:185, jersey:45, age:28, conf:"East", div:"Central",   emoji:"🦅" },
  { name:"Darius Garland",          team:"CLE", pos:"PG", height:185, jersey:10, age:24, conf:"East", div:"Central",   emoji:"🌀" },
  { name:"Evan Mobley",             team:"CLE", pos:"C",  height:213, jersey:4,  age:23, conf:"East", div:"Central",   emoji:"🛡️" },
  { name:"Jarrett Allen",           team:"CLE", pos:"C",  height:211, jersey:31, age:26, conf:"East", div:"Central",   emoji:"🦒" },
  { name:"Max Strus",               team:"CLE", pos:"SG", height:196, jersey:1,  age:27, conf:"East", div:"Central",   emoji:"💫" },
  // Raptors
  { name:"Scottie Barnes",          team:"TOR", pos:"PF", height:206, jersey:4,  age:23, conf:"East", div:"Atlantic",  emoji:"🍁" },
  { name:"Immanuel Quickley",       team:"TOR", pos:"PG", height:188, jersey:5,  age:24, conf:"East", div:"Atlantic",  emoji:"⚡" },
  { name:"RJ Barrett",              team:"TOR", pos:"SF", height:198, jersey:9,  age:24, conf:"East", div:"Atlantic",  emoji:"🇨🇦" },
  // Spurs
  { name:"Victor Wembanyama",       team:"SAS", pos:"C",  height:224, jersey:1,  age:20, conf:"West", div:"Southwest", emoji:"👽" },
  { name:"Devin Vassell",           team:"SAS", pos:"SG", height:196, jersey:24, age:24, conf:"West", div:"Southwest", emoji:"🌵" },
  { name:"Stephon Castle",          team:"SAS", pos:"PG", height:196, jersey:5,  age:19, conf:"West", div:"Southwest", emoji:"🏰" },
  // Rockets
  { name:"Alperen Sengun",          team:"HOU", pos:"C",  height:211, jersey:28, age:22, conf:"West", div:"Southwest", emoji:"🇹🇷" },
  { name:"Jalen Green",             team:"HOU", pos:"SG", height:193, jersey:4,  age:22, conf:"West", div:"Southwest", emoji:"💚" },
  { name:"Dillon Brooks",           team:"HOU", pos:"SF", height:198, jersey:9,  age:28, conf:"West", div:"Southwest", emoji:"🐶" },
  { name:"Fred VanVleet",           team:"HOU", pos:"PG", height:185, jersey:5,  age:30, conf:"West", div:"Southwest", emoji:"🇨🇦" },
  { name:"Amen Thompson",           team:"HOU", pos:"SF", height:198, jersey:1,  age:21, conf:"West", div:"Southwest", emoji:"⚡" },
  { name:"Reed Sheppard",           team:"HOU", pos:"PG", height:193, jersey:15, age:20, conf:"West", div:"Southwest", emoji:"🆕" },
  { name:"Jabari Smith Jr.",        team:"HOU", pos:"PF", height:208, jersey:10, age:22, conf:"West", div:"Southwest", emoji:"💎" },
  // Kings
  { name:"De'Aaron Fox",            team:"SAC", pos:"PG", height:193, jersey:5,  age:26, conf:"West", div:"Pacific",   emoji:"🦊" },
  { name:"Domantas Sabonis",        team:"SAC", pos:"C",  height:211, jersey:10, age:28, conf:"West", div:"Pacific",   emoji:"🇱🇹" },
  { name:"Keegan Murray",           team:"SAC", pos:"SF", height:203, jersey:13, age:23, conf:"West", div:"Pacific",   emoji:"🔴" },
  // Jazz
  { name:"Lauri Markkanen",         team:"UTA", pos:"PF", height:213, jersey:23, age:27, conf:"West", div:"Northwest", emoji:"🇫🇮" },
  { name:"Walker Kessler",          team:"UTA", pos:"C",  height:218, jersey:24, age:22, conf:"West", div:"Northwest", emoji:"🧱" },
  { name:"Jordan Clarkson",         team:"UTA", pos:"SG", height:193, jersey:00, age:32, conf:"West", div:"Northwest", emoji:"🎸" },
  { name:"Keyonte George",          team:"UTA", pos:"PG", height:193, jersey:3,  age:21, conf:"West", div:"Northwest", emoji:"🆕" },
  // Blazers
  { name:"Scoot Henderson",         team:"POR", pos:"PG", height:188, jersey:0,  age:20, conf:"West", div:"Northwest", emoji:"🌹" },
  { name:"Anfernee Simons",         team:"POR", pos:"SG", height:188, jersey:1,  age:24, conf:"West", div:"Northwest", emoji:"🌹" },
  { name:"Deni Avdija",             team:"POR", pos:"SF", height:203, jersey:8,  age:23, conf:"West", div:"Northwest", emoji:"🇮🇱" },
  // Hawks
  { name:"Trae Young",              team:"ATL", pos:"PG", height:185, jersey:11, age:26, conf:"East", div:"Southeast", emoji:"🦅" },
  { name:"Dejounte Murray",         team:"ATL", pos:"SG", height:193, jersey:5,  age:27, conf:"East", div:"Southeast", emoji:"🦅" },
  { name:"Jalen Johnson",           team:"ATL", pos:"SF", height:203, jersey:1,  age:22, conf:"East", div:"Southeast", emoji:"🆕" },
  // Magic
  { name:"Paolo Banchero",          team:"ORL", pos:"PF", height:208, jersey:5,  age:22, conf:"East", div:"Southeast", emoji:"🪄" },
  { name:"Franz Wagner",            team:"ORL", pos:"SF", height:206, jersey:21, age:23, conf:"East", div:"Southeast", emoji:"🇩🇪" },
  { name:"Jalen Suggs",             team:"ORL", pos:"PG", height:193, jersey:4,  age:23, conf:"East", div:"Southeast", emoji:"🏈" },
  // Hornets
  { name:"LaMelo Ball",             team:"CHA", pos:"PG", height:201, jersey:1,  age:23, conf:"East", div:"Southeast", emoji:"🐝" },
  { name:"Miles Bridges",           team:"CHA", pos:"SF", height:198, jersey:0,  age:26, conf:"East", div:"Southeast", emoji:"🌁" },
  { name:"Brandon Miller",          team:"CHA", pos:"SF", height:203, jersey:24, age:21, conf:"East", div:"Southeast", emoji:"🆕" },
  // Pistons
  { name:"Cade Cunningham",         team:"DET", pos:"PG", height:201, jersey:2,  age:23, conf:"East", div:"Central",   emoji:"⚙️" },
  { name:"Jalen Duren",             team:"DET", pos:"C",  height:213, jersey:0,  age:20, conf:"East", div:"Central",   emoji:"🔧" },
  { name:"Ausar Thompson",          team:"DET", pos:"SF", height:198, jersey:5,  age:21, conf:"East", div:"Central",   emoji:"🆕" },
  // Pacers
  { name:"Tyrese Haliburton",       team:"IND", pos:"PG", height:196, jersey:0,  age:24, conf:"East", div:"Central",   emoji:"🏎️" },
  { name:"Pascal Siakam",           team:"IND", pos:"PF", height:206, jersey:43, age:30, conf:"East", div:"Central",   emoji:"🇨🇲" },
  { name:"Myles Turner",            team:"IND", pos:"C",  height:213, jersey:33, age:28, conf:"East", div:"Central",   emoji:"🛡️" },
  { name:"Andrew Nembhard",         team:"IND", pos:"PG", height:193, jersey:2,  age:24, conf:"East", div:"Central",   emoji:"🇨🇦" },
  // Wizards
  { name:"Jordan Poole",            team:"WAS", pos:"SG", height:193, jersey:13, age:25, conf:"East", div:"Southeast", emoji:"🐢" },
  { name:"Kyle Kuzma",              team:"WAS", pos:"PF", height:206, jersey:33, age:29, conf:"East", div:"Southeast", emoji:"🔴" },
  { name:"Alexandre Sarr",          team:"WAS", pos:"C",  height:216, jersey:20, age:19, conf:"East", div:"Southeast", emoji:"🆕" },
],

// ─────────────────────────────────────────────
// 2023-24  (2シーズン前)
// ─────────────────────────────────────────────
"2023-24": [
  // Lakers
  { name:"LeBron James",            team:"LAL", pos:"SF", height:206, jersey:23, age:39, conf:"West", div:"Pacific",   emoji:"👑" },
  { name:"Anthony Davis",           team:"LAL", pos:"C",  height:208, jersey:3,  age:30, conf:"West", div:"Pacific",   emoji:"🦁" },
  { name:"Austin Reaves",           team:"LAL", pos:"SG", height:196, jersey:15, age:25, conf:"West", div:"Pacific",   emoji:"🤠" },
  { name:"D'Angelo Russell",        team:"LAL", pos:"PG", height:193, jersey:1,  age:27, conf:"West", div:"Pacific",   emoji:"🏀" },
  { name:"Rui Hachimura",           team:"LAL", pos:"PF", height:203, jersey:28, age:25, conf:"West", div:"Pacific",   emoji:"🇯🇵" },
  // Warriors
  { name:"Stephen Curry",           team:"GSW", pos:"PG", height:188, jersey:30, age:35, conf:"West", div:"Pacific",   emoji:"🎯" },
  { name:"Draymond Green",          team:"GSW", pos:"PF", height:198, jersey:23, age:33, conf:"West", div:"Pacific",   emoji:"💪" },
  { name:"Klay Thompson",           team:"GSW", pos:"SG", height:198, jersey:11, age:33, conf:"West", div:"Pacific",   emoji:"🌊" },
  { name:"Andrew Wiggins",          team:"GSW", pos:"SF", height:201, jersey:22, age:28, conf:"West", div:"Pacific",   emoji:"🇨🇦" },
  { name:"Jonathan Kuminga",        team:"GSW", pos:"SF", height:198, jersey:0,  age:21, conf:"West", div:"Pacific",   emoji:"🇨🇩" },
  // Celtics — NBA王者！
  { name:"Jayson Tatum",            team:"BOS", pos:"SF", height:203, jersey:0,  age:25, conf:"East", div:"Atlantic",  emoji:"☘️" },
  { name:"Jaylen Brown",            team:"BOS", pos:"SG", height:198, jersey:7,  age:27, conf:"East", div:"Atlantic",  emoji:"🔒" },
  { name:"Jrue Holiday",            team:"BOS", pos:"PG", height:193, jersey:4,  age:33, conf:"East", div:"Atlantic",  emoji:"🛡️" },
  { name:"Kristaps Porzingis",      team:"BOS", pos:"C",  height:221, jersey:8,  age:28, conf:"East", div:"Atlantic",  emoji:"🇱🇻" },
  { name:"Al Horford",              team:"BOS", pos:"C",  height:206, jersey:42, age:37, conf:"East", div:"Atlantic",  emoji:"🌟" },
  { name:"Derrick White",           team:"BOS", pos:"SG", height:193, jersey:9,  age:29, conf:"East", div:"Atlantic",  emoji:"🤍" },
  { name:"Payton Pritchard",        team:"BOS", pos:"PG", height:185, jersey:11, age:25, conf:"East", div:"Atlantic",  emoji:"🎱" },
  // Nuggets — 連覇狙い
  { name:"Nikola Jokic",            team:"DEN", pos:"C",  height:211, jersey:15, age:28, conf:"West", div:"Northwest", emoji:"🐴" },
  { name:"Jamal Murray",            team:"DEN", pos:"PG", height:193, jersey:27, age:26, conf:"West", div:"Northwest", emoji:"🍁" },
  { name:"Michael Porter Jr.",      team:"DEN", pos:"SF", height:206, jersey:1,  age:25, conf:"West", div:"Northwest", emoji:"📈" },
  { name:"Aaron Gordon",            team:"DEN", pos:"PF", height:203, jersey:50, age:28, conf:"West", div:"Northwest", emoji:"🦁" },
  // Thunder
  { name:"Shai Gilgeous-Alexander", team:"OKC", pos:"PG", height:198, jersey:2,  age:25, conf:"West", div:"Northwest", emoji:"⚡" },
  { name:"Chet Holmgren",           team:"OKC", pos:"C",  height:213, jersey:7,  age:21, conf:"West", div:"Northwest", emoji:"🌩️" },
  { name:"Jalen Williams",          team:"OKC", pos:"SG", height:198, jersey:8,  age:22, conf:"West", div:"Northwest", emoji:"🎆" },
  { name:"Luguentz Dort",           team:"OKC", pos:"SG", height:185, jersey:5,  age:24, conf:"West", div:"Northwest", emoji:"🛡️" },
  { name:"Cason Wallace",           team:"OKC", pos:"SG", height:188, jersey:22, age:19, conf:"West", div:"Northwest", emoji:"🆕" },
  { name:"Isaiah Joe",              team:"OKC", pos:"SG", height:196, jersey:11, age:23, conf:"West", div:"Northwest", emoji:"🎯" },
  // Knicks
  { name:"Jalen Brunson",           team:"NYK", pos:"PG", height:185, jersey:11, age:27, conf:"East", div:"Atlantic",  emoji:"🗽" },
  { name:"OG Anunoby",              team:"NYK", pos:"SF", height:201, jersey:8,  age:26, conf:"East", div:"Atlantic",  emoji:"🇬🇧" },
  { name:"Josh Hart",               team:"NYK", pos:"SG", height:193, jersey:3,  age:28, conf:"East", div:"Atlantic",  emoji:"💼" },
  { name:"Julius Randle",           team:"NYK", pos:"PF", height:203, jersey:30, age:28, conf:"East", div:"Atlantic",  emoji:"🔨" },
  { name:"Isaiah Hartenstein",      team:"NYK", pos:"C",  height:213, jersey:55, age:25, conf:"East", div:"Atlantic",  emoji:"🇩🇪" },
  // Bucks
  { name:"Giannis Antetokounmpo",   team:"MIL", pos:"PF", height:211, jersey:34, age:29, conf:"East", div:"Central",   emoji:"🦌" },
  { name:"Damian Lillard",          team:"MIL", pos:"PG", height:188, jersey:0,  age:33, conf:"East", div:"Central",   emoji:"🌹" },
  { name:"Brook Lopez",             team:"MIL", pos:"C",  height:213, jersey:11, age:35, conf:"East", div:"Central",   emoji:"🛁" },
  { name:"Khris Middleton",         team:"MIL", pos:"SF", height:203, jersey:22, age:32, conf:"East", div:"Central",   emoji:"🎨" },
  // Heat
  { name:"Bam Adebayo",             team:"MIA", pos:"C",  height:206, jersey:13, age:26, conf:"East", div:"Southeast", emoji:"🔥" },
  { name:"Tyler Herro",             team:"MIA", pos:"SG", height:196, jersey:14, age:23, conf:"East", div:"Southeast", emoji:"🔫" },
  { name:"Jimmy Butler",            team:"MIA", pos:"SF", height:201, jersey:22, age:34, conf:"East", div:"Southeast", emoji:"😤" },
  { name:"Terry Rozier",            team:"MIA", pos:"PG", height:185, jersey:0,  age:29, conf:"East", div:"Southeast", emoji:"🐍" },
  // Clippers
  { name:"Kawhi Leonard",           team:"LAC", pos:"SF", height:201, jersey:2,  age:32, conf:"West", div:"Pacific",   emoji:"🦾" },
  { name:"James Harden",            team:"LAC", pos:"PG", height:196, jersey:1,  age:34, conf:"West", div:"Pacific",   emoji:"🧔" },
  { name:"Paul George",             team:"LAC", pos:"SF", height:203, jersey:13, age:33, conf:"West", div:"Pacific",   emoji:"🌙" },
  { name:"Ivica Zubac",             team:"LAC", pos:"C",  height:216, jersey:40, age:26, conf:"West", div:"Pacific",   emoji:"🇭🇷" },
  // 76ers
  { name:"Joel Embiid",             team:"PHI", pos:"C",  height:213, jersey:21, age:29, conf:"East", div:"Atlantic",  emoji:"🇨🇲" },
  { name:"Tyrese Maxey",            team:"PHI", pos:"PG", height:188, jersey:0,  age:22, conf:"East", div:"Atlantic",  emoji:"💨" },
  // Suns
  { name:"Kevin Durant",            team:"PHX", pos:"SF", height:208, jersey:35, age:35, conf:"West", div:"Pacific",   emoji:"🐍" },
  { name:"Devin Booker",            team:"PHX", pos:"SG", height:196, jersey:1,  age:27, conf:"West", div:"Pacific",   emoji:"📚" },
  { name:"Bradley Beal",            team:"PHX", pos:"SG", height:193, jersey:3,  age:30, conf:"West", div:"Pacific",   emoji:"🎴" },
  // Timberwolves
  { name:"Anthony Edwards",         team:"MIN", pos:"SG", height:193, jersey:5,  age:22, conf:"West", div:"Northwest", emoji:"🐺" },
  { name:"Karl-Anthony Towns",      team:"MIN", pos:"C",  height:213, jersey:32, age:28, conf:"West", div:"Northwest", emoji:"🐺" },
  { name:"Rudy Gobert",             team:"MIN", pos:"C",  height:216, jersey:27, age:31, conf:"West", div:"Northwest", emoji:"🗼" },
  { name:"Mike Conley",             team:"MIN", pos:"PG", height:183, jersey:10, age:36, conf:"West", div:"Northwest", emoji:"🎖️" },
  { name:"Naz Reid",                team:"MIN", pos:"PF", height:206, jersey:11, age:24, conf:"West", div:"Northwest", emoji:"🔥" },
  // Mavericks
  { name:"Luka Doncic",             team:"DAL", pos:"PG", height:201, jersey:77, age:24, conf:"West", div:"Southwest", emoji:"🇸🇮" },
  { name:"Kyrie Irving",            team:"DAL", pos:"PG", height:188, jersey:11, age:31, conf:"West", div:"Southwest", emoji:"🌀" },
  { name:"PJ Washington",           team:"DAL", pos:"PF", height:201, jersey:25, age:25, conf:"West", div:"Southwest", emoji:"🌟" },
  { name:"Maxi Kleber",             team:"DAL", pos:"PF", height:208, jersey:42, age:31, conf:"West", div:"Southwest", emoji:"🇩🇪" },
  // Grizzlies
  { name:"Ja Morant",               team:"MEM", pos:"PG", height:188, jersey:12, age:24, conf:"West", div:"Southwest", emoji:"🚀" },
  { name:"Jaren Jackson Jr.",       team:"MEM", pos:"C",  height:211, jersey:13, age:24, conf:"West", div:"Southwest", emoji:"🦁" },
  { name:"Desmond Bane",            team:"MEM", pos:"SG", height:196, jersey:22, age:25, conf:"West", div:"Southwest", emoji:"🎳" },
  { name:"Marcus Smart",            team:"MEM", pos:"PG", height:191, jersey:36, age:29, conf:"West", div:"Southwest", emoji:"🐻" },
  // Nets
  { name:"Cam Thomas",              team:"BKN", pos:"SG", height:193, jersey:24, age:22, conf:"East", div:"Atlantic",  emoji:"🗼" },
  { name:"Nic Claxton",             team:"BKN", pos:"C",  height:211, jersey:33, age:24, conf:"East", div:"Atlantic",  emoji:"🕸️" },
  // Bulls
  { name:"Zach LaVine",             team:"CHI", pos:"SG", height:196, jersey:8,  age:28, conf:"East", div:"Central",   emoji:"🐂" },
  { name:"Nikola Vucevic",          team:"CHI", pos:"C",  height:213, jersey:9,  age:33, conf:"East", div:"Central",   emoji:"🇲🇪" },
  { name:"Alex Caruso",             team:"CHI", pos:"SG", height:196, jersey:6,  age:29, conf:"East", div:"Central",   emoji:"🔬" },
  { name:"Coby White",              team:"CHI", pos:"PG", height:193, jersey:0,  age:23, conf:"East", div:"Central",   emoji:"❄️" },
  // Cavaliers
  { name:"Donovan Mitchell",        team:"CLE", pos:"SG", height:185, jersey:45, age:27, conf:"East", div:"Central",   emoji:"🦅" },
  { name:"Darius Garland",          team:"CLE", pos:"PG", height:185, jersey:10, age:23, conf:"East", div:"Central",   emoji:"🌀" },
  { name:"Evan Mobley",             team:"CLE", pos:"C",  height:213, jersey:4,  age:22, conf:"East", div:"Central",   emoji:"🛡️" },
  { name:"Jarrett Allen",           team:"CLE", pos:"C",  height:211, jersey:31, age:25, conf:"East", div:"Central",   emoji:"🦒" },
  // Raptors
  { name:"Scottie Barnes",          team:"TOR", pos:"PF", height:206, jersey:4,  age:22, conf:"East", div:"Atlantic",  emoji:"🍁" },
  { name:"Immanuel Quickley",       team:"TOR", pos:"PG", height:188, jersey:5,  age:23, conf:"East", div:"Atlantic",  emoji:"⚡" },
  { name:"RJ Barrett",              team:"TOR", pos:"SF", height:198, jersey:9,  age:23, conf:"East", div:"Atlantic",  emoji:"🇨🇦" },
  // Spurs — Wemby ルーキー！
  { name:"Victor Wembanyama",       team:"SAS", pos:"C",  height:224, jersey:1,  age:19, conf:"West", div:"Southwest", emoji:"👽" },
  { name:"Devin Vassell",           team:"SAS", pos:"SG", height:196, jersey:24, age:23, conf:"West", div:"Southwest", emoji:"🌵" },
  { name:"Keldon Johnson",          team:"SAS", pos:"SF", height:198, jersey:3,  age:24, conf:"West", div:"Southwest", emoji:"🤠" },
  // Rockets
  { name:"Alperen Sengun",          team:"HOU", pos:"C",  height:211, jersey:28, age:21, conf:"West", div:"Southwest", emoji:"🇹🇷" },
  { name:"Jalen Green",             team:"HOU", pos:"SG", height:193, jersey:4,  age:21, conf:"West", div:"Southwest", emoji:"💚" },
  { name:"Dillon Brooks",           team:"HOU", pos:"SF", height:198, jersey:9,  age:27, conf:"West", div:"Southwest", emoji:"🐶" },
  { name:"Fred VanVleet",           team:"HOU", pos:"PG", height:185, jersey:5,  age:29, conf:"West", div:"Southwest", emoji:"🇨🇦" },
  { name:"Amen Thompson",           team:"HOU", pos:"SF", height:198, jersey:1,  age:20, conf:"West", div:"Southwest", emoji:"⚡" },
  { name:"Jabari Smith Jr.",        team:"HOU", pos:"PF", height:208, jersey:10, age:21, conf:"West", div:"Southwest", emoji:"💎" },
  // Kings
  { name:"De'Aaron Fox",            team:"SAC", pos:"PG", height:193, jersey:5,  age:26, conf:"West", div:"Pacific",   emoji:"🦊" },
  { name:"Domantas Sabonis",        team:"SAC", pos:"C",  height:211, jersey:10, age:27, conf:"West", div:"Pacific",   emoji:"🇱🇹" },
  { name:"Keegan Murray",           team:"SAC", pos:"SF", height:203, jersey:13, age:22, conf:"West", div:"Pacific",   emoji:"🔴" },
  // Jazz
  { name:"Lauri Markkanen",         team:"UTA", pos:"PF", height:213, jersey:23, age:26, conf:"West", div:"Northwest", emoji:"🇫🇮" },
  { name:"Walker Kessler",          team:"UTA", pos:"C",  height:218, jersey:24, age:21, conf:"West", div:"Northwest", emoji:"🧱" },
  { name:"Jordan Clarkson",         team:"UTA", pos:"SG", height:193, jersey:00, age:31, conf:"West", div:"Northwest", emoji:"🎸" },
  { name:"Keyonte George",          team:"UTA", pos:"PG", height:193, jersey:3,  age:20, conf:"West", div:"Northwest", emoji:"🆕" },
  // Blazers
  { name:"Scoot Henderson",         team:"POR", pos:"PG", height:188, jersey:0,  age:19, conf:"West", div:"Northwest", emoji:"🌹" },
  { name:"Anfernee Simons",         team:"POR", pos:"SG", height:188, jersey:1,  age:24, conf:"West", div:"Northwest", emoji:"🌹" },
  { name:"Deandre Ayton",           team:"POR", pos:"C",  height:213, jersey:2,  age:25, conf:"West", div:"Northwest", emoji:"🏔️" },
  { name:"Deni Avdija",             team:"WAS", pos:"SF", height:203, jersey:9,  age:22, conf:"East", div:"Southeast", emoji:"🇮🇱" },
  // Hawks
  { name:"Trae Young",              team:"ATL", pos:"PG", height:185, jersey:11, age:25, conf:"East", div:"Southeast", emoji:"🦅" },
  { name:"Dejounte Murray",         team:"ATL", pos:"SG", height:193, jersey:5,  age:27, conf:"East", div:"Southeast", emoji:"🦅" },
  { name:"Jalen Johnson",           team:"ATL", pos:"SF", height:203, jersey:1,  age:22, conf:"East", div:"Southeast", emoji:"🆕" },
  // Magic
  { name:"Paolo Banchero",          team:"ORL", pos:"PF", height:208, jersey:5,  age:21, conf:"East", div:"Southeast", emoji:"🪄" },
  { name:"Franz Wagner",            team:"ORL", pos:"SF", height:206, jersey:21, age:22, conf:"East", div:"Southeast", emoji:"🇩🇪" },
  { name:"Jalen Suggs",             team:"ORL", pos:"PG", height:193, jersey:4,  age:22, conf:"East", div:"Southeast", emoji:"🏈" },
  // Hornets
  { name:"LaMelo Ball",             team:"CHA", pos:"PG", height:201, jersey:1,  age:22, conf:"East", div:"Southeast", emoji:"🐝" },
  { name:"Miles Bridges",           team:"CHA", pos:"SF", height:198, jersey:0,  age:25, conf:"East", div:"Southeast", emoji:"🌁" },
  { name:"Brandon Miller",          team:"CHA", pos:"SF", height:203, jersey:24, age:20, conf:"East", div:"Southeast", emoji:"🆕" },
  // Pistons
  { name:"Cade Cunningham",         team:"DET", pos:"PG", height:201, jersey:2,  age:22, conf:"East", div:"Central",   emoji:"⚙️" },
  { name:"Jalen Duren",             team:"DET", pos:"C",  height:213, jersey:0,  age:19, conf:"East", div:"Central",   emoji:"🔧" },
  { name:"Ausar Thompson",          team:"DET", pos:"SF", height:198, jersey:5,  age:20, conf:"East", div:"Central",   emoji:"🆕" },
  // Pacers
  { name:"Tyrese Haliburton",       team:"IND", pos:"PG", height:196, jersey:0,  age:23, conf:"East", div:"Central",   emoji:"🏎️" },
  { name:"Pascal Siakam",           team:"IND", pos:"PF", height:206, jersey:43, age:29, conf:"East", div:"Central",   emoji:"🇨🇲" },
  { name:"Myles Turner",            team:"IND", pos:"C",  height:213, jersey:33, age:27, conf:"East", div:"Central",   emoji:"🛡️" },
  { name:"Andrew Nembhard",         team:"IND", pos:"PG", height:193, jersey:2,  age:23, conf:"East", div:"Central",   emoji:"🇨🇦" },
  // Wizards
  { name:"Jordan Poole",            team:"WAS", pos:"SG", height:193, jersey:13, age:24, conf:"East", div:"Southeast", emoji:"🐢" },
  { name:"Kyle Kuzma",              team:"WAS", pos:"PF", height:206, jersey:33, age:28, conf:"East", div:"Southeast", emoji:"🔴" },
],

}; // END NBA_PLAYERS_BY_SEASON
