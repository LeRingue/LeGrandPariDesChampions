// Teams
const A1 = ['Paris Saint-Germain', 'FRA'];
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
  {'group' : 'Groupe A', 'MatchID' : '1', 'date' : "12 juin 2020", 'time' : "21:00", 'teamA' : A1[0], 'teamB' : A2[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : '2', 'date' : "13 juin 2020", 'time' : "15:00", 'teamA' : A3[0], 'teamB' : A4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : '13', 'date' : "17 juin 2020", 'time' : "18:00", 'teamA' : A1[0], 'teamB' : A3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : '14', 'date' : "17 juin 2020", 'time' : "21:00", 'teamA' : A2[0], 'teamB' : A4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : '25', 'date' : "21 juin 2020", 'time' : "18:00", 'teamA' : A4[0], 'teamB' : A1[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : '26', 'date' : "21 juin 2020", 'time' : "18:00", 'teamA' : A2[0], 'teamB' : A3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : '1', 'date' : "12 juin 2020", 'time' : "21:00", 'teamA' : A1[0], 'teamB' : A2[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : '2', 'date' : "13 juin 2020", 'time' : "15:00", 'teamA' : A3[0], 'teamB' : A4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : '13', 'date' : "17 juin 2020", 'time' : "18:00", 'teamA' : A1[0], 'teamB' : A3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : '14', 'date' : "17 juin 2020", 'time' : "21:00", 'teamA' : A2[0], 'teamB' : A4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : '25', 'date' : "21 juin 2020", 'time' : "18:00", 'teamA' : A4[0], 'teamB' : A1[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe A', 'MatchID' : '26', 'date' : "21 juin 2020", 'time' : "18:00", 'teamA' : A2[0], 'teamB' : A3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : '3', 'date' : "13 juin 2020", 'time' : "18:00", 'teamA' : B1[0], 'teamB' : B2[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : '4', 'date' : "13 juin 2020", 'time' : "21:00", 'teamA' : B3[0], 'teamB' : B4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : '15', 'date' : "17 juin 2020", 'time' : "15:00", 'teamA' : B1[0], 'teamB' : B3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : '16', 'date' : "18 juin 2020", 'time' : "18:00", 'teamA' : B2[0], 'teamB' : B4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : '27', 'date' : "22 juin 2020", 'time' : "21:00", 'teamA' : B4[0], 'teamB' : B1[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : '28', 'date' : "22 juin 2020", 'time' : "21:00", 'teamA' : B2[0], 'teamB' : B3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : '3', 'date' : "13 juin 2020", 'time' : "18:00", 'teamA' : B1[0], 'teamB' : B2[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : '4', 'date' : "13 juin 2020", 'time' : "21:00", 'teamA' : B3[0], 'teamB' : B4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : '15', 'date' : "17 juin 2020", 'time' : "15:00", 'teamA' : B1[0], 'teamB' : B3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : '16', 'date' : "18 juin 2020", 'time' : "18:00", 'teamA' : B2[0], 'teamB' : B4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : '27', 'date' : "22 juin 2020", 'time' : "21:00", 'teamA' : B4[0], 'teamB' : B1[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe B', 'MatchID' : '28', 'date' : "22 juin 2020", 'time' : "21:00", 'teamA' : B2[0], 'teamB' : B3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : '5', 'date' : "14 juin 2020", 'time' : "21:00", 'teamA' : C1[0], 'teamB' : C2[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : '6', 'date' : "14 juin 2020", 'time' : "18:00", 'teamA' : C3[0], 'teamB' : C4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : '17', 'date' : "18 juin 2020", 'time' : "21:00", 'teamA' : C1[0], 'teamB' : C3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : '18', 'date' : "18 juin 2020", 'time' : "15:00", 'teamA' : C2[0], 'teamB' : C4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : '29', 'date' : "22 juin 2020", 'time' : "18:00", 'teamA' : C4[0], 'teamB' : C1[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : '30', 'date' : "22 juin 2020", 'time' : "18:00", 'teamA' : C2[0], 'teamB' : C3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : '5', 'date' : "14 juin 2020", 'time' : "21:00", 'teamA' : C1[0], 'teamB' : C2[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : '6', 'date' : "14 juin 2020", 'time' : "18:00", 'teamA' : C3[0], 'teamB' : C4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : '17', 'date' : "18 juin 2020", 'time' : "21:00", 'teamA' : C1[0], 'teamB' : C3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : '18', 'date' : "18 juin 2020", 'time' : "15:00", 'teamA' : C2[0], 'teamB' : C4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : '29', 'date' : "22 juin 2020", 'time' : "18:00", 'teamA' : C4[0], 'teamB' : C1[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe C', 'MatchID' : '30', 'date' : "22 juin 2020", 'time' : "18:00", 'teamA' : C2[0], 'teamB' : C3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : '7', 'date' : "14 juin 2020", 'time' : "15:00", 'teamA' : D1[0], 'teamB' : D2[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : '8', 'date' : "15 juin 2020", 'time' : "15:00", 'teamA' : D3[0], 'teamB' : D4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : '19', 'date' : "19 juin 2020", 'time' : "18:00", 'teamA' : D1[0], 'teamB' : D3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : '20', 'date' : "19 juin 2020", 'time' : "21:00", 'teamA' : D2[0], 'teamB' : D4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : '31', 'date' : "23 juin 2020", 'time' : "21:00", 'teamA' : D4[0], 'teamB' : D1[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : '32', 'date' : "23 juin 2020", 'time' : "21:00", 'teamA' : D2[0], 'teamB' : D3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : '7', 'date' : "14 juin 2020", 'time' : "15:00", 'teamA' : D1[0], 'teamB' : D2[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : '8', 'date' : "15 juin 2020", 'time' : "15:00", 'teamA' : D3[0], 'teamB' : D4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : '19', 'date' : "19 juin 2020", 'time' : "18:00", 'teamA' : D1[0], 'teamB' : D3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : '20', 'date' : "19 juin 2020", 'time' : "21:00", 'teamA' : D2[0], 'teamB' : D4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : '31', 'date' : "23 juin 2020", 'time' : "21:00", 'teamA' : D4[0], 'teamB' : D1[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe D', 'MatchID' : '32', 'date' : "23 juin 2020", 'time' : "21:00", 'teamA' : D2[0], 'teamB' : D3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : '9', 'date' : "15 juin 2020", 'time' : "21:00", 'teamA' : E1[0], 'teamB' : E2[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : '10', 'date' : "15 juin 2020", 'time' : "18:00", 'teamA' : E3[0], 'teamB' : E4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : '21', 'date' : "19 juin 2020", 'time' : "15:00", 'teamA' : E1[0], 'teamB' : E3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : '22', 'date' : "20 juin 2020", 'time' : "21:00", 'teamA' : E2[0], 'teamB' : E4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : '33', 'date' : "24 juin 2020", 'time' : "18:00", 'teamA' : E4[0], 'teamB' : E1[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : '34', 'date' : "24 juin 2020", 'time' : "18:00", 'teamA' : E2[0], 'teamB' : E3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : '9', 'date' : "15 juin 2020", 'time' : "21:00", 'teamA' : E1[0], 'teamB' : E2[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : '10', 'date' : "15 juin 2020", 'time' : "18:00", 'teamA' : E3[0], 'teamB' : E4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : '21', 'date' : "19 juin 2020", 'time' : "15:00", 'teamA' : E1[0], 'teamB' : E3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : '22', 'date' : "20 juin 2020", 'time' : "21:00", 'teamA' : E2[0], 'teamB' : E4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : '33', 'date' : "24 juin 2020", 'time' : "18:00", 'teamA' : E4[0], 'teamB' : E1[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe E', 'MatchID' : '34', 'date' : "24 juin 2020", 'time' : "18:00", 'teamA' : E2[0], 'teamB' : E3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : '11', 'date' : "16 juin 2020", 'time' : "18:00", 'teamA' : F1[0], 'teamB' : F2[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : '12', 'date' : "16 juin 2020", 'time' : "21:00", 'teamA' : F3[0], 'teamB' : F4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : '23', 'date' : "20 juin 2020", 'time' : "15:00", 'teamA' : F1[0], 'teamB' : F3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : '24', 'date' : "20 juin 2020", 'time' : "18:00", 'teamA' : F2[0], 'teamB' : F4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : '35', 'date' : "24 juin 2020", 'time' : "21:00", 'teamA' : F4[0], 'teamB' : F1[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : '36', 'date' : "24 juin 2020", 'time' : "21:00", 'teamA' : F2[0], 'teamB' : F3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : '11', 'date' : "16 juin 2020", 'time' : "18:00", 'teamA' : F1[0], 'teamB' : F2[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : '12', 'date' : "16 juin 2020", 'time' : "21:00", 'teamA' : F3[0], 'teamB' : F4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : '23', 'date' : "20 juin 2020", 'time' : "15:00", 'teamA' : F1[0], 'teamB' : F3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : '24', 'date' : "20 juin 2020", 'time' : "18:00", 'teamA' : F2[0], 'teamB' : F4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : '35', 'date' : "24 juin 2020", 'time' : "21:00", 'teamA' : F4[0], 'teamB' : F1[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe F', 'MatchID' : '36', 'date' : "24 juin 2020", 'time' : "21:00", 'teamA' : F2[0], 'teamB' : F3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : '11', 'date' : "16 juin 2020", 'time' : "18:00", 'teamA' : G1[0], 'teamB' : G2[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : '12', 'date' : "16 juin 2020", 'time' : "21:00", 'teamA' : G3[0], 'teamB' : G4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : '23', 'date' : "20 juin 2020", 'time' : "15:00", 'teamA' : G1[0], 'teamB' : G3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : '24', 'date' : "20 juin 2020", 'time' : "18:00", 'teamA' : G2[0], 'teamB' : G4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : '35', 'date' : "24 juin 2020", 'time' : "21:00", 'teamA' : G4[0], 'teamB' : G1[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : '36', 'date' : "24 juin 2020", 'time' : "21:00", 'teamA' : G2[0], 'teamB' : G3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : '11', 'date' : "16 juin 2020", 'time' : "18:00", 'teamA' : G1[0], 'teamB' : G2[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : '12', 'date' : "16 juin 2020", 'time' : "21:00", 'teamA' : G3[0], 'teamB' : G4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : '23', 'date' : "20 juin 2020", 'time' : "15:00", 'teamA' : G1[0], 'teamB' : G3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : '24', 'date' : "20 juin 2020", 'time' : "18:00", 'teamA' : G2[0], 'teamB' : G4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : '35', 'date' : "24 juin 2020", 'time' : "21:00", 'teamA' : G4[0], 'teamB' : G1[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe G', 'MatchID' : '36', 'date' : "24 juin 2020", 'time' : "21:00", 'teamA' : G2[0], 'teamB' : G3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : '11', 'date' : "16 juin 2020", 'time' : "18:00", 'teamA' : H1[0], 'teamB' : H2[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : '12', 'date' : "16 juin 2020", 'time' : "21:00", 'teamA' : H3[0], 'teamB' : H4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : '23', 'date' : "20 juin 2020", 'time' : "15:00", 'teamA' : H1[0], 'teamB' : H3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : '24', 'date' : "20 juin 2020", 'time' : "18:00", 'teamA' : H2[0], 'teamB' : H4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : '35', 'date' : "24 juin 2020", 'time' : "21:00", 'teamA' : H4[0], 'teamB' : H1[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : '36', 'date' : "24 juin 2020", 'time' : "21:00", 'teamA' : H2[0], 'teamB' : H3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : '11', 'date' : "16 juin 2020", 'time' : "18:00", 'teamA' : H1[0], 'teamB' : H2[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : '12', 'date' : "16 juin 2020", 'time' : "21:00", 'teamA' : H3[0], 'teamB' : H4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : '23', 'date' : "20 juin 2020", 'time' : "15:00", 'teamA' : H1[0], 'teamB' : H3[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : '24', 'date' : "20 juin 2020", 'time' : "18:00", 'teamA' : H2[0], 'teamB' : H4[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : '35', 'date' : "24 juin 2020", 'time' : "21:00", 'teamA' : H4[0], 'teamB' : H1[0], 'scoreA' : "", 'scoreB' : ""},
  {'group' : 'Groupe H', 'MatchID' : '36', 'date' : "24 juin 2020", 'time' : "21:00", 'teamA' : H2[0], 'teamB' : H3[0], 'scoreA' : "", 'scoreB' : ""}
];

let GroupArray = [
  ["rA1team", "rA2team", "rA3team", "rA4team", "rB1team", "rB2team", "rB3team", "rB4team", "rC1team", "rC2team", "rC3team", "rC4team", "rD1team", "rD2team", "rD3team", "rD4team", "rE1team", "rE2team", "rE3team", "rE4team", "rF1team", "rF2team", "rF3team", "rF4team"],
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
let teamB = document.querySelectorAll('.teamB');
teamB.forEach(function(teamB, index){
  teamB.textContent = matchArray[index]['teamB'];
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
  document.getElementById(GroupArray[0][i]).textContent = GroupArray[1][i];
}
