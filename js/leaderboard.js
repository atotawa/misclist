// misclist leaderboard
// -----------------------------------------------------------------------
// How scoring works (tune the constants below to taste):
//
// 1. Each achievement's `points` value (set in js/data.js) is the raw
//    value of clearing it.
// 2. The verifier (first clear) earns that value at VERIFIER_MULTIPLIER.
//    Every victor (everyone after) earns it at VICTOR_MULTIPLIER — set
//    lower by default since verifying blind is harder than following a
//    known-possible route.
// 3. A player's total is NOT a flat sum of every clear. Like osu!'s pp
//    system, clears are sorted by value (highest first) and each one
//    counts for less than the last: 100%, 95%, 90%, 81%, ...
//    (value * DECAY^index). This means a handful of very hard clears
//    matters far more than a big pile of easy ones, and grinding low-value
//    achievements barely moves your total once you have a few good ones.
//
// Achievements with points still set to null are ignored by the
// leaderboard entirely until you fill in a value.
// -----------------------------------------------------------------------

const VERIFIER_MULTIPLIER = 1.0;
const VICTOR_MULTIPLIER = 0.9;
const DECAY = 0.90;

function heatColor(index, total) {
  const t = total <= 1 ? 0 : index / (total - 1);
  const hueStart = 14;
  const hueEnd = 255;
  const hue = hueStart + (hueEnd - hueStart) * t;
  const sat = 85 - t * 15;
  const light = 58 - t * 8;
  return `hsl(${hue.toFixed(0)}, ${sat.toFixed(0)}%, ${light.toFixed(0)}%)`;
}

function initials(str) {
  return str
    .replace(/[\[\]().,/]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join("");
}

function addClear(players, name, value, achName, rank, role) {
  if (!players[name]) players[name] = [];
  players[name].push({ value, achName, rank, role });
}

function buildPlayerClears() {
  const players = {};
  MISCLIST.forEach((item, i) => {
    const rank = i + 1;
    const pts = effectivePoints(item, rank);
    if (item.verifier && item.verifier.trim()) {
      addClear(players, item.verifier.trim(), pts * VERIFIER_MULTIPLIER, item.name, rank, "verifier");
    }
    (item.victors || []).forEach(v => {
      if (v && v.trim()) {
        addClear(players, v.trim(), pts * VICTOR_MULTIPLIER, item.name, rank, "victor");
      }
    });
  });
  return players;
}

function computeTotal(clears) {
  const sorted = [...clears].sort((a, b) => b.value - a.value);
  let total = 0;
  sorted.forEach((c, i) => { total += c.value * Math.pow(DECAY, i); });
  return { total, sorted };
}

function buildStandings() {
  const players = buildPlayerClears();
  const standings = Object.entries(players).map(([name, clears]) => {
    const { total, sorted } = computeTotal(clears);
    return { name, total, clears: sorted };
  });
  standings.sort((a, b) => b.total - a.total);
  return standings;
}

function buildRow(entry, index, total, color) {
  const rank = index + 1;

  const row = document.createElement("div");
  row.className = "row";
  row.style.setProperty("--heat", color);
  row.tabIndex = 0;
  row.setAttribute("role", "button");
  row.setAttribute("aria-label", `${entry.name}, rank ${rank}, ${Math.round(entry.total)} points`);

  const rankEl = document.createElement("div");
  rankEl.className = "row-rank";
  rankEl.textContent = "#" + rank;

  const thumbWrap = document.createElement("div");
  thumbWrap.className = "row-thumb";
  const placeholder = document.createElement("div");
  placeholder.className = "row-thumb-placeholder";
  placeholder.textContent = initials(entry.name);
  thumbWrap.appendChild(placeholder);

  const avatarSrc = typeof PLAYER_AVATARS !== "undefined" ? PLAYER_AVATARS[entry.name] : null;
  if (avatarSrc) {
    const im = document.createElement("img");
    im.loading = "lazy";
    im.alt = "";
    im.src = avatarSrc;
    im.onerror = () => { im.remove(); };
    im.onload = () => { placeholder.style.display = "none"; };
    thumbWrap.appendChild(im);
  }

  const textEl = document.createElement("div");
  textEl.className = "row-text";
  const nameEl = document.createElement("div");
  nameEl.className = "row-name";
  nameEl.textContent = entry.name;
  const gameEl = document.createElement("div");
  gameEl.className = "row-game";
  gameEl.textContent = `${entry.clears.length} clear${entry.clears.length === 1 ? "" : "s"}`;
  textEl.appendChild(nameEl);
  textEl.appendChild(gameEl);

  const ptsEl = document.createElement("div");
  ptsEl.className = "row-points";
  ptsEl.textContent = Math.round(entry.total);

  row.appendChild(rankEl);
  row.appendChild(thumbWrap);
  row.appendChild(textEl);
  row.appendChild(ptsEl);

  const open = () => openBreakdown(entry, rank, color);
  row.addEventListener("click", open);
  row.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
  });

  return row;
}

