// Teams
const A1 = ['Paris-SG', 'FRA'];
const A2 = ['Real Madrid', 'ESP'];
const A3 = ['Club Brugge', 'BEL'];
const A4 = ['Galatasaray', 'TUR'];

const B1 = ['Bayern', 'GER'];
const B2 = ['Tottenham', 'ENG'];
const B3 = ['Olympiacos', 'GRE'];
const B4 = ['Crvena zvezda', 'SRB'];

const C1 = ['Man. City', 'ENG'];
const C2 = ['Shakhtar Donetsk', 'UKR'];
const C3 = ['Dinamo Zagreb', 'CRO'];
const C4 = ['Atalanta', 'ITA'];

const D1 = ['Juventus', 'ITA'];
const D2 = ['Atlético', 'ESP'];
const D3 = ['Leverkusen', 'GER'];
const D4 = ['Lokomotiv Moskva', 'RUS'];

const E1 = ['Liverpool', 'ENG'];
const E2 = ['Napoli', 'ITA'];
const E3 = ['Salzburg', 'AUT'];
const E4 = ['Genk', 'BEL'];

const F1 = ['Barcelona', 'ESP'];
const F2 = ['Dortmund', 'GER'];
const F3 = ['Internazionale', 'ITA'];
const F4 = ['Slavia Praha', 'CZE'];

const G1 = ['Zenit', 'RUS'];
const G2 = ['Benfica', 'POR'];
const G3 = ['Lyon', 'FRA'];
const G4 = ['Leipzig', 'GER'];

const H1 = ['Chelsea', 'ENG'];
const H2 = ['Ajax', 'NED'];
const H3 = ['Valencia', 'ESP'];
const H4 = ['LOSC', 'FRA'];

