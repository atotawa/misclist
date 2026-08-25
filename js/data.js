// misclist data
// -----------------------------------------------------------------------
// Add/edit entries here. Order in this array = rank (top of array = #1).
//
// Fields:
//   name        - achievement name
//   game        - the game (or "IRL" for real-life feats)
//   points      - leave as null until you've worked out your formula,
//                 or fill in a number and it'll show automatically
//   img         - path to a thumbnail image, e.g. "images/celestial-floor.jpg"
//                 (drop the file in the images/ folder — if it's missing
//                 or the path is wrong, a placeholder tile is shown instead
//                 so the site never breaks)
//   desc        - longer description shown in the popup when a row is
//                 clicked. Leave as "" if you haven't written one yet.
// -----------------------------------------------------------------------

const MISCLIST = [
  { name: "gamma dan",                                         game: "osu!mania",  points: null,                img: "images/gammadan.png",                   youtube: "BF30yFEwk90",   desc: "" },
  { name: "Snowy Stronghold [Solo] [With Escapee] [Old Ver.]", game: "Flood Escape 2",      points: null,       img: "images/fe2snowythumbnail.png",          youtube: "r7Z3dwA2GBg",  desc: "" },
  { name: "Celestial Floor",                                   game: "Guilty Gear Strive",      points: null,   img: "images/celestial.png",   desc: "" },
  { name: "Poisonous Chasm",                                   game: "Flood Escape 2",      points: null,       img: "images/poisonouschasm.png",             youtube: "",         desc: "" },
  { name: "Blue Moon 2019",                                    game: "Flood Escape 2",       points: null,      img: "images/bluemoon.png",                   youtube: "",       desc: "" },
  { name: "3:22",                                              game: "Getting Over it",           points: null, img: "images/322.png",                        youtube: "",     desc: "" },
  { name: "Poltergeist",                                       game: "Geometry Dash",       points: null,       img: "images/poltergeist.png",                youtube: "LcGG14C_WIQ",      desc: "" },
  { name: "Pantheon 5",                                        game: "Hollow Knight",       points: null,       img: "images/pantheon5.png",                  youtube: "",       desc: "" },
  { name: "no hit Roaring Knight",                             game: "DELTARUNE",         points: null, img: "",       desc: "" },
  { name: "P Rank P-2",                                        game: "Ultrakill",           points: null,       img: "images/p-2.png",                        youtube: "",        desc: "" },
  { name: "Masters",                                           game: "Overwatch",           points: null,       img: "images/masters.png",                    youtube: "",    desc: "" },
  { name: "jawbreaker/doubledash",                             game: "Geometry Dash",            points: null,  img: "images/jawbreakerxdoubledash.png",      youtube: "",  desc: "" },
  { name: "Spelunky Hell Run",                                 game: "Spelunky 2",         points: null,        img: "",       desc: "" },
  { name: "flower bankai",                                     game: "Type Soul", points: null,                 img: "images/flowerbankai.png",               youtube: "",          desc: "" }, 
  { name: "roaring knight (pre patch) (no mantle)",            game: "DELTARUNE",              points: null,    img: "images/prepatchroaringknightnomantle.png", youtube: "",    desc: "" },
  { name: "iloveacecolonthree",                                game: "Geometry Dash",     points: null,         img: "images/iloveacecolonthree.png",         youtube: "GyXSECmgJIk",             desc: "" },
  { name: "four man kingsfall",                                game: "Destiny 2",           points: null,       img: "images/4mankingsfall.png",              youtube: "",   desc: "" },
  { name: "sans",                                              game: "UNDERTALE",         points: null, img: "",       desc: "" },
  { name: "daytime empress",                                   game: "Terraria",           points: null,        img: "images/daytimeempress.png",             youtube: "",        desc: "" },
  { name: "45/20",                                             game: "Ultimate Custom Night",     points: null, img: "images/4520.png",                       youtube: "",         desc: "" },
  { name: "Gauntlet of Strength: Shura",                       game: "Sekiro",      points: null,               img: "images/gauntletofstrength.png",         youtube: "", desc: "" },
  { name: "pacifist",                                          game: "Mirrors Edge",            points: null,   img: "",  youtube: "",      desc: "" },
  { name: "refraction railway 5",                              game: "Limbus Company",          points: null,   img: "",  youtube: "",         desc: "" },
  { name: "curse ending",                                      game: "Silksong",         points: null,          img: "", youtube: "",      desc: "" },
  { name: "malenia",                                           game: "Elden Ring",         points: null,        img: "", youtube: "",      desc: "" },
  { name: "solo prison",                                       game: "Dying Light",         points: null,       img: "", youtube: "",      desc: "" },
  { name: "roaring knight (hacked kris)",                      game: "DELTARUNE",         points: null,         img: "images/hackedknight.png",  youtube: "",     desc: "" },
];