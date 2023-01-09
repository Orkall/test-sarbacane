window.addEventListener("DOMContentLoaded", function () {
  let xhr = new XMLHttpRequest();

  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*ferme toutes les listes de saisie semi-automatique dans le document,
        sauf celui passé en argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i]) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  // tableau de valeurs vide
  var table = [];
  /*la fonction de autocomplete prend un argument,l'élément de champ de texte  :*/
  var currentFocus;
  /*exécuter la fonction lorsque quelqu'un écrit dans le champ de texte*/
  let siren = document.querySelector("#siren");
  siren.addEventListener("input", function (e) {
    table = [];
    var a,
      b,
      i,
      val = this.value;
    /*fermer toutes les listes déjà ouvertes de valeurs complétées automatiquement */
    closeAllLists(siren);
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

      response.unitesLegales;
      response.unitesLegales.forEach((liste) => {
        table.push(liste.siren);
      });

      currentFocus = -1;
      /*créer un élément DIV qui contiendra les éléments (valeurs):*/
      a = document.createElement("DIV");
      a.setAttribute("id", siren.id + "autocomplete-list");
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
          siren.value = this.getElementsByTagName("input")[0].value;
          /*ferme la liste des valeurs complétées automatiquement,
                            (ou toute autre liste ouverte de valeurs complétées automatiquement )*/
          closeAllLists();
        });
        a.appendChild(b);
      }
      /*ajoutez l'élément DIV en tant qu'enfant du conteneur de saisie semi-automatique*/
      siren.parentNode.appendChild(a);
    };
    xhr.send();
  });
  /*exécute une fonction appui sur une touche du clavier */
  siren.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*Si la touche fléchée vers le BAS est enfoncée,
            incrémente la variable currentFocus :*/
      currentFocus++;
      /*et rendre l'élément actuel plus visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //en haut
      /*Si la touche fléchée HAUT est enfoncée,
            diminue la variable currentFocus :*/
      currentFocus--;
      /*rend l'élément courant plus visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*Si la touche ENTRÉE est enfoncée, empêche la soumission du formulaire,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*simule un clic sur l'élément "actif*/
        if (x) x[currentFocus].click();
      }
    }
  });
  // tableau de valeurs vide
  var table = [];

  /*la fonction de autocomplete prend un argument,l'élément de champ de texte  :*/
  var currentFocus;
  /*exécuter la fonction lorsque quelqu'un écrit dans le champ de texte*/
  let territoire = document.querySelector("#ville");
  territoire.addEventListener("input", function (e) {
    table = [];
    var a,
      b,
      i,
      val = this.value;
    /*fermer toutes les listes déjà ouvertes de valeurs complétées automatiquement */
    closeAllLists(territoire);
    if (!(val && val.length > 2)) {
      return false;
    }
    xhr.open("GET", "https://geo.api.gouv.fr/communes?nom=" + val, true);
    xhr.onload = function (pe) {
      let response = JSON.parse(pe.currentTarget.responseText);
      for (i = 0; i < response.length && i < 3; i++) {
        table.push(response[i].nom);
      }

      currentFocus = -1;
      /*créer un élément DIV qui contiendra les éléments (valeurs):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
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
          territoire.value = this.getElementsByTagName("input")[0].value;
          /*ferme la liste des valeurs complétées automatiquement,
                    (ou toute autre liste ouverte de valeurs complétées automatiquement )*/
          closeAllLists();
        });
        a.appendChild(b);
      }
      /*ajoutez l'élément DIV en tant qu'enfant du conteneur de saisie semi-automatique*/
      territoire.parentNode.appendChild(a);
    };
    xhr.send();
  });
  /*exécute une fonction appui sur une touche du clavier */
  territoire.addEventListener("keydown", function (e) {
    var x = document.getElementById(e.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*Si la touche fléchée vers le BAS est enfoncée,
            incrémente la variable currentFocus :*/
      currentFocus++;
      /*et rendre l'élément actuel plus visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //en haut
      /*Si la touche fléchée HAUT est enfoncée,
            diminue la variable currentFocus :*/
      currentFocus--;
      /*rend l'élément courant plus visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*Si la touche ENTRÉE est enfoncée, empêche la soumission du formulaire,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*simule un clic sur l'élément "actif*/
        if (x) x[currentFocus].click();
      }
    }
  });

  // auto complete CODE  NAF
  let naf = document.querySelector("#naf");
  // naf.addEventListener("click", (e) => {
  const codeNaf = [];
  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/SocialGouv/codes-naf/master/index.json",
    true
  );
  xhr.onload = function (pe) {
    let response = JSON.parse(pe.currentTarget.responseText);

    for (i = 0; i < response.length; i++) {
      codeNaf.push(response[i].id);
    }
  };
  xhr.send();
  // tableau de valeurs vide
  var table = [];
  /*la fonction de autocomplete prend un argument,l'élément de champ de texte  :*/
  var currentFocus;
  /*exécuter la fonction lorsque quelqu'un écrit dans le champ de texte*/
  naf.addEventListener("input", function (e) {
    table = [];
    var a,
      b,
      i,
      val = this.value;
    /*fermer toutes les listes déjà ouvertes de valeurs complétées automatiquement */
    closeAllLists(naf);
    if (!(val && val.length > 1)) {
      return false;
    }
    currentFocus = -1;
    /*créer un élément DIV qui contiendra les éléments (valeurs):*/
    a = document.createElement("DIV");
    a.setAttribute("id", naf.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    for (i = 0; i < codeNaf.length && table.length < 3; i++) {
      if (codeNaf[i].startsWith(val)) {
        table.push(codeNaf[i]);
      }
    }
    // codeNaf.forEach((code) => {
    //   if (code.startsWith(val)) {
    //     table.push(code);
    //   }
    // });
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
        naf.value = this.getElementsByTagName("input")[0].value;
        /*ferme la liste des valeurs complétées automatiquement,
                     (ou toute autre liste ouverte de valeurs complétées automatiquement )*/
        closeAllLists();
      });
      a.appendChild(b);
    }
    /*ajoutez l'élément DIV en tant qu'enfant du conteneur de saisie semi-automatique*/
    naf.parentNode.appendChild(a);
  });
  /*exécute une fonction appui sur une touche du clavier */
  naf.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*Si la touche fléchée vers le BAS est enfoncée,
            incrémente la variable currentFocus :*/
      currentFocus++;
      /*et rendre l'élément actuel plus visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //en haut
      /*Si la touche fléchée HAUT est enfoncée,
            diminue la variable currentFocus :*/
      currentFocus--;
      /*rend l'élément courant plus visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*Si la touche ENTRÉE est enfoncée, empêche la soumission du formulaire,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*simule un clic sur l'élément "actif*/
        if (x) x[currentFocus].click();
      }
    }
  });
  /*exécute une fonction lorsque quelqu'un clique dans le document*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
});
