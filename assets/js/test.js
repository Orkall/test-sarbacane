
  var countries = [];
  function autocomplete(inp) {
    /*la fonction de autocomplete prend un argument,l'élément de champ de texte  :*/
    var currentFocus;
    /*exécuter la fonction lorsque quelqu'un écrit dans le champ de texte*/
    inp.addEventListener("input", function (e) {
      countries = [];
      var a,
        b,
        i,
        val = this.value;
      /*fermer toutes les listes déjà ouvertes de valeurs complétées automatiquement */
      closeAllLists();
  if (!(val && val.length > 2 && val.length < 9)) {
    return false;
  }
  xhr.open(
    "GET",
    "https://api.insee.fr/entreprises/sirene/V3/siren?nombre=3&q=siren:" +
      val +
      "*",
    true
  );
  xhr.setRequestHeader(
    "Authorization",
    "Bearer " + "63661f17-97dd-3b77-9976-823d15282a19"
  );

  xhr.onload = function (pe) {
    let response = JSON.parse(pe.currentTarget.responseText);
    console.log(response.unitesLegales);
    response.unitesLegales;
    response.unitesLegales.forEach((liste) => {
      table.push(liste.siren);
    });

    currentFocus = -1;
    /*créer un élément DIV qui contiendra les éléments (valeurs):*/
    a = document.createElement("DIV");
    a.setAttribute("id", inp.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");

    /* pour chaque élément du tableau*/
    for (i = 0; i < table.length; i++) {
      /*créer un élément DIV pour chaque élément correspondant:*/
      b = document.createElement("DIV");
      /*mets ville correspondantes en gras:*/
      b.innerHTML = "<strong>" + table[i].substr(0, val.length) + "</strong>";
      b.innerHTML += table[i].substr(val.length);
      /*insére un champ de saisie qui contiendra la valeur de l'élément de tableau actuel */
      b.innerHTML += "<input type='hidden' value='" + table[i] + "'>";
      /*exécute une fonction lorsque quelqu'un clique sur la valeur de l'élément (élément DIV) :*/
      b.addEventListener("click", function (e) {
        /*insére la valeur du champ de texte de saisie*/
        inp.value = this.getElementsByTagName("input")[0].value;
        /*ferme la liste des valeurs complétées automatiquement,
                    (ou toute autre liste ouverte de valeurs complétées automatiquement )*/
        closeAllLists();
      });
      a.appendChild(b);
    }
    /*ajoutez l'élément DIV en tant qu'enfant du conteneur de saisie semi-automatique*/
    inp.parentNode.appendChild(a);
  };
  xhr.send();


// if (!(val && val.length > 2)) {
//   return false;
// }
// xhr.open("GET", "https://geo.api.gouv.fr/communes?nom=" + val, true);
// xhr.onload = function (pe) {
//   let response = JSON.parse(pe.currentTarget.responseText);
//   response.forEach((ville) => {
//     table.push(ville.nom);
//   });
//   currentFocus = -1;
//   /*créer un élément DIV qui contiendra les éléments (valeurs):*/
//   a = document.createElement("DIV");
//   a.setAttribute("id", inp.id + "autocomplete-list");
//   a.setAttribute("class", "autocomplete-items");

//   /* pour chaque élément du tableau*/
//   for (i = 0; i < table.length; i++) {
//     /*créer un élément DIV pour chaque élément correspondant:*/
//     b = document.createElement("DIV");
//     /*mets ville correspondantes en gras:*/
//     b.innerHTML = "<strong>" + table[i].substr(0, val.length) + "</strong>";
//     b.innerHTML += table[i].substr(val.length);
//     /*insére un champ de saisie qui contiendra la valeur de l'élément de tableau actuel */
//     b.innerHTML += "<input type='hidden' value='" + table[i] + "'>";
//     /*exécute une fonction lorsque quelqu'un clique sur la valeur de l'élément (élément DIV) :*/
//     b.addEventListener("click", function (e) {
//       /*insére la valeur du champ de texte de saisie*/
//       inp.value = this.getElementsByTagName("input")[0].value;
//       /*ferme la liste des valeurs complétées automatiquement,
//                       (ou toute autre liste ouverte de valeurs complétées automatiquement )*/
//       closeAllLists();
//     });
//     a.appendChild(b);
//   }
//   /*ajoutez l'élément DIV en tant qu'enfant du conteneur de saisie semi-automatique*/
//   inp.parentNode.appendChild(a);
// };
// xhr.send();
