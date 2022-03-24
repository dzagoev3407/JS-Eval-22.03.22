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

/* Canvas rectangle player 1 */

let canvas = document.getElementById('canvasRectanglePlayerOne');
let ctx = canvas.getContext('2d');

document.getElementById('canvasRectanglePlayerOne').innerHTML = 'Current';

ctx.fillStyle = 'rgb(220, 130, 140)'; 
ctx.fillRect(36, 55, 55, 25);

/* Compteur Player 1 */

let compteurOne = document.getElementById('compteur__ONE')
let btnAdd = document.getElementById('addOne')

/* Stylisation du compteur */

$(compteurOne).css('color', '#dc828c')
$(compteurOne).css('font-size', '65px')

/* Je crée une fonction comptage pour dynamiser le compteur */

compteurOne = 0;
let result = '';

btnAdd.addEventListener('click', function() {
  for(compteurOne = 0; compteurOne < 10; compteurOne++) {
      document.getElementById('compteur__ONE').innerHTML = 'Le joueur 1 a ' + compteurOne + ' points.'
  } // Quand on clique sur ce bouton on ajoute +1

  if(compteurOne === 10) {
      alert('Le joueur 1 a gagné la partie !') // Quand le joueur 1 a 10 points il gagne la partie.
  }else if(compteurOne !== 10) {
      alert('Le joueur 1 a perdu la partie') // Quand le joueur 1 a un nombre de points points différent de 10 il perd la partie.
  }
})

/* ======================================================== */

/* Canvas rectangle player 2 */

let canvasTwo = document.getElementById('canvasRectanglePlayerTwo');
let ctx__Two = canvas.getContext('2d');

document.getElementById('canvasRectanglePlayerTwo').innerHTML = 'Current';

ctx__Two.fillStyle = 'rgb(220, 130, 140)'; 
ctx__Two.fillRect(36, 55, 35, 25);

/* Compteur Player 2*/

let compteurTwo = document.getElementById('compteur__TWO')
let btnAddTWO = document.getElementById('addTwo')

/* Stylisation du compteur */

$(compteurTwo).css('color', '#dc828c')
$(compteurTwo).css('font-size', '65px')

btnAddTWO.addEventListener('click', function() {
    for(compteurTwo = 0; compteurTwo < 10; compteurTwo++) {
        document.getElementById('compteur__TWO').innerHTML = 'Le joueur 2 a ' + compteurOne + ' points.'
    } // Quand on clique sur ce bouton on ajoute +1
  
    if(compteurTwo === 10) {
        alert('Le joueur 2 a gagné la partie !') // Quand le joueur 2 a 10 points il gagne la partie.
    }else if(compteurTwo !== 10) {
        alert('Le joueur 2 a perdu la partie')  // Quand le joueur 2 a un nombre de points points différent de 10 il perd la partie.
    }
  })