const LINE_NB = 3;
const TITLE_LINE = "Le Grand Pari des champions";
const FILE_NAME = 'LeGrandPariDesChampions_Prono_';

function submit_form(){
  var csv = TITLE_LINE + "\n"; // Title line
  // Create header: Groupe matchs
  for (let i = 0; i < FormComplete.length; i++){
    csv += FormComplete[i];
    csv += ',';
  }
  // Create header: Teams and checkbox status from Round of 16 to Finale
  for (let i = 0; i < ClickToCsvTeam.length; i++){
    csv += ClickToCsvTeam[i];
    csv += ',';
    csv += ClickToCsvCheckbox[i];
    csv += ',';
  }
  csv += "\n";

  // Create data: scores for groups
  for (let i = 0; i < FormComplete.length; i++){
    csv += document.getElementById(FormComplete[i]).value;
    csv += ',';
  }
  // Create data: Teams qualified and checkbox status for Round of 16 to final
  for (let i = 0; i < ClickToCsvTeam.length; i++){
    csv += document.getElementById(ClickToCsvTeam[i]).textContent;
    csv += ',';
    csv += document.getElementById(ClickToCsvCheckbox[i]).checked;
    csv += ',';
  }
  // csv += "\n";

  let file_name = FILE_NAME + document.getElementById('name').value + '.csv'
  // console.log(csv);
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  hiddenElement.target = '_blank';
  hiddenElement.download = file_name;
  hiddenElement.click();

  // Send email
  //window.open('mailto:gleseigneur@gmail.com?subject="Le Grand Pari 9"');
}

function read_csv_raw(textin, raw_idx){
  let i = 0;
  let j = 0;
  let textout = "";
  // Go to index associated to raw_nb
  for (let k = 0; k < raw_idx; k++){
    while ((i < textin.length) && (textin[i] != '\n')){
      i++;
    }
    if (i == textin.length){
      return textout;
    }
    if (textin[i] == '\n'){
      i++;
    }
  }

  while((i < textin.length) && (textin[i] != '\n')){
    textout += textin[i];
    i++;
  }
  return textout;
}

function csv_string_to_table(string){
  let i = 0;
  let j = 0;
  let outtable = [""];
  while (i < string.length){
    if (string[i] != ",") {
      outtable[j] += string[i];
    } else {
      j++;
      outtable.push("");
    }
    i++;
  }
  outtable.pop();
  return outtable;
}

function load_form(event){
  var input = event.target;
  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    // Read LeGrandPari ID
    let line = ["sample text"];
    let line_nb = 0;
    let header = "";
    let scores = "";
    line[line_nb] = read_csv_raw(text, line_nb);
    while (line[line_nb] != "") {
      line_nb++;
      line[line_nb] = read_csv_raw(text, line_nb);
    }
    // Check if file has 3 lines (expected data) + 1 ""
    if (line.length != LINE_NB + 1){
      alert("Wrong file")
      return;
    }
    // Check if first line is the title line
    if (line[0] != TITLE_LINE){
      alert("Wrong file")
      return;
    }
    // Slice header line into a table
    header = csv_string_to_table(line[1]);
    scores = csv_string_to_table(line[2]);
    // Fill Element ID with loaded data: scores for all groups (and name and email and stricker)
    for (let i = 0; i < FormComplete.length; i++){
      document.getElementById(header[i]).value = scores[i];
    }
    // Fill Round of 16 data (text and checkboxes) to finale
    for (let i = FormComplete.length; i < header.length; i+=2){
      document.getElementById(header[i]).textContent = scores[i];
      if (scores[i+1] == 'true'){
        document.getElementById(header[i+1]).checked = 'true';
      }
    }

    // Update group ranking and Rounds of x teams
    logKey();
  };

  reader.readAsText(input.files[0]);
  };
