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

let canvasRectanglePlayer1 = document.getElementById('canvasRectanglePlayerOne')
let ctx;
if(canvasRectanglePlayer1.getContext) {
    ctx = canvasRectanglePlayer1.getContext('2d');
    ctx.rect(10,10,200,100);
    ctx.fillStyle = '#dc828c';
}else {
    document.write('Navigateur trop ancien pour afficher cet élément !')
}

/* Compteur Player 1 */

let compteurOne = document.getElementById('compteur__ONE')
let btnAdd = document.getElementById('addOne')

/* Stylisation du compteur */

$(compteurOne).css('color', '#dc828c')
$(compteurOne).css('font-size', '90px')

/* Je crée une fonction comptage pour dynamiser le compteur */

btnAdd.addEventListener('click', function() {
    compteurOne = 0;
    compteurOne++;
    document.getElementById("compteur__ONE").textContent = compteurOne;
})

/* btnAdd.addEventListener('click', function(btnAdd) {
    if(btnAdd.target.id == 'click'){
        return btnAdd    
    }
}); */

/* ======================================================== */

/* Compteur Player 2*/

let compteurTwo = document.getElementById('compteur__TWO')
let btnAddTWO = document.getElementById('addTwo')

/* Stylisation du compteur */

$(compteurTwo).css('color', '#dc828c')
$(compteurTwo).css('font-size', '90px')

btnAddTWO.addEventListener('click', function() {
    compteurTwo = 0;
    compteurTwo++;
    document.getElementById("compteur__TWO").textContent = compteurTwo;
})