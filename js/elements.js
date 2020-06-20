const GroupEl = ["Groupe A", "Groupe B", "Groupe C", "Groupe D", "Groupe E", "Groupe F", "Groupe G", "Groupe H"
];


// Create elements 'group'
// let labelRef = document.getElementById('GroupeA');
let firstNode;
let newNode;
let rootNode;

rootNode = document.getElementById('navelement');
firstNode = document.getElementById('group');
newNode = firstNode.cloneNode(true);
rootNode.appendChild(newNode);

let children = newNode.childNodes;
for (var i = 0; i < children.length; i++) {
    // faire quelque chose avec chaque enfant[i]
    // NOTE: La liste est en ligne, l'ajout ou la suppression des enfants changera la liste
    children[i].id = GroupEl[1];
    children[i].textContent = GroupEl[1];
    children[i].value = GroupEl[1];
    children[i].checked = false;
    children[i].htmlFor = GroupEl[1];

  }

// let newLabel;
// let labelText;
// let navEl = labelRef.parentNode;
// for (let i = 0; i < GroupEl.length; i++){
//
//   labelRef = document.getElementById('LabelGroupStage');
//   navEl = labelRef.parentNode;
//
//   // Create Label for each group
//   newLabel = document.createElement("label");
//   labelText = document.createTextNode(GroupEl[i]);
//   newLabel.appendChild(labelText);
//   newLabel.htmlFor = GroupEl[i];
//   navEl.insertBefore(newLabel, labelRef);

  // labelRef = document.getElementById('LabelGroupStage');
  // navEl = labelRef.parentNode;
  //
  // // Create Label for each group
  // newLabel = document.createElement("label");
  // labelText = document.createTextNode(GroupEl[i]);
  // newLabel.appendChild(labelText);
  // newLabel.htmlFor = GroupEl[i];
  // navEl.insertBefore(newLabel, labelRef);

  // Create input for each label
  // newLabel = document.createElement("input");
  // labelText = document.createTextNode(GroupEl[i]);
  // newLabel.appendChild(labelText);
  // newLabel.value = GroupEl[i];
  // newLabel.type = 'radio';
  // newLabel.id = GroupEl[i];
  // newLabel.name = 'Group';
  // if (i == 0){
  //   newLabel.checked = true;
  // }
  // navEl.insertBefore(newLabel, labelRef);

  // Create Table for each input
  // newLabel = document.createElement("section");
  // labelText = document.createTextNode(GroupEl[i]);
  // newLabel.appendChild(labelText);
  // navEl.insertBefore(newLabel, labelRef);
  // newLabel.id = "Table " + GroupEl[i];
  // newLabel.class = 'Group';
  //
  // labelRef = document.getElementById("Table " + GroupEl[i]);
  // navEl = labelRef.parentNode;
  // newLabel = document.createElement("table");
  // labelText = document.createTextNode(GroupEl[i]);
  // newLabel.appendChild(labelText);
  // navEl.insertBefore(newLabel, labelRef);
  // newLabel.id = GroupEl[i];

// }

// let navEl = document.querySelectorAll('.matchID');
// matchID.forEach(function(matchID, index){
//   matchID.textContent = matchArray[index]['MatchID'];
// })

//
// let navEl = document.getElementById('GroupStage');
// let labelEl = document.createElement('label');
// labelEl.textContent = GroupEl[0];
// let inputEl = document.createElement('input');
// inputEl.type = 'radio';
// inputEl.name = "Group";
// inputEl.id = GroupEl[0];
// inputEl.value = GroupEl[0];
// inputEl.checked = true;
