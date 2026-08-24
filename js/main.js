// misclist rendering + modal logic

// Heat-map: rank 1 = hot ember, last rank = cool violet-blue.
// This is the single visual "difficulty" signal used across the page.
function heatColor(index, total) {
  const t = total <= 1 ? 0 : index / (total - 1); // 0 at top, 1 at bottom
  const hueStart = 14;   // ember/red-orange
  const hueEnd = 255;    // violet-blue
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

function buildRow(item, index, total) {
  const rank = index + 1;
  const color = heatColor(index, total);

  const row = document.createElement("div");
  row.className = "row";
  row.style.setProperty("--heat", color);
  row.tabIndex = 0;
  row.setAttribute("role", "button");
  row.setAttribute("aria-label", `${item.name}, ${item.game}, rank ${rank}`);

  const rankEl = document.createElement("div");
  rankEl.className = "row-rank";
  rankEl.textContent = "#" + rank;

  const thumbWrap = document.createElement("div");
  thumbWrap.className = "row-thumb";
  const placeholder = document.createElement("div");
  placeholder.className = "row-thumb-placeholder";
  placeholder.textContent = initials(item.name);
  thumbWrap.appendChild(placeholder);

  if (item.img) {
    const im = document.createElement("img");
    im.loading = "lazy";
    im.alt = "";
    im.src = item.img;
    im.onerror = () => { im.remove(); };
    im.onload = () => { placeholder.style.display = "none"; };
    thumbWrap.appendChild(im);
  }

  const textEl = document.createElement("div");
  textEl.className = "row-text";
  const nameEl = document.createElement("div");
  nameEl.className = "row-name";
  nameEl.textContent = item.name;
  const gameEl = document.createElement("div");
  gameEl.className = "row-game";
  gameEl.textContent = item.game;
  textEl.appendChild(nameEl);
  textEl.appendChild(gameEl);

  const ptsEl = document.createElement("div");
  ptsEl.className = "row-points";
  ptsEl.textContent = item.points === null || item.points === undefined ? "—" : item.points;

  row.appendChild(rankEl);
  row.appendChild(thumbWrap);
  row.appendChild(textEl);
  row.appendChild(ptsEl);

  const open = () => openOverlay(item, rank, color);
  row.addEventListener("click", open);
  row.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
  });

  return row;
}

function renderList() {
  const main = document.getElementById("main-div");
  main.innerHTML = "";
  MISCLIST.forEach((item, i) => {
    main.appendChild(buildRow(item, i, MISCLIST.length));
  });
}

// The modal is built once, entirely in JS, and appended to <body>.
// index.html doesn't need to contain any modal markup at all.
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

  const img = document.createElement("img");
  img.id = "img";

  const youtube = document.createElement("iframe");
  youtube.id = "youtube";
  youtube.style.width = "100%";
  youtube.style.aspectRatio = "16 / 9";
  youtube.style.border = "0";
  youtube.style.display = "none";
  youtube.setAttribute("allowfullscreen", "");
  youtube.title = "YouTube video";

  const pName = document.createElement("div");
  pName.id = "pName";
  pName.className = "content-text";

  const pPrice = document.createElement("div");
  pPrice.id = "pPrice";
  pPrice.className = "content-text";

  const pDesc = document.createElement("div");
  pDesc.id = "pDesc";
  pDesc.className = "content-text";
  const pDescInner = document.createElement("p");
  pDesc.appendChild(pDescInner);

  const pVictor = document.createElement("div");
  pVictor.id = "pVictor";
  pVictor.className = "content-text";

  const pVerifier = document.createElement("div");
  pVerifier.id = "pVerifier";
  pVerifier.className = "content-text"; 

  content.append(close, img, youtube, pName, pPrice, pDesc, pVictor, pVerifier);
  overlay.appendChild(content);
  document.body.appendChild(overlay);

  close.addEventListener("click", closeOverlay);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeOverlay();
  });

  overlayEls = { overlay, img, youtube, pName, pPrice, pDesc };
}

function openOverlay(item, rank, color) {
  if (!overlayEls) buildOverlay();
  const { overlay, img, youtube, pName, pPrice, pDesc } = overlayEls;

  overlay.style.setProperty("--heat", color);

  if (item.img) {
    img.src = item.img;
    img.style.display = "";
    img.onerror = () => { img.style.display = "none"; };
  } else {
    img.style.display = "none";
  }

  pName.textContent = `#${rank} — ${item.name}`;
  pPrice.textContent = `${item.game}  ·  ${item.points === null || item.points === undefined ? "points TBD" : item.points + " pts"}`;
  pDesc.querySelector("p").textContent = item.desc && item.desc.trim() ? item.desc : "No writeup yet.";

  overlay.classList.add("open");
  if (item.youtube) {
    youtube.src = `https://www.youtube.com/embed/${item.youtube}`;
    youtube.style.display = "block";
  } else {
    youtube.src = "";
    youtube.style.display = "none";
  }
  document.body.classList.add("no-scroll");
}

function closeOverlay() {
  if (!overlayEls) return;
  overlayEls.overlay.classList.remove("open");
  document.body.classList.remove("no-scroll");
}

document.addEventListener("DOMContentLoaded", () => {
  renderList();
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeOverlay();
  });
});