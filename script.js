//  Ex 1: Permutation de deux nombres
function permuter(){
  x=document.form.a.value;
  document.form.a.value=document.form.b.value;
  document.form.b.value=x;
}

// Ex2: 
function main() {
  let RESULTS = document.getElementById("RESULTS");
  let j = document.getElementById("day").value;
  let m = document.getElementById("month").value;
  let a = document.getElementById("year").value;
  var bissextille = true;
  var cas1;
  var cas2;
  var cas3;
  var cas4;
  bissextille = a % 400 != 0 && a % 4 != 0 && a % 100 == 0;
  cas1 = a > 0 && (m === 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12)  && (j >= 1 && j <= 31);
  cas2 = a > 0 && (m == 4 || m == 6 || m == 9 || m == 11) && (j >= 1 && j <= 30);
  cas3 = a > 0 && m == 2 && !bissextille && (j >= 1 && j <= 28);
  cas4 = a > 0 && m == 2 && bissextille && (j >= 1 && j <= 29);
      if (cas1 || cas2 || cas3 || cas4) {
          RESULTS.innerHTML="est valide"
      }
      else {
          RESULTS.innerHTML="est in valide"
      }
  }



// ex3 table de multiplication<
function table() {
  var num = parseFloat(document.getElementById("num").value);
 var res = "";
  // var res = ;

  for (let i = 0; i <= 10; i++) {
     res = res +"<p>"+i+" "+ " * "+" "+ num +" "+" = "+" "+i *+ " "+num+" "+"</p>";
    // var p = document.createElement("p");

    document.getElementById("res").innerHTML = res;
  }
}

//EXE4: Devine le nombre

var randomNr = Math.floor(Math.random() *100) + 1 ;
                        const hestorique = document.getElementById('top');
                        const resultat = document.getElementById('resultat');
                        const essayer = document.getElementById('essayer');
                        const button = document.getElementById('button');
                        var geussNr = 1
            
                        function tester(){
                            var Nruser = Number(essayer.value);
                            if (geussNr === 1){
                                hestorique.textContent = 'vos teste:  '  ;
                            }
                            hestorique.textContent += Nruser + ' ';
                            if (Nruser === randomNr)  resultat.textContent = 'bravo '
                            else if (geussNr === 10)   resultat.textContent = 'le bon Nr : ' +randomNr;button.disable=true;
                            geussNr++
                            essayer.value = '';
                        }

  // EX5: Losange en étoiles
  
  function pernumb(){
    let invalid = document.getElementById('invalid');
    let n = document.getElementById('n').value;
if(n % 2 == 0 ){
invalid.innerHTML="est in valide"
}
else{
    lons()
}

function lons(){
    let n = document.getElementById('n').value
let string = "";
// Upside pyramid
for (let i = 1; i <= n - 2; i++) {
// printing spaces
for (let j = n; j > i; j--) {
string += " ";
}
// printing star
for (let k = 0; k < i * 2 - 1; k++) {
string += "";
}
string += "\n";
}
// downside pyramid
for (let i = 1; i <= n  ; i++) {
// printing spaces
for (let j = 0; j < i; j++) {
string += " ";
}
// printing star
for (let k = (n - i) * 2 - 1; k > 0; k--) {
string += "*";
}
string += "\n";
}

document.getElementById('star').innerHTML= (`<pre>${string}</pre>`);
}
}

// Ex6:calculatrice

function calc() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var oper = document.getElementById("operators").value;

  if (oper === "+") {
    document.getElementById("result").value = num1 + num2;
  }

  if (oper === "-") {
    document.getElementById("result").value = num1 - num2;
  }

  if (oper === "/") {
    document.getElementById("result").value = num1 / num2;
  }

  if (oper === "X") {
    document.getElementById("result").value = num1 * num2;
  }
  console.log(num1);
}

// Ex7: Recherche et suppression dans une chaine
        // Recherche  dans une chaine
function filtered() {
  var phrase = document.getElementById("phrase").value;
  var mot = document.getElementById("mot").value;
  var showResult = document.getElementById("showResult");

  if (phrase.includes(mot)) {
    return (showResult.innerHTML =
      "bravo :" + " " + mot + "  " + "est se trouve dans la phrase");
  } else {
    showResult.innerHTML = "Erreur aucun resultat ";
  }
}


        // Suppression dans une chaine

function deleted() {
  var phrase = document.getElementById("phrase").value;
  var mot = document.getElementById("mot").value;

  phrase.replace(mot, "");
  return (document.getElementById("showResult").innerHTML = phrase.replace(mot, ""));
}

// Ex8: Compter le nombre de voyelles


function compteVoyelles() {
  let inputText = document.getElementById("textInput").value;
  let res = document.getElementById("showVoyelle");
  counter = 0;
  for (i = 0; i <= inputText.length - 1; i++) {
    if (
      inputText.charAt(i) == "a" ||
      inputText.charAt(i) == "e" ||
      inputText.charAt(i) == "i" ||
      inputText.charAt(i) == "o" ||
      inputText.charAt(i) == "y"
    ) {
      counter++;
    }
  }
  return (res.innerHTML =
    "Votre phrase contient " + "  " + counter + "" + " de voyelles");
  
}

// Ex9: Tri d’un tableau

function addTable() {
  let row = document.getElementById('row').value;

  for (let i = 1; i <= row; i++) {
    let addInput = document.createElement("input");
    addInput.type = "text";
    addInput.name = "unsorteddNumbers[]";
    addInput.size = 1;
    document.getElementById("table").appendChild(addInput);
  }
}

function bubleSort(inputNodes) {
  let values = [];

  for (let i = 0; i < inputNodes.length; i++) {
    values.push(inputNodes[i].value);
  }

  for (let i = 0; i < values.length; i++) {
    for (j = i + 1; j < values.length; j++) {
      if (values[i] > values[j]) {
        temp = values[i];
        values[i] = values[j];
        values[j] = temp;
      }
    }
  }

  return values;
}

function trie() {
 

  let sortedValues = bubleSort( document.getElementsByName("unsorteddNumbers[]")
  );

  sortedValues.forEach(function (inputValue) {
    let newInput = document.createElement("input");
    newInput.type = "text";
    newInput.size = 1;
    newInput.name = "sorteddNumbers[]";
    newInput.value = inputValue;

    document.getElementById("table2").appendChild(newInput);
  });
}

// Ex 10: Recherche dans un tableau

// Creer le Tableau

function AddTable() {
    let row = document.getElementById('Row').value;
  
    for (let i = 1; i <= row; i++) {
      let addInput = document.createElement("input");
      addInput.type = "text";
      addInput.name = "unsorteddNumbers[]";
      addInput.size = 1;
      document.getElementById("Table").appendChild(addInput);
    }
  }
//   chercher dans le Tableau
function Filtered() {

    let inputValue = document.getElementById("search-value").value;
    let sortedValues = document.getElementsByName("unsorteddNumbers[]");
    let founded = false;
    sortedValues.forEach(function(element) {

    if(element.value == inputValue) {
    founded = true;

    }
    });

    if(founded) {
document.getElementById('rslt').innerHTML= `your search is found: ${inputValue} `
    } else {

document.getElementById('rslt').innerHTML= `the value  ${inputValue} not found`

    }

   
}
