/* Je vérifie si jQuery est bien activé */

$(document).ready(function() {
    if(jQuery) {
        console.log('jQuery est bien activé !')
    }else {
        console.log('Il y\' a eu un problème avec l\'initialisation de jQuery !')
    }
})

/* Nouvelle partie init */ 
let btnNewGame = document.getElementById('btnNewGame')

btnNewGame.addEventListener('click', function() {
    alert('Vous allez commencer une nouvelle partie.') /* On affiche une alerte indiquant à notre utilisateur qu'une partie va recommencer */
    location.reload();
})

/* Compteur Player 1 */

let compteurOne = document.getElementById('compteur__ONE')
let btnAdd = document.getElementById('addOne')

/* Stylisation du compteur */

$(compteurOne).css('color', '#dc828c')
$(compteurOne).css('font-size', '34px')
$(compteurOne).css('margin-left', '340px')

/* Je crée une fonction comptage pour dynamiser le compteur */

compteurOne = 0;

btnAdd.addEventListener('click', function() {
  for(compteurOne = 0; compteurOne < 10; compteurOne++) {
      document.getElementById('compteur__ONE').innerHTML = 'Le joueur 1 a ' + compteurOne + ' points.'
  } // Quand on clique sur ce bouton on ajoute +1

  if(compteurOne === 10) {
      document.getElementById('compteur__ONE').innerHTML = 'Le joueur 1 a ' + compteurOne + ' points.'
      alert('Le joueur 1 a gagné la partie !') // Quand le joueur 1 a 10 points il gagne la partie.
  }else if(compteurOne !== 10) {
      document.getElementById('compteur__ONE').innerHTML = 'Le joueur 1 n\'a pas gagné la partie '
      alert('Le joueur 1 a perdu la partie') // Quand le joueur 1 a un nombre de points points différent de 10 il perd la partie.
  }
})

/* ======================================================== */

/* Compteur Player 2*/

let compteurTwo = document.getElementById('compteur__TWO')
let btnAddTWO = document.getElementById('addTwo')
let clicPts = document.getElementById('clicPts')

/* Stylisation du compteur */

$(compteurTwo).css('color', '#dc828c')
$(compteurTwo).css('font-size', '34px')
$(compteurTwo).css('margin-left', '178px')

compteurTwo = 0;

btnAddTWO.addEventListener('click', function comptage() {
    compteurTwo++;
    clicPts.textContent = comptage
})
   if(clicPts === 10) {
       alert('Le joueur 2 à gagné la partie !')
   }

  /* ============================
      Partie dé
    =============================
  */
  /* BTN lancer le dé */
   
  let btnLancer = document.getElementById("btnLancer");
  let listResultats = document.getElementById("listResultats");
  let textMessage = document.getElementById("textMessage");
  let ul = document.createElement("ul");
  let de = document.getElementById("des");
  
  let resultat = "";
  
  btnLancer.addEventListener("click",lancer);
  
  function lancer(){
      resultat = Math.floor((Math.random() * de.value) + 1);
      console.log(resultat);
      console.log(de.value);
      if (resultat == 1) {
          textMessage.innerHTML = " Pas de chance ! Ahahaha !";
      }
      else {
          textMessage.innerHTML = "";
      }
  
      listResultats.appendChild(ul);
  
      let face1 = document.createElement("img");
      face1.setAttribute("src","https://cdn.pixabay.com/photo/2013/07/12/17/39/dice-152173_960_720.png");
      let face2 = document.createElement("img");
      face2.setAttribute("src","https://cdn.pixabay.com/photo/2013/07/12/17/39/dice-152174_960_720.png");
      let face3 = document.createElement("img");
      face3.setAttribute("src","https://cdn.pixabay.com/photo/2013/07/12/17/39/dice-152175_960_720.png");
      let face4 = document.createElement("img");
      face4.setAttribute("src","https://cdn.pixabay.com/photo/2013/07/12/17/39/dice-152176_960_720.png");
      let face5 = document.createElement("img");
      face5.setAttribute("src","https://cdn.pixabay.com/photo/2013/07/12/17/39/dice-152177_960_720.png");
      let face6 = document.createElement("img");
      face6.setAttribute("src","https://cdn.pixabay.com/photo/2013/07/12/17/39/dice-152178_960_720.png");
      let newItem = document.createElement("li");
  
      switch (resultat) {
          case 1:
              resultat = face1;
              newItem.appendChild(resultat);
              break;
          case 2:
              resultat = face2;
              newItem.appendChild(resultat);
              break;
          case 3:
              resultat = face3;
              newItem.appendChild(resultat);
              break;
          case 4:
              resultat = face4;
              newItem.appendChild(resultat);
              break;
          case 5:
              resultat = face5;
              newItem.appendChild(resultat);
              break;
          case 6:
              resultat = face6;
              newItem.appendChild(resultat);
              break;
          default:
              newItem.innerHTML = resultat;
      }
  
      console.log(resultat);
  
      
      ul.insertBefore(newItem, ul.childNodes[0]);

    /* jQuery dé stylization */

    $(face1).css('width', '50px').css('heigth', '50px').css('ul', 'none')
    $(face2).css('width', '50px').css('heigth', '50px').css('ul', 'none')
    $(face3).css('width', '50px').css('heigth', '50px').css('ul', 'none')
    $(face4).css('width', '50px').css('heigth', '50px').css('ul', 'none')
    $(face5).css('width', '50px').css('heigth', '50px').css('ul', 'none')
    $(face6).css('width', '50px').css('heigth', '50px').css('ul', 'none')
  }