function renderLeaderboard() {
  const main = document.getElementById("main-div");
  main.innerHTML = "";
  const standings = buildStandings();

  if (standings.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No clears recorded yet — fill in a verifier and/or victors for at least one achievement in js/data.js to populate the leaderboard.";
    main.appendChild(empty);
    return;
  }

  standings.forEach((entry, i) => {
    const color = heatColor(i, standings.length);
    main.appendChild(buildRow(entry, i, standings.length, color));
  });
}

let overlayEls = null;

function buildOverlay() {
  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.className = "modal";

  const content = document.createElement("div");
  content.id = "overlay-content";

  const close = document.createElement("span");
  close.className = "close";
  close.innerHTML = "&times;";

  const pName = document.createElement("div");
  pName.id = "pName";
  pName.className = "content-text";

  const pPrice = document.createElement("div");
  pPrice.id = "pPrice";
  pPrice.className = "content-text";

  const list = document.createElement("div");
  list.className = "breakdown-list";

  content.append(close, pName, pPrice, list);
  overlay.appendChild(content);
  document.body.appendChild(overlay);

  close.addEventListener("click", closeOverlay);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeOverlay();
  });

  overlayEls = { overlay, pName, pPrice, list };
}

function openBreakdown(entry, rank, color) {
  if (!overlayEls) buildOverlay();
  const { overlay, pName, pPrice, list } = overlayEls;

  overlay.style.setProperty("--heat", color);
  pName.textContent = `#${rank} — ${entry.name}`;
  pPrice.textContent = `${Math.round(entry.total)} pts  ·  ${entry.clears.length} clear${entry.clears.length === 1 ? "" : "s"}`;

  list.innerHTML = "";
  entry.clears.forEach((c, i) => {
    const weight = Math.pow(DECAY, i);
    const weighted = c.value * weight;
    const line = document.createElement("div");
    line.className = "breakdown-item";

    const left = document.createElement("span");
    left.className = "breakdown-name";
    left.textContent = `#${c.rank} ${c.achName}`;
    if (c.role === "verifier") {
      const tag = document.createElement("span");
      tag.className = "breakdown-tag";
      tag.textContent = "verifier";
      left.appendChild(tag);
    }

    const right = document.createElement("span");
    right.className = "breakdown-value";
    right.textContent = `${weighted.toFixed(1)} pts (${Math.round(weight * 100)}%)`;

    line.append(left, right);
    list.appendChild(line);
  });

  overlay.classList.add("open");
  document.body.classList.add("no-scroll");
}

function closeOverlay() {
  if (!overlayEls) return;
  overlayEls.overlay.classList.remove("open");
  document.body.classList.remove("no-scroll");
}

document.addEventListener("DOMContentLoaded", () => {
  renderLeaderboard();
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeOverlay();
  });
});