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
  { name: "gamma dan",                                         game: "osu!mania",  points: null,                img: "images/gammadan.png",                      youtube: "BF30yFEwk90",   desc: " ", verifier: "Cr2zy", victors: [] },
  { name: "Snowy Stronghold [Solo] [With Escapee] [Old Ver.]", game: "Flood Escape 2",      points: null,       img: "images/fe2snowythumbnail.png",             youtube: "r7Z3dwA2GBg",  desc: " ", verifier: "atotawa", victors: [] },
  { name: "Celestial Floor",                                   game: "Guilty Gear Strive",      points: null,   img: "images/celestial.png",                     youtube: "",  desc: " ", verifier: "demutrudu", victors: [] },
  { name: "Poisonous Chasm",                                   game: "Flood Escape 2",      points: null,       img: "images/poisonouschasm.png",                youtube: "",         desc: " ", verifier: "atotawa", victors: [] },
  { name: "Blue Moon 2019",                                    game: "Flood Escape 2",       points: null,      img: "images/bluemoon.png",                      youtube: "",       desc: " ", verifier: "atotawa", victors: [] },
  { name: "3:22",                                              game: "Getting Over it",           points: null, img: "images/322.png",                           youtube: "",     desc: " ", verifier: "demutrudu", victors: [] },
  { name: "Poltergeist",                                       game: "Geometry Dash",       points: null,       img: "images/poltergeist.png",                   youtube: "LcGG14C_WIQ",      desc: " ", verifier: "Onateri", victors: [] },
  { name: "Pantheon 5",                                        game: "Hollow Knight",       points: null,       img: "images/pantheon5.png",                     youtube: "",       desc: " ", verifier: "CoolChip", victors: [] },
  { name: "no hit Roaring Knight",                             game: "DELTARUNE",         points: null,         img: "images/nohitknight.png",                   youtube: "YWbyjAdY4hw",       desc: " ", verifier: "CoolChip", victors: [] },
  { name: "P Rank P-2",                                        game: "Ultrakill",           points: null,       img: "images/p-2.png",                           youtube: "",        desc: " ", verifier: "Onateri", victors: [] },
  { name: "Kaizo Knight /w Noelle and Mantle",                 game: "DELTARUNE",         points: null,         img: "",                                         youtube: "DRl-72BiLNQ",       desc: " ", verifier: "CoolChip", victors: [] },
  { name: "Masters",                                           game: "Overwatch",           points: null,       img: "images/masters.png",                       youtube: "",    desc: " ", verifier: "sojheart", victors: [] },
  { name: "jawbreaker/doubledash",                             game: "Geometry Dash",            points: null,  img: "images/jawbreakerxdoubledash.png",         youtube: "",  desc: " ", verifier: "atotawa", victors: ["Onateri"] },
  { name: "Spelunky Hell Run",                                 game: "Spelunky 2",         points: null,        img: "images/spelunkyhell.png",                  youtube: "", desc: "",                                            verifier: "demutrudu", victors: [] },
  { name: "flower bankai",                                     game: "Type Soul", points: null,                 img: "images/flowerbankai.png",                  youtube: "",          desc: " ", verifier: "sphyss", victors: [] }, 
  { name: "roaring knight (pre patch) (no mantle)",            game: "DELTARUNE",              points: null,    img: "images/prepatchroaringknightnomantle.png", youtube: "",    desc:  "", verifier: "CoolChip", victors: [] },
  { name: "iloveacecolonthree",                                game: "Geometry Dash",     points: null,         img: "images/iloveacecolonthree.png",            youtube: "GyXSECmgJIk",             desc: " ", verifier: "Onateri", victors: [] },
  { name: "four man kingsfall",                                game: "Destiny 2",           points: null,       img: "images/4mankingsfall.png",                 youtube: "",   desc: " ", verifier: "Onateri", victors: [] },
  { name: "sans",                                              game: "UNDERTALE",         points: null,         img: "images/sans.jpg",                          youtube: "",       desc: "", verifier: "atotawa", victors: ["CoolChip", "Cr2zy", "sphyss", "demutrudu", "tes"] },
  { name: "daytime empress",                                   game: "Terraria",           points: null,        img: "images/daytimeempress.png",                youtube: "",        desc: " ", verifier: "Cr2zy", victors: [] },
  { name: "45/20",                                             game: "Ultimate Custom Night",     points: null, img: "images/4520.png",                          youtube: "",         desc: " ", verifier: "Onateri", victors: [] },
  { name: "Gauntlet of Strength: Shura",                       game: "Sekiro",      points: null,               img: "images/gauntletofstrength.png",            youtube: "", desc: " ", verifier: "Onateri", victors: [] },
  // { name: "pacifist",                                          game: "Mirrors Edge",            points: null,   img: "images/mirrorsedgetruepac.png",                youtube: "",      desc: " ", verifier: "Onateri", victors: [] },
  { name: "pacifist",                                          game: "Mirrors Edge",            points: null,   img: "images/mirrorsedgepac.png",                youtube: "",      desc: " ", verifier: "CoolChip", victors: [] },
  { name: "refraction railway 5",                              game: "Limbus Company",          points: null,   img: "images/rr5.png",                           youtube: "",         desc: " ", verifier: "Onateri", victors: [] },
  { name: "curse ending",                                      game: "Silksong",         points: null,          img: "",                                         youtube: "",      desc: " ", verifier: "atotawa", victors: ["Onateri", "demutrudu"] },
  { name: "malenia",                                           game: "Elden Ring",         points: null,        img: "",                                         youtube: "",      desc: " ", verifier: "Onateri", victors: ["sphyss", "atotawa"] },
  { name: "solo prison",                                       game: "Dying Light",         points: null,       img: "",                                         youtube: "",      desc: " ", verifier: "Onateri", victors: [] },
  { name: "roaring knight (hacked kris)",                      game: "DELTARUNE",         points: null,         img: "images/hackedknight.png",                  youtube: "",     desc: " ", verifier: "sphyss", victors: [] },
];