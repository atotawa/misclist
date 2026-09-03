// misclist point curve
// -----------------------------------------------------------------------
// You don't have to hand-pick a point value for every achievement.
// Leave `points: null` in data.js and a value is generated automatically
// from that achievement's position in the list — since the list is
// already ordered by difficulty, position already encodes most of what
// you'd use to choose a number by hand anyway.
//
// Only set an explicit number in data.js when you want to override the
// curve for one specific entry — e.g. two non-adjacent achievements feel
// equally hard, or there's a bigger difficulty jump between two entries
// than their positions alone would suggest.
//
// Tune these three numbers to reshape the whole curve:
//   TOP   - points awarded for rank #1 (the hardest entry on the list)
//   FLOOR - the value points settle toward for the easiest entries
//   DECAY - how fast points fall off moving down the list, 0-1.
//           Closer to 1 = flatter curve (small gaps throughout).
//           Closer to 0 = steep drop-off (huge gap near the top, then
//           the rest of the list is worth very little).
//
// The shape this produces: a big gap between #1 and #2, shrinking gaps
// as you go down the list — same idea as the actual demonlist, where the
// difference between the two hardest things matters a lot more than the
// difference between two things near the bottom.
// -----------------------------------------------------------------------

const POINTS_CURVE = { TOP: 1000, FLOOR: 100, DECAY: 0.91 };

function curvePoints(rank) {
  const { TOP, FLOOR, DECAY } = POINTS_CURVE;
  return Math.round(FLOOR + (TOP - FLOOR) * Math.pow(DECAY, rank - 1));
}

// The value actually used for display/scoring: a manual override from
// data.js if one is set, otherwise the curve-generated value for this rank.
function effectivePoints(item, rank) {
  return (item.points === null || item.points === undefined) ? curvePoints(rank) : item.points;
}