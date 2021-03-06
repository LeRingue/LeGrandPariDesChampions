document.addEventListener('keydown', logKey);
document.addEventListener('click', clickevent);

const matchNumberList = ["matchIDA1", "matchIDA2", "matchIDA3", "matchIDA4", "matchIDA5", "matchIDA6", "matchIDA7", "matchIDA8", "matchIDA9", "matchIDA10", "matchIDA11", "matchIDA12",
                          "matchIDB1", "matchIDB2", "matchIDB3", "matchIDB4", "matchIDB5", "matchIDB6", "matchIDB7", "matchIDB8", "matchIDB9", "matchIDB10", "matchIDB11", "matchIDB12",
                          "matchIDC1", "matchIDC2", "matchIDC3", "matchIDC4", "matchIDC5", "matchIDC6", "matchIDC7", "matchIDC8", "matchIDC9", "matchIDC10", "matchIDC11", "matchIDC12",
                          "matchIDD1", "matchIDD2", "matchIDD3", "matchIDD4", "matchIDD5", "matchIDD6", "matchIDD7", "matchIDD8", "matchIDD9", "matchIDD10", "matchIDD11", "matchIDD12",
                          "matchIDE1", "matchIDE2", "matchIDE3", "matchIDE4", "matchIDE5", "matchIDE6", "matchIDE7", "matchIDE8", "matchIDE9", "matchIDE10", "matchIDE11", "matchIDE12",
                          "matchIDF1", "matchIDF2", "matchIDF3", "matchIDF4", "matchIDF5", "matchIDF6", "matchIDF7", "matchIDF8", "matchIDF9", "matchIDF10", "matchIDF11", "matchIDF12",
                          "matchIDG1", "matchIDG2", "matchIDG3", "matchIDG4", "matchIDG5", "matchIDG6", "matchIDG7", "matchIDG8", "matchIDG9", "matchIDG10", "matchIDG11", "matchIDG12",
                          "matchIDH1", "matchIDH2", "matchIDH3", "matchIDH4", "matchIDH5", "matchIDH6", "matchIDH7", "matchIDH8", "matchIDH9", "matchIDH10", "matchIDH11", "matchIDH12"];

const scoreAList = ["scoreA1A", "scoreA2A", "scoreA3A", "scoreA4A", "scoreA5A", "scoreA6A", "scoreA7A", "scoreA8A", "scoreA9A", "scoreA10A", "scoreA11A", "scoreA12A",
                    "scoreB1A", "scoreB2A", "scoreB3A", "scoreB4A", "scoreB5A", "scoreB6A", "scoreB7A", "scoreB8A", "scoreB9A", "scoreB10A", "scoreB11A", "scoreB12A",
                    "scoreC1A", "scoreC2A", "scoreC3A", "scoreC4A", "scoreC5A", "scoreC6A", "scoreC7A", "scoreC8A", "scoreC9A", "scoreC10A", "scoreC11A", "scoreC12A",
                    "scoreD1A", "scoreD2A", "scoreD3A", "scoreD4A", "scoreD5A", "scoreD6A", "scoreD7A", "scoreD8A", "scoreD9A", "scoreD10A", "scoreD11A", "scoreD12A",
                    "scoreE1A", "scoreE2A", "scoreE3A", "scoreE4A", "scoreE5A", "scoreE6A", "scoreE7A", "scoreE8A", "scoreE9A", "scoreE10A", "scoreE11A", "scoreE12A",
                    "scoreF1A", "scoreF2A", "scoreF3A", "scoreF4A", "scoreF5A", "scoreF6A", "scoreF7A", "scoreF8A", "scoreF9A", "scoreF10A", "scoreF11A", "scoreF12A",
                    "scoreG1A", "scoreG2A", "scoreG3A", "scoreG4A", "scoreG5A", "scoreG6A", "scoreG7A", "scoreG8A", "scoreG9A", "scoreG10A", "scoreG11A", "scoreG12A",
                    "scoreH1A", "scoreH2A", "scoreH3A", "scoreH4A", "scoreH5A", "scoreH6A", "scoreH7A", "scoreH8A", "scoreH9A", "scoreH10A", "scoreH11A", "scoreH12A"];
const scoreBList = ["scoreA1B", "scoreA2B", "scoreA3B", "scoreA4B", "scoreA5B", "scoreA6B", "scoreA7B", "scoreA8B", "scoreA9B", "scoreA10B", "scoreA11B", "scoreA12B",
                    "scoreB1B", "scoreB2B", "scoreB3B", "scoreB4B", "scoreB5B", "scoreB6B", "scoreB7B", "scoreB8B", "scoreB9B", "scoreB10B", "scoreB11B", "scoreB12B",
                    "scoreC1B", "scoreC2B", "scoreC3B", "scoreC4B", "scoreC5B", "scoreC6B", "scoreC7B", "scoreC8B", "scoreC9B", "scoreC10B", "scoreC11B", "scoreC12B",
                    "scoreD1B", "scoreD2B", "scoreD3B", "scoreD4B", "scoreD5B", "scoreD6B", "scoreD7B", "scoreD8B", "scoreD9B", "scoreD10B", "scoreD11B", "scoreD12B",
                    "scoreE1B", "scoreE2B", "scoreE3B", "scoreE4B", "scoreE5B", "scoreE6B", "scoreE7B", "scoreE8B", "scoreE9B", "scoreE10B", "scoreE11B", "scoreE12B",
                    "scoreF1B", "scoreF2B", "scoreF3B", "scoreF4B", "scoreF5B", "scoreF6B", "scoreF7B", "scoreF8B", "scoreF9B", "scoreF10B", "scoreF11B", "scoreF12B",
                    "scoreG1B", "scoreG2B", "scoreG3B", "scoreG4B", "scoreG5B", "scoreG6B", "scoreG7B", "scoreG8B", "scoreG9B", "scoreG10B", "scoreG11B", "scoreG12B",
                    "scoreH1B", "scoreH2B", "scoreH3B", "scoreH4B", "scoreH5B", "scoreH6B", "scoreH7B", "scoreH8B", "scoreH9B", "scoreH10B", "scoreH11B", "scoreH12B"];