let matchArray = [
  {'group' : 'Groupe A', 'MatchID' : 'A1-1', 'date' : "18 septembre 2019", 'time' : "21:00", 'teamA' : A3[0], 'NationA' : A3[1], 'teamB' : A4[0], 'NationB' : A4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : 'A1-2', 'date' : "18 septembre 2019", 'time' : "21:00", 'teamA' : A1[0], 'NationA' : A1[1], 'teamB' : A2[0], 'NationB' : A2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : 'A2-1', 'date' : "1er octobre 2019" , 'time' : "21:00", 'teamA' : A2[0], 'NationA' : A2[1], 'teamB' : A3[0], 'NationB' : A3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : 'A2-2', 'date' : "1er octobre 2019" , 'time' : "21:00", 'teamA' : A4[0], 'NationA' : A4[1], 'teamB' : A1[0], 'NationB' : A1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : 'A3-1', 'date' : "22 octobre 2019"  , 'time' : "21:00", 'teamA' : A3[0], 'NationA' : A3[1], 'teamB' : A1[0], 'NationB' : A1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : 'A3-2', 'date' : "22 octobre 2019"  , 'time' : "21:00", 'teamA' : A4[0], 'NationA' : A4[1], 'teamB' : A2[0], 'NationB' : A2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : 'A4-1', 'date' : "6 novembre 2019"  , 'time' : "21:00", 'teamA' : A1[0], 'NationA' : A1[1], 'teamB' : A3[0], 'NationB' : A3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : 'A4-2', 'date' : "6 novembre 2019"  , 'time' : "21:00", 'teamA' : A2[0], 'NationA' : A2[1], 'teamB' : A4[0], 'NationB' : A4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : 'A5-1', 'date' : "26 novembre 2019" , 'time' : "21:00", 'teamA' : A4[0], 'NationA' : A4[1], 'teamB' : A3[0], 'NationB' : A3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : 'A5-2', 'date' : "26 novembre 2019" , 'time' : "21:00", 'teamA' : A2[0], 'NationA' : A2[1], 'teamB' : A1[0], 'NationB' : A1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : 'A6-1', 'date' : "11 décembre 2019" , 'time' : "21:00", 'teamA' : A1[0], 'NationA' : A1[1], 'teamB' : A4[0], 'NationB' : A4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : 'A6-2', 'date' : "11 décembre 2019" , 'time' : "21:00", 'teamA' : A3[0], 'NationA' : A3[1], 'teamB' : A2[0], 'NationB' : A2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : 'B1-1', 'date' : "18 septembre 2019", 'time' : "21:00", 'teamA' : B3[0], 'NationA' : B3[1], 'teamB' : B2[0], 'NationB' : B2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : 'B1-2', 'date' : "18 septembre 2019", 'time' : "21:00", 'teamA' : B1[0], 'NationA' : B1[1], 'teamB' : B4[0], 'NationB' : B4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : 'B2-1', 'date' : "1er octobre 2019" , 'time' : "21:00", 'teamA' : B2[0], 'NationA' : B2[1], 'teamB' : B1[0], 'NationB' : B1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : 'B2-2', 'date' : "1er octobre 2019" , 'time' : "21:00", 'teamA' : B4[0], 'NationA' : B4[1], 'teamB' : B3[0], 'NationB' : B3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : 'B3-1', 'date' : "22 octobre 2019"  , 'time' : "21:00", 'teamA' : B3[0], 'NationA' : B3[1], 'teamB' : B1[0], 'NationB' : B1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : 'B3-2', 'date' : "22 octobre 2019"  , 'time' : "21:00", 'teamA' : B2[0], 'NationA' : B2[1], 'teamB' : B4[0], 'NationB' : B4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : 'B4-1', 'date' : "6 novembre 2019"  , 'time' : "21:00", 'teamA' : B1[0], 'NationA' : B1[1], 'teamB' : B3[0], 'NationB' : B3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : 'B4-2', 'date' : "6 novembre 2019"  , 'time' : "21:00", 'teamA' : B4[0], 'NationA' : B4[1], 'teamB' : B2[0], 'NationB' : B2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : 'B5-1', 'date' : "26 novembre 2019" , 'time' : "21:00", 'teamA' : B4[0], 'NationA' : B4[1], 'teamB' : B1[0], 'NationB' : B1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : 'B5-2', 'date' : "26 novembre 2019" , 'time' : "21:00", 'teamA' : B2[0], 'NationA' : B2[1], 'teamB' : B3[0], 'NationB' : B3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : 'B6-1', 'date' : "11 décembre 2019" , 'time' : "21:00", 'teamA' : B1[0], 'NationA' : B1[1], 'teamB' : B2[0], 'NationB' : B2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : 'B6-2', 'date' : "11 décembre 2019" , 'time' : "21:00", 'teamA' : B3[0], 'NationA' : B3[1], 'teamB' : B4[0], 'NationB' : B4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : 'C1-1', 'date' : "18 septembre 2019", 'time' : "21:00", 'teamA' : C3[0], 'NationA' : C3[1], 'teamB' : C4[0], 'NationB' : C4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : 'C1-2', 'date' : "18 septembre 2019", 'time' : "21:00", 'teamA' : C2[0], 'NationA' : C2[1], 'teamB' : C1[0], 'NationB' : C1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : 'C2-1', 'date' : "1er octobre 2019" , 'time' : "21:00", 'teamA' : C4[0], 'NationA' : C4[1], 'teamB' : C2[0], 'NationB' : C2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : 'C2-2', 'date' : "1er octobre 2019" , 'time' : "21:00", 'teamA' : C1[0], 'NationA' : C1[1], 'teamB' : C3[0], 'NationB' : C3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : 'C3-1', 'date' : "22 octobre 2019"  , 'time' : "21:00", 'teamA' : C2[0], 'NationA' : C2[1], 'teamB' : C3[0], 'NationB' : C3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : 'C3-2', 'date' : "22 octobre 2019"  , 'time' : "21:00", 'teamA' : C1[0], 'NationA' : C1[1], 'teamB' : C4[0], 'NationB' : C4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : 'C4-1', 'date' : "6 novembre 2019"  , 'time' : "21:00", 'teamA' : C3[0], 'NationA' : C3[1], 'teamB' : C2[0], 'NationB' : C2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : 'C4-2', 'date' : "6 novembre 2019"  , 'time' : "21:00", 'teamA' : C4[0], 'NationA' : C4[1], 'teamB' : C1[0], 'NationB' : C1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : 'C5-1', 'date' : "26 novembre 2019" , 'time' : "21:00", 'teamA' : C4[0], 'NationA' : C4[1], 'teamB' : C3[0], 'NationB' : C3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : 'C5-2', 'date' : "26 novembre 2019" , 'time' : "21:00", 'teamA' : C1[0], 'NationA' : C1[1], 'teamB' : C2[0], 'NationB' : C2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : 'C6-1', 'date' : "11 décembre 2019" , 'time' : "21:00", 'teamA' : C3[0], 'NationA' : C3[1], 'teamB' : C1[0], 'NationB' : C1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : 'C6-2', 'date' : "11 décembre 2019" , 'time' : "21:00", 'teamA' : C2[0], 'NationA' : C2[1], 'teamB' : C4[0], 'NationB' : C4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : 'D1-1', 'date' : "18 septembre 2019", 'time' : "21:00", 'teamA' : D3[0], 'NationA' : D3[1], 'teamB' : D4[0], 'NationB' : D4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : 'D1-2', 'date' : "18 septembre 2019", 'time' : "21:00", 'teamA' : D2[0], 'NationA' : D2[1], 'teamB' : D1[0], 'NationB' : D1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : 'D2-1', 'date' : "1er octobre 2019" , 'time' : "21:00", 'teamA' : D1[0], 'NationA' : D1[1], 'teamB' : D3[0], 'NationB' : D3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : 'D2-2', 'date' : "1er octobre 2019" , 'time' : "21:00", 'teamA' : D4[0], 'NationA' : D4[1], 'teamB' : D2[0], 'NationB' : D2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : 'D3-1', 'date' : "22 octobre 2019"  , 'time' : "21:00", 'teamA' : D2[0], 'NationA' : D2[1], 'teamB' : D3[0], 'NationB' : D3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : 'D3-2', 'date' : "22 octobre 2019"  , 'time' : "21:00", 'teamA' : D1[0], 'NationA' : D1[1], 'teamB' : D4[0], 'NationB' : D4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : 'D4-1', 'date' : "6 novembre 2019"  , 'time' : "21:00", 'teamA' : D4[0], 'NationA' : D4[1], 'teamB' : D1[0], 'NationB' : D1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : 'D4-2', 'date' : "6 novembre 2019"  , 'time' : "21:00", 'teamA' : D3[0], 'NationA' : D3[1], 'teamB' : D2[0], 'NationB' : D2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : 'D5-1', 'date' : "26 novembre 2019" , 'time' : "21:00", 'teamA' : D4[0], 'NationA' : D4[1], 'teamB' : D3[0], 'NationB' : D3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : 'D5-2', 'date' : "26 novembre 2019" , 'time' : "21:00", 'teamA' : D1[0], 'NationA' : D1[1], 'teamB' : D2[0], 'NationB' : D2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : 'D6-1', 'date' : "11 décembre 2019" , 'time' : "21:00", 'teamA' : D3[0], 'NationA' : D3[1], 'teamB' : D1[0], 'NationB' : D1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : 'D6-2', 'date' : "11 décembre 2019" , 'time' : "21:00", 'teamA' : D2[0], 'NationA' : D2[1], 'teamB' : D4[0], 'NationB' : D4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : 'E1-1', 'date' : "17 septembre 2019", 'time' : "21:00", 'teamA' : E2[0], 'NationA' : E2[1], 'teamB' : E1[0], 'NationB' : E1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : 'E1-2', 'date' : "17 septembre 2019", 'time' : "21:00", 'teamA' : E3[0], 'NationA' : E3[1], 'teamB' : E4[0], 'NationB' : E4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : 'E2-1', 'date' : "2 octobre 2019"   , 'time' : "21:00", 'teamA' : E4[0], 'NationA' : E4[1], 'teamB' : E2[0], 'NationB' : E2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : 'E2-2', 'date' : "2 octobre 2019"   , 'time' : "21:00", 'teamA' : E1[0], 'NationA' : E1[1], 'teamB' : E3[0], 'NationB' : E3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : 'E3-1', 'date' : "23 octobre 2019"  , 'time' : "21:00", 'teamA' : E3[0], 'NationA' : E3[1], 'teamB' : E2[0], 'NationB' : E2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : 'E3-2', 'date' : "23 octobre 2019"  , 'time' : "21:00", 'teamA' : E4[0], 'NationA' : E4[1], 'teamB' : E1[0], 'NationB' : E1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : 'E4-1', 'date' : "5 novembre 2019"  , 'time' : "21:00", 'teamA' : E2[0], 'NationA' : E2[1], 'teamB' : E3[0], 'NationB' : E3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : 'E4-2', 'date' : "5 novembre 2019"  , 'time' : "21:00", 'teamA' : E1[0], 'NationA' : E1[1], 'teamB' : E4[0], 'NationB' : E4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : 'E5-1', 'date' : "27 novembre 2019" , 'time' : "21:00", 'teamA' : E1[0], 'NationA' : E1[1], 'teamB' : E2[0], 'NationB' : E2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : 'E5-2', 'date' : "27 novembre 2019" , 'time' : "21:00", 'teamA' : E4[0], 'NationA' : E4[1], 'teamB' : E3[0], 'NationB' : E2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : 'E6-1', 'date' : "10 décembre 2019" , 'time' : "21:00", 'teamA' : E2[0], 'NationA' : E2[1], 'teamB' : E4[0], 'NationB' : E4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : 'E6-2', 'date' : "10 décembre 2019" , 'time' : "21:00", 'teamA' : E3[0], 'NationA' : E3[1], 'teamB' : E1[0], 'NationB' : E1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : 'F1-1', 'date' : "17 septembre 2019", 'time' : "21:00", 'teamA' : F3[0], 'NationA' : F3[1], 'teamB' : F4[0], 'NationB' : F4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : 'F1-2', 'date' : "17 septembre 2019", 'time' : "21:00", 'teamA' : F2[0], 'NationA' : F2[1], 'teamB' : F1[0], 'NationB' : F1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : 'F2-1', 'date' : "2 octobre 2019"   , 'time' : "21:00", 'teamA' : F4[0], 'NationA' : F4[1], 'teamB' : F2[0], 'NationB' : F2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : 'F2-2', 'date' : "2 octobre 2019"   , 'time' : "21:00", 'teamA' : F1[0], 'NationA' : F1[1], 'teamB' : F3[0], 'NationB' : F3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : 'F3-1', 'date' : "23 octobre 2019"  , 'time' : "21:00", 'teamA' : F3[0], 'NationA' : F3[1], 'teamB' : F2[0], 'NationB' : F2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : 'F3-2', 'date' : "23 octobre 2019"  , 'time' : "21:00", 'teamA' : F4[0], 'NationA' : F4[1], 'teamB' : F1[0], 'NationB' : F1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : 'F4-1', 'date' : "5 novembre 2019"  , 'time' : "21:00", 'teamA' : F1[0], 'NationA' : F1[1], 'teamB' : F4[0], 'NationB' : F4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : 'F4-2', 'date' : "5 novembre 2019"  , 'time' : "21:00", 'teamA' : F2[0], 'NationA' : F2[1], 'teamB' : F3[0], 'NationB' : F3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : 'F5-1', 'date' : "27 novembre 2019" , 'time' : "21:00", 'teamA' : F1[0], 'NationA' : F1[1], 'teamB' : F2[0], 'NationB' : F2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : 'F5-2', 'date' : "27 novembre 2019" , 'time' : "21:00", 'teamA' : F4[0], 'NationA' : F4[1], 'teamB' : F3[0], 'NationB' : F3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : 'F6-1', 'date' : "10 décembre 2019" , 'time' : "21:00", 'teamA' : F2[0], 'NationA' : F2[1], 'teamB' : F4[0], 'NationB' : F4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : 'F6-2', 'date' : "10 décembre 2019" , 'time' : "21:00", 'teamA' : F3[0], 'NationA' : F3[1], 'teamB' : F1[0], 'NationB' : F1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : 'G1-1', 'date' : "17 septembre 2019", 'time' : "21:00", 'teamA' : G3[0], 'NationA' : G3[1], 'teamB' : G1[0], 'NationB' : G1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : 'G1-2', 'date' : "17 septembre 2019", 'time' : "21:00", 'teamA' : G2[0], 'NationA' : G2[1], 'teamB' : G4[0], 'NationB' : G4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : 'G2-1', 'date' : "2 octobre 2019"   , 'time' : "21:00", 'teamA' : G4[0], 'NationA' : G4[1], 'teamB' : G3[0], 'NationB' : G3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : 'G2-2', 'date' : "2 octobre 2019"   , 'time' : "21:00", 'teamA' : G1[0], 'NationA' : G1[1], 'teamB' : G2[0], 'NationB' : G2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : 'G3-1', 'date' : "23 octobre 2019"  , 'time' : "21:00", 'teamA' : G4[0], 'NationA' : G4[1], 'teamB' : G1[0], 'NationB' : G1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : 'G3-2', 'date' : "23 octobre 2019"  , 'time' : "21:00", 'teamA' : G2[0], 'NationA' : G2[1], 'teamB' : G3[0], 'NationB' : G3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : 'G4-1', 'date' : "5 novembre 2019"  , 'time' : "21:00", 'teamA' : G1[0], 'NationA' : G1[1], 'teamB' : G4[0], 'NationB' : G4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : 'G4-2', 'date' : "5 novembre 2019"  , 'time' : "21:00", 'teamA' : G3[0], 'NationA' : G3[1], 'teamB' : G2[0], 'NationB' : G2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : 'G5-1', 'date' : "27 novembre 2019" , 'time' : "21:00", 'teamA' : G1[0], 'NationA' : G1[1], 'teamB' : G3[0], 'NationB' : G3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : 'G5-2', 'date' : "27 novembre 2019" , 'time' : "21:00", 'teamA' : G4[0], 'NationA' : G4[1], 'teamB' : G2[0], 'NationB' : G2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : 'G6-1', 'date' : "10 décembre 2019" , 'time' : "21:00", 'teamA' : G3[0], 'NationA' : G3[1], 'teamB' : G4[0], 'NationB' : G4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : 'G6-2', 'date' : "10 décembre 2019" , 'time' : "21:00", 'teamA' : G2[0], 'NationA' : G2[1], 'teamB' : G1[0], 'NationB' : G1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : 'H1-1', 'date' : "17 septembre 2019", 'time' : "21:00", 'teamA' : H1[0], 'NationA' : H1[1], 'teamB' : H3[0], 'NationB' : H3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : 'H1-2', 'date' : "17 septembre 2019", 'time' : "21:00", 'teamA' : H2[0], 'NationA' : H2[1], 'teamB' : H4[0], 'NationB' : H4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : 'H2-1', 'date' : "2 octobre 2019"   , 'time' : "21:00", 'teamA' : H4[0], 'NationA' : H4[1], 'teamB' : H1[0], 'NationB' : H1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : 'H2-2', 'date' : "2 octobre 2019"   , 'time' : "21:00", 'teamA' : H3[0], 'NationA' : H3[1], 'teamB' : H2[0], 'NationB' : H2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : 'H3-1', 'date' : "23 octobre 2019"  , 'time' : "21:00", 'teamA' : H2[0], 'NationA' : H2[1], 'teamB' : H1[0], 'NationB' : H1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : 'H3-2', 'date' : "23 octobre 2019"  , 'time' : "21:00", 'teamA' : H4[0], 'NationA' : H4[1], 'teamB' : H3[0], 'NationB' : H3[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : 'H4-1', 'date' : "5 novembre 2019"  , 'time' : "21:00", 'teamA' : H1[0], 'NationA' : H1[1], 'teamB' : H2[0], 'NationB' : H2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : 'H4-2', 'date' : "5 novembre 2019"  , 'time' : "21:00", 'teamA' : H3[0], 'NationA' : H3[1], 'teamB' : H4[0], 'NationB' : H4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : 'H5-1', 'date' : "27 novembre 2019" , 'time' : "21:00", 'teamA' : H3[0], 'NationA' : H3[1], 'teamB' : H1[0], 'NationB' : H1[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : 'H5-2', 'date' : "27 novembre 2019" , 'time' : "21:00", 'teamA' : H4[0], 'NationA' : H4[1], 'teamB' : H2[0], 'NationB' : H2[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : 'H6-1', 'date' : "10 décembre 2019" , 'time' : "21:00", 'teamA' : H1[0], 'NationA' : H1[1], 'teamB' : H4[0], 'NationB' : H4[1], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : 'H6-2', 'date' : "10 décembre 2019" , 'time' : "21:00", 'teamA' : H2[0], 'NationA' : H2[1], 'teamB' : H3[0], 'NationB' : H3[1], 'scoreA' : "", 'scoreB' : ""}
];

let GroupArray = [
  ["rA1team", "rA2team", "rA3team", "rA4team", "rB1team", "rB2team", "rB3team", "rB4team", "rC1team", "rC2team", "rC3team", "rC4team", "rD1team", "rD2team", "rD3team", "rD4team", "rE1team", "rE2team", "rE3team", "rE4team", "rF1team", "rF2team", "rF3team", "rF4team"],
  ["rA1Nation", "rA2Nation", "rA3Nation", "rA4Nation", "rB1Nation", "rB2Nation", "rB3Nation", "rB4Nation", "rC1Nation", "rC2Nation", "rC3Nation", "rC4Nation", "rD1Nation", "rD2Nation", "rD3Nation", "rD4Nation", "rE1Nation", "rE2Nation", "rE3Nation", "rE4Nation", "rF1Nation", "rF2Nation", "rF3Nation", "rF4Nation"],
  [A1, A2, A3, A4, B1, B2, B3, B4, C1, C2, C3, C4, D1, D2, D3, D4, E1, E2, E3, E4, F1, F2, F3, F4]
];


// Fill match ID
let matchID = document.querySelectorAll('.matchID');
matchID.forEach(function(matchID, index){
  matchID.textContent = matchArray[index]['MatchID'];
})
// Fill team names
let teamA = document.querySelectorAll('.teamA');
teamA.forEach(function(teamA, index){
  teamA.textContent = matchArray[index]['teamA'];
})
let nationA = document.querySelectorAll('.NationA');
nationA.forEach(function(nationA, index){
  nationA.textContent = matchArray[index]['NationA'];
})
let teamB = document.querySelectorAll('.teamB');
teamB.forEach(function(teamB, index){
  teamB.textContent = matchArray[index]['teamB'];
})
let nationB = document.querySelectorAll('.NationB');
nationB.forEach(function(nationB, index){
  nationB.textContent = matchArray[index]['NationB'];
})
// Fill match dates
let date = document.querySelectorAll('.date');
date.forEach(function(date, index){
  date.textContent = matchArray[index]['date'];
})
// Fill match hours
let hour = document.querySelectorAll('.hour');
hour.forEach(function(hour, index){
  hour.textContent = matchArray[index]['time'];
})

for (let i = 0; i < GroupArray[0].length; i++){
  document.getElementById(GroupArray[0][i]).textContent = GroupArray[2][i][0];
  document.getElementById(GroupArray[1][i]).textContent = GroupArray[2][i][1];
}
