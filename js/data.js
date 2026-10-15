// misclist data
// -----------------------------------------------------------------------
// Add/edit entries here. Order in this array = rank (top of array = #1).
//
// Fields:
//   name        - achievement name
//   game        - the game (or "IRL" for real-life feats)
//   points      - leave as null and a value is auto-generated from this
//                 achievement's position in the list (see js/points.js
//                 for how, and to tune the curve). Set an explicit number
//                 here only to override the curve for this one entry.
//   img         - path to a thumbnail image, e.g. "images/celestial-floor.jpg"
//                 (drop the file in the images/ folder — if it's missing
//                 or the path is wrong, a placeholder tile is shown instead
//                 so the site never breaks)
//   desc        - longer description shown in the popup when a row is
//                 clicked. Leave as "" if you haven't written one yet.
//   verifier    - name of the person who first cleared this (string).
//                 Leave as "" until known. Gets full points on the leaderboard.
//   victors     - array of names of everyone else who's cleared it after
//                 the verifier, e.g. ["Player2", "Player3"]. Order doesn't
//                 matter. Each victor gets a slightly reduced point value
//                 vs the verifier (see js/leaderboard.js to tune that).
// -----------------------------------------------------------------------

const MISCLIST = [
  { name: "gamma dan",                                         game: "osu!mania",  points: null,                              img: "images/gammadan.png",                      youtube: "BF30yFEwk90",   desc: " ", verifier: "Cr2zy", victors: [] },
  { name: "Snowy Stronghold [Solo] [With Escapee] [Old Ver.]", game: "Flood Escape 2",      points: null,                     img: "images/fe2snowythumbnail.png",             youtube: "r7Z3dwA2GBg",  desc: " ", verifier: "atotawa", victors: [] },
  { name: "Celestial Floor",                                   game: "Guilty Gear Strive",      points: null,                 img: "images/celestial.png",                     youtube: "",  desc: " ", verifier: "demutrudu", victors: [] },
  { name: "3:22",                                              game: "Getting Over it",           points: null,               img: "images/322.png",                           youtube: "",     desc: " ", verifier: "demutrudu", victors: [] },
  { name: "Dishonored Clean Hands/Ghost (very hard)",          game: "Dishonored",       points: null,                        img: "images/dishonoredghost.png",               youtube: "",      desc: " ", verifier: "demutrudu", victors: [] },
  { name: "Pantheon 5",                                        game: "Hollow Knight",       points: null,                     img: "images/pantheon5.png",                     youtube: "",       desc: " ", verifier: "CoolChip", victors: ["demutrudu"] },
  { name: "P Rank P-2",                                        game: "Ultrakill",           points: null,                     img: "images/p-2.png",                           youtube: "",        desc: " ", verifier: "Onateri", victors: [] },
  { name: "Spelunky Hell Run",                                 game: "Spelunky 2",         points: null,                      img: "images/spelunkyhell.png",                  youtube: "", desc: "",    verifier: "demutrudu", victors: [] },
  { name: "calamity infernum (true melee)",                    game: "Terraria",         points: null,                        img: "images/infernumtruemelee.png",             youtube: "",     desc: " ", verifier: "Cr2zy", victors: [] },
  { name: "Luminescence",                                      game: "Geometry Dash",       points: null,                     img: "images/luminescence.png",                  youtube: "8LGRcko_cmc",      desc: " ", verifier: "atotawa", victors: [] },
  { name: "devourer of gods no hit",                           game: "Terraria",           points: null,                      img: "images/nohitdog.png",                      youtube: "",     desc: " ", verifier: "Cr2zy", victors: [] },
  { name: "Zipbomb",                                           game: "Geometry Dash",       points: null,                     img: "images/zipbomb.png",                       youtube: "KuCPCayqIR8",      desc: " ", verifier: "Cr2zy", victors: [] },
  { name: "Poltergeist",                                       game: "Geometry Dash",       points: null,                     img: "images/poltergeist.png",                   youtube: "LcGG14C_WIQ",      desc: " ", verifier: "Onateri", victors: [] },
  { name: "Masters",                                           game: "Overwatch",           points: null,                     img: "images/masters.png",                       youtube: "",    desc: " ", verifier: "sojheart", victors: [] },
  { name: "jawbreaker/doubledash",                             game: "Geometry Dash",            points: null,                img: "images/jawbreakerxdoubledash.png",         youtube: "",  desc: " ", verifier: "atotawa", victors: ["Onateri", "Cr2zy"] },
  { name: "KWaS true max mode",                                game: "Knuckles Week at Sonics",      points: null,            img: "",                                         youtube: "aKJrTKCo7oc",         desc: " ", verifier: "CoolChip", victors: [] },
  { name: "Blue Moon 2019",                                    game: "Flood Escape 2",       points: null,                    img: "images/bluemoon.png",                      youtube: "",       desc: " ", verifier: "atotawa", victors: [] },
  { name: "Blue Moon new",                                     game: "Flood Escape 2",       points: null,                    img: "images/bluemoonnew.png",                   youtube: "gPJ-PkTC48A",       desc: " ", verifier: "atotawa", victors: [] },
  { name: "Abyssal Remnants",                                  game: "Flood Escape 2",      points: null,                     img: "images/abyssalremnants.png",               youtube: "-02ziXGpaa0",         desc: " ", verifier: "atotawa", victors: [] },
  { name: "Poisonous Chasm",                                   game: "Flood Escape 2",      points: null,                     img: "images/poisonouschasm.png",                youtube: "",         desc: " ", verifier: "atotawa", victors: ["Cr2zy"] },
  { name: "top 1600 team",                                     game: "osu!",      points: null,                               img: "images/ad.png",                            youtube: "",         desc: " ", verifier: "atotawa", victors: ["Onateri", "sphyss", "Cr2zy"] },
  { name: "Dread Hardmode (4 Hours)",                          game: "Metroid Dread",           points: null,                 img: "images/",                                  youtube: "",    desc: " ", verifier: "Onateri", victors: [] },
  { name: "Kaizo Knight /w Noelle and Mantle",                 game: "DELTARUNE",         points: null,                       img: "images/kaizoknight.png",                   youtube: "DRl-72BiLNQ",       desc: " ", verifier: "CoolChip", victors: [] },
  { name: "45/20",                                             game: "Ultimate Custom Night",     points: null,               img: "images/4520.png",                          youtube: "",         desc: " ", verifier: "Onateri", victors: [] },
  { name: "beat Darkest Dungeon",                              game: "Darkest Dungeon",     points: null,                     img: "images/",                          youtube: "",         desc: " ", verifier: "demutrudu", victors: [] },
  { name: "no hit Roaring Knight",                             game: "DELTARUNE",         points: null,                       img: "images/nohitknight.png",                   youtube: "YWbyjAdY4hw",       desc: " ", verifier: "CoolChip", victors: [] },
  { name: "flower bankai",                                     game: "Type Soul", points: null,                               img: "images/flowerbankai.png",                  youtube: "",          desc: " ", verifier: "sphyss", victors: [] }, 
  { name: "snow bankai",                                       game: "Type Soul", points: null,                               img: "images/",                                  youtube: "",          desc: " ", verifier: "atotawa", victors: [] }, 
  { name: "roaring knight (pre patch) (no mantle)",            game: "DELTARUNE",              points: null,                  img: "images/prepatchroaringknightnomantle.png", youtube: "",    desc:  "", verifier: "CoolChip", victors: [] },
  { name: "iloveacecolonthree",                                game: "Geometry Dash",     points: null,                       img: "images/iloveacecolonthree.png",            youtube: "GyXSECmgJIk",             desc: " ", verifier: "Onateri", victors: [] },
  { name: "four man kingsfall",                                game: "Destiny 2",           points: null,                     img: "images/4mankingsfall.png",                 youtube: "",   desc: " ", verifier: "Onateri", victors: [] },
  { name: "voidbound fox",                                     game: "Nullscape",         points: null,                       img: "images/voidboundfox.png",                  youtube: "",      desc: " ", verifier: "Cr2zy", victors: [] },
  { name: "beat persona 5",                                    game: "Persona 5 Royal",           points: null,               img: "images/persona5.png",                      youtube: "",        desc: " ", verifier: "atotawa", victors: ["Onateri", "sphyss"] },
  { name: "daytime empress",                                   game: "Terraria",           points: null,                      img: "images/daytimeempress.png",                youtube: "",        desc: " ", verifier: "Cr2zy", victors: ["atotawa", "sphyss"] },
  { name: "Gauntlet of Strength: Shura",                       game: "Sekiro",      points: null,                             img: "images/gauntletofstrength.png",            youtube: "", desc: " ", verifier: "Onateri", victors: [] },
  { name: "SUPERHOT impossible",                               game: "SUPERHOT",         points: null,                        img: "images/",                                  youtube: "",      desc: " ", verifier: "Onateri", victors: [] },
  { name: "Nightmare King Grimm",                              game: "Hollow Knight",     points: null,                       img: "images/nkg.png",                           youtube: "",         desc: " ", verifier: "CoolChip", victors: ["Onateri", "atotawa"] },
  { name: "Marvel's Spider-Man 100%",                          game: "Marvel's Spider-Man",                   points: null,   img: "images/spiderman100.png",                  youtube: "",      desc: " ", verifier: "Onateri", victors: [] },
  { name: "Marvel's Spider-Man Miles Morales 100%",            game: "Marvel's Spider-Man: Miles Morales",    points: null,   img: "images/miles100.png",                      youtube: "",      desc: " ", verifier: "Onateri", victors: ["atotawa"] },
  { name: "true pacifist",                                     game: "Mirrors Edge",            points: null,                 img: "images/mirrorsedgetruepac.png",            youtube: "9GsnTyE9TAU",      desc: " ", verifier: "Onateri", victors: [] },
  { name: "pacifist",                                          game: "Mirrors Edge",            points: null,                 img: "images/mirrorsedgepac.png",                youtube: "",      desc: " ", verifier: "CoolChip", victors: [] },
  { name: "necroa virus no zombies (normal mode)",             game: "Plague Inc.",      points: null,                        img: "images/necroanozombies.png",               youtube: "",         desc: "Thou seekest not to slay all mankind by thy pestilence alone—nay, thou must bamboozle the world into believing thy plague is but the common rabies, that they may cease their learned pursuit of a remedy.", verifier: "demutrudu", victors: [] },
  { name: "beat celeste",                                      game: "Celeste",            points: null,                      img: "images/",                                  youtube: "",      desc: " ", verifier: "Onateri", victors: ["atotawa"] },
  { name: "TDS: Solar Eclipse Night 4",                        game: "Tower Defense Simulator",            points: null,      img: "images/tdsnight4.png",                     youtube: "",      desc: "whole ass strat sheet btw", verifier: "atotawa", victors: [] },
  { name: "refraction railway 5",                              game: "Limbus Company",          points: null,                 img: "images/rr5.png",                           youtube: "",         desc: " ", verifier: "Onateri", victors: [] },
  { name: "40/20",                                             game: "Ultimate Custom Night",     points: null,               img: "images/4020.png",                          youtube: "",         desc: " ", verifier: "Onateri", victors: ["CoolChip", "atotawa"] },
  { name: "curse ending",                                      game: "Silksong",         points: null,                        img: "images/cursed.png",                        youtube: "",      desc: " ", verifier: "atotawa", victors: ["Onateri"] },
  { name: "Splatoon 1 Campaign",                               game: "Splatoon",         points: null,                        img: "images/splatoon.png",                      youtube: "",      desc: " ", verifier: "atotawa", victors: ["Onateri"] },
  { name: "malenia",                                           game: "Elden Ring",         points: null,                      img: "images/malenia.png",                       youtube: "",      desc: " ", verifier: "Onateri", victors: ["sphyss", "atotawa"] },
  { name: "solo prison",                                       game: "Dying Light",         points: null,                     img: "images/soloprison.png",                    youtube: "",      desc: " ", verifier: "Onateri", victors: [] },
  { name: "sotm speedrun",                                     game: "Secret of the Mimic",         points: null,             img: "images/sotmspeed.png",                     youtube: "mnqim13n_OE",      desc: " ", verifier: "atotawa", victors: [] },
  { name: "Search For The Needle (6:36)",                      game: "ROBLOX",         points: null,                          img: "images/searchfortheneedle.png",            youtube: "",       desc: "", verifier: "atotawa", victors: ["CoolChip", "Onateri"] },
  { name: "sans",                                              game: "UNDERTALE",         points: null,                       img: "images/sans.jpg",                          youtube: "",       desc: "", verifier: "atotawa", victors: ["CoolChip", "Cr2zy", "sphyss", "demutrudu", "tes"] },
  { name: "roaring knight (hacked kris)",                      game: "DELTARUNE",         points: null,                       img: "images/hackedknight.png",                  youtube: "",     desc: " ", verifier: "sphyss", victors: [] },
];