const groupCompo = [['Groupe A', A1[0], A1[1], A2[0], A2[1], A3[0], A3[1], A4[0], A4[1]],
                    ['Groupe B', B1[0], B1[1], B2[0], B2[1], B3[0], B3[1], B4[0], B4[1]],
                    ['Groupe C', C1[0], C1[1], C2[0], C2[1], C3[0], C3[1], C4[0], C4[1]],
                    ['Groupe D', D1[0], D1[1], D2[0], D2[1], D3[0], D3[1], D4[0], D4[1]],
                    ['Groupe E', E1[0], E1[1], E2[0], E2[1], E3[0], E3[1], E4[0], E4[1]],
                    ['Groupe F', F1[0], F1[1], F2[0], F2[1], F3[0], F3[1], F4[0], F4[1]],
                    ['Groupe G', G1[0], G1[1], G2[0], G2[1], G3[0], G3[1], G4[0], G4[1]],
                    ['Groupe H', H1[0], H1[1], H2[0], H2[1], H3[0], H3[1], H4[0], H4[1]]];
const GroupRankingInit = [
  {'group' : '', 'rank' : 1, 'team' : '', 'nation' : '', 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : '', 'rank' : 1, 'team' : '', 'nation' : '', 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : '', 'rank' : 1, 'team' : '', 'nation' : '', 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : '', 'rank' : 1, 'team' : '', 'nation' : '', 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];
let GroupARanking = [
  {'group' : 'Groupe A', 'rank' : 1, 'team' : A1[0], 'nation' : A1[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe A', 'rank' : 1, 'team' : A2[0], 'nation' : A2[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe A', 'rank' : 1, 'team' : A3[0], 'nation' : A3[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe A', 'rank' : 1, 'team' : A4[0], 'nation' : A4[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];
let GroupBRanking = [
  {'group' : 'Groupe B', 'rank' : 1, 'team' : B1[0], 'nation' : B1[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe B', 'rank' : 1, 'team' : B2[0], 'nation' : B2[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe B', 'rank' : 1, 'team' : B3[0], 'nation' : B3[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe B', 'rank' : 1, 'team' : B4[0], 'nation' : B4[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];
let GroupCRanking = [
  {'group' : 'Groupe C', 'rank' : 1, 'team' : C1[0], 'nation' : C1[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe C', 'rank' : 1, 'team' : C2[0], 'nation' : C2[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe C', 'rank' : 1, 'team' : C3[0], 'nation' : C3[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe C', 'rank' : 1, 'team' : C4[0], 'nation' : C4[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];
let GroupDRanking = [
  {'group' : 'Groupe D', 'rank' : 1, 'team' : D1[0], 'nation' : D1[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe D', 'rank' : 1, 'team' : D2[0], 'nation' : D2[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe D', 'rank' : 1, 'team' : D3[0], 'nation' : D3[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe D', 'rank' : 1, 'team' : D4[0], 'nation' : D4[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];
let GroupERanking = [
  {'group' : 'Groupe E', 'rank' : 1, 'team' : E1[0], 'nation' : E1[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe E', 'rank' : 1, 'team' : E2[0], 'nation' : E2[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe E', 'rank' : 1, 'team' : E3[0], 'nation' : E3[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe E', 'rank' : 1, 'team' : E4[0], 'nation' : E4[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];
let GroupFRanking = [
  {'group' : 'Groupe F', 'rank' : 1, 'team' : F1[0], 'nation' : F1[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe F', 'rank' : 1, 'team' : F2[0], 'nation' : F2[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe F', 'rank' : 1, 'team' : F3[0], 'nation' : F3[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe F', 'rank' : 1, 'team' : F4[0], 'nation' : F4[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];
let GroupGRanking = [
  {'group' : 'Groupe G', 'rank' : 1, 'team' : G1[0], 'nation' : G1[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe G', 'rank' : 1, 'team' : G2[0], 'nation' : G2[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe G', 'rank' : 1, 'team' : G3[0], 'nation' : G3[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe G', 'rank' : 1, 'team' : G4[0], 'nation' : G4[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];
let GroupHRanking = [
  {'group' : 'Groupe H', 'rank' : 1, 'team' : H1[0], 'nation' : H1[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe H', 'rank' : 1, 'team' : H2[0], 'nation' : H2[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe H', 'rank' : 1, 'team' : H3[0], 'nation' : H3[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0},
  {'group' : 'Groupe H', 'rank' : 1, 'team' : H4[0], 'nation' : H4[1], 'played' : 0, 'pts' : 0, 'BP' : 0, 'BM' : 0, 'GA' : 0}
];

const GroupRankingList = [GroupARanking, GroupBRanking, GroupCRanking, GroupDRanking, GroupERanking, GroupFRanking, GroupGRanking, GroupHRanking];

const RoundOf16Team = ['Ro16A1', 'Ro16A2', 'Ro16B1', 'Ro16B2', 'Ro16C1', 'Ro16C2', 'Ro16D1', 'Ro16D2', 'Ro16E1', 'Ro16E2', 'Ro16F1', 'Ro16F2', 'Ro16G1', 'Ro16G2', 'Ro16H1', 'Ro16H2'];
const RoundOf16iTeam = ['iRo16A1', 'iRo16A2', 'iRo16B1', 'iRo16B2', 'iRo16C1', 'iRo16C2', 'iRo16D1', 'iRo16D2', 'iRo16E1', 'iRo16E2', 'iRo16F1', 'iRo16F2', 'iRo16G1', 'iRo16G2', 'iRo16H1', 'iRo16H2'];
const RoundOf16Init = ['1er Groupe A', '2ème Groupe A', '1er Groupe B', '2ème Groupe B', '1er Groupe C', '2ème Groupe C', '1er Groupe D', '2ème Groupe D', '1er Groupe E', '2ème Groupe E', '1er Groupe F', '2ème Groupe F', '1er Groupe G', '2ème Groupe G', '1er Groupe H', '2ème Groupe H'];

const RoundOf8Team = ['Ro81', 'Ro82', 'Ro83', 'Ro84', 'Ro85', 'Ro86', 'Ro87', 'Ro88'];
const RoundOf8iTeam = ['iRo81', 'iRo82', 'iRo83', 'iRo84', 'iRo85', 'iRo86', 'iRo87', 'iRo88'];
const RoundOf8Init = ['Quart de finaliste 1', 'Quart de finaliste 2', 'Quart de finaliste 3', 'Quart de finaliste 4', 'Quart de finaliste 5', 'Quart de finaliste 6', 'Quart de finaliste 7', 'Quart de finaliste 8'];

const RoundOf4Team = ['Ro41', 'Ro42', 'Ro43', 'Ro44'];
const RoundOf4iTeam = ['iRo41', 'iRo42', 'iRo43', 'iRo44'];
const RoundOf4Init = ['Demi finaliste 1', 'Demi finaliste 2', 'Demi finaliste 3', 'Demi finaliste 4'];

const RoundOf2Team = ['Ro21', 'Ro22'];
const RoundOf2iTeam = ['iRo21', 'iRo22'];
const RoundOf2Init = ['Finaliste 1', 'Finaliste 2'];

const FormComplete = ["name", "email",
                      "Stricker",
                      "scoreA1A", "scoreA1B", "scoreA2A", "scoreA2B", "scoreA3A", "scoreA3B", "scoreA4A", "scoreA4B", "scoreA5A", "scoreA5B", "scoreA6A", "scoreA6B", "scoreA7A", "scoreA7B", "scoreA8A", "scoreA8B", "scoreA9A", "scoreA9B", "scoreA10A", "scoreA10B", "scoreA11A", "scoreA11B", "scoreA12A", "scoreA12B",
                      "scoreB1A", "scoreB1B", "scoreB2A", "scoreB2B", "scoreB3A", "scoreB3B", "scoreB4A", "scoreB4B", "scoreB5A", "scoreB5B", "scoreB6A", "scoreB6B", "scoreB7A", "scoreB7B", "scoreB8A", "scoreB8B", "scoreB9A", "scoreB9B", "scoreB10A", "scoreB10B", "scoreB11A", "scoreB11B", "scoreB12A", "scoreB12B",
                      "scoreC1A", "scoreC1B", "scoreC2A", "scoreC2B", "scoreC3A", "scoreC3B", "scoreC4A", "scoreC4B", "scoreC5A", "scoreC5B", "scoreC6A", "scoreC6B", "scoreC7A", "scoreC7B", "scoreC8A", "scoreC8B", "scoreC9A", "scoreC9B", "scoreC10A", "scoreC10B", "scoreC11A", "scoreC11B", "scoreC12A", "scoreC12B",
                      "scoreD1A", "scoreD1B", "scoreD2A", "scoreD2B", "scoreD3A", "scoreD3B", "scoreD4A", "scoreD4B", "scoreD5A", "scoreD5B", "scoreD6A", "scoreD6B", "scoreD7A", "scoreD7B", "scoreD8A", "scoreD8B", "scoreD9A", "scoreD9B", "scoreD10A", "scoreD10B", "scoreD11A", "scoreD11B", "scoreD12A", "scoreD12B",
                      "scoreE1A", "scoreE1B", "scoreE2A", "scoreE2B", "scoreE3A", "scoreE3B", "scoreE4A", "scoreE4B", "scoreE5A", "scoreE5B", "scoreE6A", "scoreE6B", "scoreE7A", "scoreE7B", "scoreE8A", "scoreE8B", "scoreE9A", "scoreE9B", "scoreE10A", "scoreE10B", "scoreE11A", "scoreE11B", "scoreE12A", "scoreE12B",
                      "scoreF1A", "scoreF1B", "scoreF2A", "scoreF2B", "scoreF3A", "scoreF3B", "scoreF4A", "scoreF4B", "scoreF5A", "scoreF5B", "scoreF6A", "scoreF6B", "scoreF7A", "scoreF7B", "scoreF8A", "scoreF8B", "scoreF9A", "scoreF9B", "scoreF10A", "scoreF10B", "scoreF11A", "scoreF11B", "scoreF12A", "scoreF12B",
                      "scoreG1A", "scoreG1B", "scoreG2A", "scoreG2B", "scoreG3A", "scoreG3B", "scoreG4A", "scoreG4B", "scoreG5A", "scoreG5B", "scoreG6A", "scoreG6B", "scoreG7A", "scoreG7B", "scoreG8A", "scoreG8B", "scoreG9A", "scoreG9B", "scoreG10A", "scoreG10B", "scoreG11A", "scoreG11B", "scoreG12A", "scoreG12B",
                      "scoreH1A", "scoreH1B", "scoreH2A", "scoreH2B", "scoreH3A", "scoreH3B", "scoreH4A", "scoreH4B", "scoreH5A", "scoreH5B", "scoreH6A", "scoreH6B", "scoreH7A", "scoreH7B", "scoreH8A", "scoreH8B", "scoreH9A", "scoreH9B", "scoreH10A", "scoreH10B", "scoreH11A", "scoreH11B", "scoreH12A", "scoreH12B"
                      ];
// const FormComplete = ["name", "email"];

const ClickToCsvTeam = RoundOf16Team.concat(RoundOf8Team.concat(RoundOf4Team.concat(RoundOf2Team)));
const ClickToCsvCheckbox = RoundOf16iTeam.concat(RoundOf8iTeam.concat(RoundOf4iTeam.concat(RoundOf2iTeam)));
// const ClickCompleteInit = [RoundOf16Init, RoundOf8Init, RoundOf4Init, RoundOf2Init];

function UpdateGroupDisplay(Group) {
  let GroupRanking;
  let rank1, r1team, r1nation, r1played, r1pts, r1BP, r1BM, r1GA;
  let rank2, r2team, r2nation, r2played, r2pts, r2BP, r2BM, r2GA;
  let rank3, r3team, r3nation, r3played, r3pts, r3BP, r3BM, r3GA;
  let rank4, r4team, r4nation, r4played, r4pts, r4BP, r4BM, r4GA;
  let rankidx = [0, 1, 2, 3];
  switch (Group) {
    case 0:
      GroupRanking = GroupARanking;
      rank1 = rankA1;
      r1team = rA1team;
      r1nation = rA1Nation;
      r1played = rA1played;
      r1pts = rA1pts;
      r1BP = rA1BP;
      r1BM = rA1BM;
      r1GA = rA1GA;
      rank2 = rankA2;
      r2team = rA2team;
      r2nation = rA2Nation;
      r2played = rA2played;
      r2pts = rA2pts;
      r2BP = rA2BP;
      r2BM = rA2BM;
      r2GA = rA2GA;
      rank3 = rankA3;
      r3team = rA3team;
      r3nation = rA3Nation;
      r3played = rA3played;
      r3pts = rA3pts;
      r3BP = rA3BP;
      r3BM = rA3BM;
      r3GA = rA3GA;
      rank4 = rankA4;
      r4team = rA4team;
      r4nation = rA4Nation;
      r4played = rA4played;
      r4pts = rA4pts;
      r4BP = rA4BP;
      r4BM = rA4BM;
      r4GA = rA4GA;
      break;
    case 1:
      GroupRanking = GroupBRanking;
      rank1 = rankB1;
      r1team = rB1team;
      r1played = rB1played;
      r1nation = rB1Nation;
      r1pts = rB1pts;
      r1BP = rB1BP;
      r1BM = rB1BM;
      r1GA = rB1GA;
      rank2 = rankB2;
      r2team = rB2team;
      r2nation = rB2Nation;
      r2played = rB2played;
      r2pts = rB2pts;
      r2BP = rB2BP;
      r2BM = rB2BM;
      r2GA = rB2GA;
      rank3 = rankB3;
      r3team = rB3team;
      r3nation = rB3Nation;
      r3played = rB3played;
      r3pts = rB3pts;
      r3BP = rB3BP;
      r3BM = rB3BM;
      r3GA = rB3GA;
      rank4 = rankB4;
      r4team = rB4team;
      r4nation = rB4Nation;
      r4played = rB4played;
      r4pts = rB4pts;
      r4BP = rB4BP;
      r4BM = rB4BM;
      r4GA = rB4GA;
      break;
    case 2:
      GroupRanking = GroupCRanking;
      rank1 = rankC1;
      r1team = rC1team;
      r1played = rC1played;
      r1nation = rC1Nation;
      r1pts = rC1pts;
      r1BP = rC1BP;
      r1BM = rC1BM;
      r1GA = rC1GA;
      rank2 = rankC2;
      r2team = rC2team;
      r2nation = rC2Nation;
      r2played = rC2played;
      r2pts = rC2pts;
      r2BP = rC2BP;
      r2BM = rC2BM;
      r2GA = rC2GA;
      rank3 = rankC3;
      r3team = rC3team;
      r3nation = rC3Nation;
      r3played = rC3played;
      r3pts = rC3pts;
      r3BP = rC3BP;
      r3BM = rC3BM;
      r3GA = rC3GA;
      rank4 = rankC4;
      r4team = rC4team;
      r4nation = rC4Nation;
      r4played = rC4played;
      r4pts = rC4pts;
      r4BP = rC4BP;
      r4BM = rC4BM;
      r4GA = rC4GA;
      break;
    case 3:
      GroupRanking = GroupDRanking;
      rank1 = rankD1;
      r1team = rD1team;
      r1played = rD1played;
      r1nation = rD1Nation;
      r1pts = rD1pts;
      r1BP = rD1BP;
      r1BM = rD1BM;
      r1GA = rD1GA;
      rank2 = rankD2;
      r2team = rD2team;
      r2nation = rD2Nation;
      r2played = rD2played;
      r2pts = rD2pts;
      r2BP = rD2BP;
      r2BM = rD2BM;
      r2GA = rD2GA;
      rank3 = rankD3;
      r3team = rD3team;
      r3nation = rD3Nation;
      r3played = rD3played;
      r3pts = rD3pts;
      r3BP = rD3BP;
      r3BM = rD3BM;
      r3GA = rD3GA;
      rank4 = rankD4;
      r4team = rD4team;
      r4nation = rD4Nation;
      r4played = rD4played;
      r4pts = rD4pts;
      r4BP = rD4BP;
      r4BM = rD4BM;
      r4GA = rD4GA;
      break;
    case 4:
      GroupRanking = GroupERanking;
      rank1 = rankE1;
      r1team = rE1team;
      r1played = rE1played;
      r1nation = rE1Nation;
      r1pts = rE1pts;
      r1BP = rE1BP;
      r1BM = rE1BM;
      r1GA = rE1GA;
      rank2 = rankE2;
      r2team = rE2team;
      r2nation = rE2Nation;
      r2played = rE2played;
      r2pts = rE2pts;
      r2BP = rE2BP;
      r2BM = rE2BM;
      r2GA = rE2GA;
      rank3 = rankE3;
      r3team = rE3team;
      r3nation = rE3Nation;
      r3played = rE3played;
      r3pts = rE3pts;
      r3BP = rE3BP;
      r3BM = rE3BM;
      r3GA = rE3GA;
      rank4 = rankE4;
      r4team = rE4team;
      r4nation = rE4Nation;
      r4played = rE4played;
      r4pts = rE4pts;
      r4BP = rE4BP;
      r4BM = rE4BM;
      r4GA = rE4GA;
      break;
    case 5:
      GroupRanking = GroupFRanking;
      rank1 = rankF1;
      r1team = rF1team;
      r1played = rF1played;
      r1nation = rF1Nation;
      r1pts = rF1pts;
      r1BP = rF1BP;
      r1BM = rF1BM;
      r1GA = rF1GA;
      rank2 = rankF2;
      r2team = rF2team;
      r2nation = rF2Nation;
      r2played = rF2played;
      r2pts = rF2pts;
      r2BP = rF2BP;
      r2BM = rF2BM;
      r2GA = rF2GA;
      rank3 = rankF3;
      r3team = rF3team;
      r3nation = rF3Nation;
      r3played = rF3played;
      r3pts = rF3pts;
      r3BP = rF3BP;
      r3BM = rF3BM;
      r3GA = rF3GA;
      rank4 = rankF4;
      r4team = rF4team;
      r4nation = rF4Nation;
      r4played = rF4played;
      r4pts = rF4pts;
      r4BP = rF4BP;
      r4BM = rF4BM;
      r4GA = rF4GA;
      break;
    case 6:
      GroupRanking = GroupGRanking;
      rank1 = rankG1;
      r1team = rG1team;
      r1nation = rG1Nation;
      r1played = rG1played;
      r1pts = rG1pts;
      r1BP = rG1BP;
      r1BM = rG1BM;
      r1GA = rG1GA;
      rank2 = rankG2;
      r2team = rG2team;
      r2nation = rG2Nation;
      r2played = rG2played;
      r2pts = rG2pts;
      r2BP = rG2BP;
      r2BM = rG2BM;
      r2GA = rG2GA;
      rank3 = rankG3;
      r3team = rG3team;
      r3nation = rG3Nation;
      r3played = rG3played;
      r3pts = rG3pts;
      r3BP = rG3BP;
      r3BM = rG3BM;
      r3GA = rG3GA;
      rank4 = rankG4;
      r4team = rG4team;
      r4nation = rG4Nation;
      r4played = rG4played;
      r4pts = rG4pts;
      r4BP = rG4BP;
      r4BM = rG4BM;
      r4GA = rG4GA;
      break;
    case 7:
      GroupRanking = GroupHRanking;
      rank1 = rankH1;
      r1team = rH1team;
      r1played = rH1played;
      r1nation = rH1Nation;
      r1pts = rH1pts;
      r1BP = rH1BP;
      r1BM = rH1BM;
      r1GA = rH1GA;
      rank2 = rankH2;
      r2team = rH2team;
      r2nation = rH2Nation;
      r2played = rH2played;
      r2pts = rH2pts;
      r2BP = rH2BP;
      r2BM = rH2BM;
      r2GA = rH2GA;
      rank3 = rankH3;
      r3team = rH3team;
      r3nation = rH3Nation;
      r3played = rH3played;
      r3pts = rH3pts;
      r3BP = rH3BP;
      r3BM = rH3BM;
      r3GA = rH3GA;
      rank4 = rankH4;
      r4team = rH4team;
      r4nation = rH4Nation;
      r4played = rH4played;
      r4pts = rH4pts;
      r4BP = rH4BP;
      r4BM = rH4BM;
      r4GA = rH4GA;
      break;
  }

  // Display Rank
  //------------------------------------------------------------------------------------------------
  // ToDo: careful in case of draw (first keystroke => all teams are first)
  //------------------------------------------------------------------------------------------------

  for (let ranknb = 1; ranknb <GroupRanking.length + 1; ranknb++){
    for (let i = 0; i < GroupRanking.length; i++){
      if (GroupRanking[i]['rank'] == ranknb){
        rankidx[ranknb-1] = i;
      }
    }
  }
  rank1.textContent = GroupRanking[rankidx[0]]['rank'];
  r1team.textContent = GroupRanking[rankidx[0]]['team'];
  r1nation.textContent = GroupRanking[rankidx[0]]['nation'];
  r1played.textContent = GroupRanking[rankidx[0]]['played'];
  r1pts.textContent = GroupRanking[rankidx[0]]['pts'];
  r1BP.textContent = GroupRanking[rankidx[0]]['BP'];
  r1BM.textContent = GroupRanking[rankidx[0]]['BM'];
  r1GA.textContent = GroupRanking[rankidx[0]]['GA'];
  rank2.textContent = GroupRanking[rankidx[1]]['rank'];
  r2team.textContent = GroupRanking[rankidx[1]]['team'];
  r2nation.textContent = GroupRanking[rankidx[1]]['nation'];
  r2played.textContent = GroupRanking[rankidx[1]]['played'];
  r2pts.textContent = GroupRanking[rankidx[1]]['pts'];
  r2BP.textContent = GroupRanking[rankidx[1]]['BP'];
  r2BM.textContent = GroupRanking[rankidx[1]]['BM'];
  r2GA.textContent = GroupRanking[rankidx[1]]['GA'];
  rank3.textContent = GroupRanking[rankidx[2]]['rank'];
  r3team.textContent = GroupRanking[rankidx[2]]['team'];
  r3nation.textContent = GroupRanking[rankidx[2]]['nation'];
  r3played.textContent = GroupRanking[rankidx[2]]['played'];
  r3pts.textContent = GroupRanking[rankidx[2]]['pts'];
  r3BP.textContent = GroupRanking[rankidx[2]]['BP'];
  r3BM.textContent = GroupRanking[rankidx[2]]['BM'];
  r3GA.textContent = GroupRanking[rankidx[2]]['GA'];
  rank4.textContent = GroupRanking[rankidx[3]]['rank'];
  r4team.textContent = GroupRanking[rankidx[3]]['team'];
  r4nation.textContent = GroupRanking[rankidx[3]]['nation'];
  r4played.textContent = GroupRanking[rankidx[3]]['played'];
  r4pts.textContent = GroupRanking[rankidx[3]]['pts'];
  r4BP.textContent = GroupRanking[rankidx[3]]['BP'];
  r4BM.textContent = GroupRanking[rankidx[3]]['BM'];
  r4GA.textContent = GroupRanking[rankidx[3]]['GA'];
}

function ResetGroupRanking(group, GroupRanking){
  // Convert A-F to 0-7
  let indexGroup = group.charCodeAt() - 0x41;
  for (let i = 0; i < GroupRanking.length; i++){
    GroupRanking[i]['group'] = groupCompo[indexGroup][0];
    GroupRanking[i]['rank'] = GroupRankingInit[i]['rank'];
    GroupRanking[i]['team'] = groupCompo[indexGroup][2*i+1];
    GroupRanking[i]['nation'] = groupCompo[indexGroup][2*i+2];
    GroupRanking[i]['played'] = GroupRankingInit[i]['played'];
    GroupRanking[i]['pts'] = GroupRankingInit[i]['pts'];
    GroupRanking[i]['BP'] = GroupRankingInit[i]['BP'];
    GroupRanking[i]['BM'] = GroupRankingInit[i]['BM'];
    GroupRanking[i]['GA'] = GroupRankingInit[i]['GA'];
  }
}

function ResetRoundOfX(){
  // Round of 16
  for (let i = 0; i < RoundOf16Team.length; i++){
    document.getElementById(RoundOf16Team[i]).textContent = RoundOf16Init[i];
  }
  // Round of 8
  for (let i = 0; i < RoundOf8Team.length; i++){
    document.getElementById(RoundOf8Team[i]).textContent = RoundOf8Init[i];
  }
  // Round of 16
  for (let i = 0; i < RoundOf4Team.length; i++){
    document.getElementById(RoundOf4Team[i]).textContent = RoundOf4Init[i];
  }
  // Round of 16
  for (let i = 0; i < RoundOf2Team.length; i++){
    document.getElementById(RoundOf2Team[i]).textContent = RoundOf2Init[i];
  }

}

function DrawProcessing(GroupRanking, rank) {
  let countRank = 0;
  let GroupDraw = [
    {'index' : 0, 'criterion1' : 0},
    {'index' : 0, 'criterion1' : 0},
    {'index' : 0, 'criterion1' : 0},
    {'index' : 0, 'criterion1' : 0}
  ];
  //------------------------------------------------------------------------------------------------
  // ToDo: use actural rules!!!!
  //------------------------------------------------------------------------------------------------

  // for (rank = 1; rank < GroupRanking.length; rank++) {
    for (let i = 0; i < GroupRanking.length; i++){
      if (GroupRanking[i]['rank'] == rank){
        GroupDraw[countRank]['index'] = i;
        countRank += 1;
      }
    }
  // }
  if (countRank > 1){
    for (let j = 0; j < countRank; j++){
      GroupDraw[j]['criterion1'] =  1000 * GroupRanking[GroupDraw[j]['index']]['pts'] +
                                  100 * GroupRanking[GroupDraw[j]['index']]['GA'] +
                                  GroupRanking[GroupDraw[j]['index']]['BP'];
    }
    for (let i = 0; i < countRank; i++){
      for (let j = 0; j < countRank; j++){
        if (i == j){
          continue;
        }
        if (GroupDraw[i]['criterion1'] < GroupDraw[j]['criterion1']) {
          GroupRanking[GroupDraw[i]['index']]['rank'] += 1;
        }
      }
    }
  }
  return countRank;
}

function ComputeRank(GroupRanking){
  // Check First
  for (let i = 0; i < GroupRanking.length; i++){
    for (let j = 0; j < GroupRanking.length; j++){
      if (i == j){
        continue;
      }
      if (GroupRanking[i]['pts'] < GroupRanking[j]['pts']) {
        GroupRanking[i]['rank'] += 1;
      }
    }
  }
  // Are there draws?
  DrawProcessing(GroupRanking, 1);
  DrawProcessing(GroupRanking, 2);
  DrawProcessing(GroupRanking, 3);
  DrawProcessing(GroupRanking, 4);
}

function IsGroupCompleted(GroupRanking){
  // Check if all teams have played 3 games (24 in total)
  let games = GroupRanking[0]['played'] +
              GroupRanking[1]['played'] +
              GroupRanking[2]['played'] +
              GroupRanking[3]['played'];
  return (games == 24) ? true : false;
}

function GroupToRoundOf16(Group, GroupRanking){
  // Identify first 2 teams and populate Round of 8
  let div1, div2;
  let idxFirst, idxSecond;
  // Identify first
  for (let i = 0; i < GroupRanking.length; i++){
    if (GroupRanking[i]['rank'] == 1){
      idxFirst = i;
      break;
    }
  }
  // Identify Second
  for (let i = 0; i < GroupRanking.length; i++){
    if (GroupRanking[i]['rank'] == 2){
      idxSecond = i;
      break;
    }
  }

  switch (Group) {
    case 0:
      document.getElementById('Ro16A1').textContent = GroupRanking[idxFirst]['team'] + " - " + GroupRanking[idxFirst]['nation'];
      document.getElementById('Ro16A2').textContent = GroupRanking[idxSecond]['team'] + " - " + GroupRanking[idxSecond]['nation'];
      break;
    case 1:
      document.getElementById('Ro16B1').textContent = GroupRanking[idxFirst]['team'] + " - " + GroupRanking[idxFirst]['nation'];
      document.getElementById('Ro16B2').textContent = GroupRanking[idxSecond]['team'] + " - " + GroupRanking[idxSecond]['nation'];
      break;
    case 2:
      document.getElementById('Ro16C1').textContent = GroupRanking[idxFirst]['team'] + " - " + GroupRanking[idxFirst]['nation'];
      document.getElementById('Ro16C2').textContent = GroupRanking[idxSecond]['team'] + " - " + GroupRanking[idxSecond]['nation'];
      break;
    case 3:
      document.getElementById('Ro16D1').textContent = GroupRanking[idxFirst]['team'] + " - " + GroupRanking[idxFirst]['nation'];
      document.getElementById('Ro16D2').textContent = GroupRanking[idxSecond]['team'] + " - " + GroupRanking[idxSecond]['nation'];
      break;
    case 4:
      document.getElementById('Ro16E1').textContent = GroupRanking[idxFirst]['team'] + " - " + GroupRanking[idxFirst]['nation'];
      document.getElementById('Ro16E2').textContent = GroupRanking[idxSecond]['team'] + " - " + GroupRanking[idxSecond]['nation'];
      break;
    case 5:
      document.getElementById('Ro16F1').textContent = GroupRanking[idxFirst]['team'] + " - " + GroupRanking[idxFirst]['nation'];
      document.getElementById('Ro16F2').textContent = GroupRanking[idxSecond]['team'] + " - " + GroupRanking[idxSecond]['nation'];
      break;
    case 6:
      document.getElementById('Ro16G1').textContent = GroupRanking[idxFirst]['team'] + " - " + GroupRanking[idxFirst]['nation'];
      document.getElementById('Ro16G2').textContent = GroupRanking[idxSecond]['team'] + " - " + GroupRanking[idxSecond]['nation'];
      break;
    case 7:
      document.getElementById('Ro16H1').textContent = GroupRanking[idxFirst]['team'] + " - " + GroupRanking[idxFirst]['nation'];
      document.getElementById('Ro16H2').textContent = GroupRanking[idxSecond]['team'] + " - " + GroupRanking[idxSecond]['nation'];
      break;
    }
}

function RoundOfXToRoundOfY(RoundOfX){
  let RoundOfXTeam;
  let RoundOfXiTeam;
  let RoundOfYTeam;
  let teamX;
  let teamY;
  let xidx = 0;
  let yidx = 0;
  let teamlimit;

  switch(RoundOfX){
    case 16:
    RoundOfXTeam = RoundOf16Team;
    RoundOfXiTeam = RoundOf16iTeam;
    RoundOfYTeam = RoundOf8Team;
    teamlimit = 8;
    break;
    case 8:
    RoundOfXTeam = RoundOf8Team;
    RoundOfXiTeam = RoundOf8iTeam;
    RoundOfYTeam = RoundOf4Team;
    teamlimit = 4;
    break;
    case 4:
    RoundOfXTeam = RoundOf4Team;
    RoundOfXiTeam = RoundOf4iTeam;
    RoundOfYTeam = RoundOf2Team;
    teamlimit = 2;
    break;
  }
  // Check Round of X match by ID
  for (xidx = 0; xidx < RoundOfXTeam.length; xidx++){
    iteamX = document.getElementById(RoundOfXiTeam[xidx]);
    teamX = document.getElementById(RoundOfXTeam[xidx]);
    teamY = document.getElementById(RoundOfYTeam[yidx]);
    if ((iteamX.checked == true) && (yidx < teamlimit)){
      teamY.textContent = teamX.textContent;
      yidx++;
    }
  }
}

function IsFormComplete(){
  // Parse all form elements
  for (let i = 0; i < FormComplete.length; i++){
    if (document.getElementById(FormComplete[i]).value == ""){
      return false;
    }
  }
  // Check that minimum number of inputs are checked: 8 teams in Round Of 16
  for (let i = 0; i < RoundOf16Team.length; i++){
    if (document.getElementById(RoundOf16Team[i]).textContent == RoundOf16Init[i]){
      return false;
    }
  }

  // Check that minimum number of inputs are checked: 4 teams in Round Of 8
  for (let i = 0; i < RoundOf8Team.length; i++){
    if (document.getElementById(RoundOf8Team[i]).textContent == RoundOf8Init[i]){
      return false;
    }
  }

  // Check that minimum number of inputs are checked: 2 teams in Round Of 4
  for (let i = 0; i < RoundOf4Team.length; i++){
    if (document.getElementById(RoundOf4Team[i]).textContent == RoundOf4Init[i]){
      return false;
    }
  }

  // Check that minimum number of inputs are checked: 1 team in Round Of 2
  for (let i = 0; i < RoundOf2Team.length; i++){
    if (document.getElementById(RoundOf2Team[i]).textContent == RoundOf2Init[i]){
      return false;
    }
  }

  // Check that at least one checkbox is checked for finale
  if ((document.getElementById("iRo21").checked == false) && (document.getElementById("iRo22").checked == false)){
    return false;
  }
  return true;
}

// function IsFileLoaded(){
//   let file_loaded = document.getElementById('file-selector');
//   if(file_loaded.files.length == 0){
//     return false;
//   }
//   return true;
// }

function logKey(e) {
  // Reset GroupRanking
  ResetGroupRanking("A", GroupARanking);
  ResetGroupRanking("B", GroupBRanking);
  ResetGroupRanking("C", GroupCRanking);
  ResetGroupRanking("D", GroupDRanking);
  ResetGroupRanking("E", GroupERanking);
  ResetGroupRanking("F", GroupFRanking);
  ResetGroupRanking("G", GroupGRanking);
  ResetGroupRanking("H", GroupHRanking);
  ResetRoundOfX();

  // Check form entries that are set
  for (let num = 0; num < matchNumberList.length; num++){
    scoreA = scoreAList[num];
    scoreB = scoreBList[num];
    MatchNumber = matchNumberList[num];
    if ((document.getElementById(scoreA).value != "") && (document.getElementById(scoreB).value != "")){
      // let matchID = parseInt(document.getElementById(MatchNumber).textContent, 10) - 1;
      let matchID = document.getElementById(MatchNumber).textContent;
      let score1 = parseInt(document.getElementById(scoreA).value, 10);
      let score2 = parseInt(document.getElementById(scoreB).value, 10);

      let indexMID = 0;
      while (indexMID < matchArray.length){
        if ((matchArray[indexMID]['MatchID']) != matchID){
          indexMID += 1;
        }
        else {
          break;
        }
      }
      team1 = matchArray[indexMID]['teamA'];
      team2 = matchArray[indexMID]['teamB'];

      // Check Group Index
      let indexGroup = 0;
      switch (matchArray[indexMID]['group']) {
        case 'Groupe A':
          indexGroup = 0;
          break;
        case 'Groupe B':
          indexGroup = 1;
          break;
        case 'Groupe C':
          indexGroup = 2;
          break;
        case 'Groupe D':
          indexGroup = 3;
          break;
        case 'Groupe E':
          indexGroup = 4;
          break;
        case 'Groupe F':
          indexGroup = 5;
          break;
        case 'Groupe G':
          indexGroup = 6;
          break;
        case 'Groupe H':
          indexGroup = 7;
          break;
      }

      // Populate MatchArray table with score
      matchArray[indexMID]['scoreA'] = score1;
      matchArray[indexMID]['scoreB'] = score2;
      let index1 = 0;
      let index2 = 0;

      // Associate team with index in GroupRanking
      index1 = 0;
      index2 = 0;
      while ((GroupRankingList[indexGroup][index1]['team'] != team1) && (index1 < GroupRankingList[indexGroup].length)){
        index1 += 1;
      }
      while ((GroupRankingList[indexGroup][index2]['team'] != team2) && (index2 < GroupRankingList[indexGroup].length)){
        index2 += 1;
      }
      if(score1 > score2){
        GroupRankingList[indexGroup][index1]['pts'] += 3;
      }
      if(score1 == score2){
        GroupRankingList[indexGroup][index1]['pts'] += 1;
        GroupRankingList[indexGroup][index2]['pts'] += 1;
      }
      if(score1 < score2){
        GroupRankingList[indexGroup][index2]['pts'] += 3;
      }
      GroupRankingList[indexGroup][index1]['played'] += 1;
      GroupRankingList[indexGroup][index1]['BP'] += score1;
      GroupRankingList[indexGroup][index1]['BM'] += score2;
      GroupRankingList[indexGroup][index1]['GA'] += score1 - score2;
      GroupRankingList[indexGroup][index2]['played'] += 1;
      GroupRankingList[indexGroup][index2]['BP'] += score2;
      GroupRankingList[indexGroup][index2]['BM'] += score1;
      GroupRankingList[indexGroup][index2]['GA'] += score2 - score1;
    }
  }

  // Compute rank
  for (let i = 0; i < GroupRankingList.length; i++) {
    ComputeRank(GroupRankingList[i]);
  }

  // Update text to display
  for (let i = 0; i < GroupRankingList.length; i++) {
    UpdateGroupDisplay(i);
  }

  // Round of 16: check groups that are completed
  let GroupCompleted = 0;
  for (let i = 0; i < GroupRankingList.length; i++){
    if (IsGroupCompleted(GroupRankingList[i])){
      GroupCompleted++;
      GroupToRoundOf16(i, GroupRankingList[i]);
    }
  }

  // Round of 16 to Round of 8
  RoundOfXToRoundOfY(16);

  // Round of 8 to Round of 4
  RoundOfXToRoundOfY(8);

  // Round of 4 to Final
  RoundOfXToRoundOfY(4);

  // Add Validate button if form is complete
  let show = false;
  if (IsFormComplete()){
    // Show Validation button
    show = false;
  } else {
    // Hide Validation button
    show = true;
  }
  document.getElementById('validation').disabled = show;
}

function clickevent(e) {
  ResetRoundOfX();

  let GroupCompleted = 0;
  for (let i = 0; i < GroupRankingList.length; i++){
    if (IsGroupCompleted(GroupRankingList[i])){
      GroupCompleted++;
      GroupToRoundOf16(i, GroupRankingList[i]);
    }
  }
  // Round of 16 to Round of 8
  RoundOfXToRoundOfY(16);

  // Round of 8 to Round of 4
  RoundOfXToRoundOfY(8);

  // Round of 4 to Final
  RoundOfXToRoundOfY(4);

  // Add Validate button if form is complete
  let show = false;
  if (IsFormComplete()){
    // Show Validation button
    show = false;
  } else {
    // Hide Validation button
    show = true;
  }
  document.getElementById('validation').disabled = show;

}
