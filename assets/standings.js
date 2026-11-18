// Monument Bowling — team standings (TEAM data only; no individual bowler info).
// This is the ONLY file you edit to update standings each week.
//
// Weekly update:
//   1. Change week, asOf, and each team's won / lost / pins / avg / highGame.
//      (Win % and the ranking are calculated automatically.)
//   2. Replace the "results" rows with last week's team matchups.
//   3. Set notice to "" to hide the yellow-ish note once real 2026-27 numbers are in.
//   4. Commit and push.
//
// Column meanings (same as the league standings sheet):
//   won / lost = league points won / lost     pins = total scratch pins
//   avg = team average per game                highGame = team high game

window.MB_STANDINGS = {
  season: "2025–26 (final)",
  league: "Berkshire County League — HS Varsity",
  week: 11,
  totalWeeks: 11,
  asOf: "Feb 6, 2026",
  notice: "These are last season's final standings, shown as a preview. 2026–27 standings will be posted here each week once the season starts.",
  teams: [
    { name: "Lee",         won: 28, lost: 5,  pins: 18632, avg: 854, highGame: 943 },
    { name: "Taconic",     won: 22, lost: 11, pins: 17391, avg: 805, highGame: 927 },
    { name: "McCann Tech", won: 21, lost: 12, pins: 16657, avg: 757, highGame: 856 },
    { name: "Monument Mt", won: 18, lost: 15, pins: 16454, avg: 747, highGame: 964, us: true },
    { name: "Pittsfield",  won: 7,  lost: 26, pins: 12741, avg: 624, highGame: 682 },
    { name: "Mt. Everett", won: 3,  lost: 30, pins: 9630,  avg: 580, highGame: 580 }
  ],
  // Latest week's team results: total pins and league points won by each team.
  resultsLabel: "Week 11",
  results: [
    { a: "Lee",         aTotal: 1644, aPts: 2, b: "Taconic",     bTotal: 1664, bPts: 1 },
    { a: "McCann Tech", aTotal: 1403, aPts: 0, b: "Monument Mt", bTotal: 1563, bPts: 3 },
    { a: "Pittsfield",  aTotal: 1171, aPts: 3, b: "Mt. Everett", bTotal: 603,  bPts: 0 }
  ]
};
