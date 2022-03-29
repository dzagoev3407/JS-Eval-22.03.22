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
let namePlayer = 'Player 1'

/* Stylisation du compteur */

$(compteurOne).css('color', '#FF5C0F')
$(compteurOne).css('font-size', '34px')
$(compteurOne).css('margin-left', '340px')

/* Je crée une fonction comptage pour dynamiser le compteur */

compteurOne = 0;


btnAdd.addEventListener('click', function comptage() {
    for(compteurOne = 0 ; compteurOne < 10; compteurOne++) {
         let textCompteurOne = ('Nombre de points de ' + namePlayer + ' est ' + compteurOne + ' pts.')
         document.write(textCompteurOne.innerHTML = ('Nombre de points de ' + namePlayer + ' est ' + compteurOne + ' pts.'))
        } // Affiche le nombre de points du Player 1

    if(compteurOne == 9) {
        console.log('Player 1 a gagné la partie !')
    }else {
        console.log('Player 1 a perdu la partie !')
      }
    })

/* ======================================================== */

/* Compteur Player 2*/

let compteurTwo = document.getElementById('compteur__TWO')
let btnAddTWO = document.getElementById('addTwo')
let clicPts = document.getElementById('clicPts')
let namePlayerTwo = 'Player 2'

/* Stylisation du compteur */

$(compteurTwo).css('color', '#0017FF')
$(compteurTwo).css('font-size', '34px')
$(compteurTwo).css('margin-left', '178px')

let resultCompteurTwo = "";

btnAddTWO.addEventListener('click', function comptage() {
    for(compteurTwo = 0 ; compteurTwo < 10; compteurTwo++) {
        let textCompteurOne = ('Nombre de points de ' + namePlayerTwo + ' est ' + compteurTwo + ' pts.')
        document.write(textCompteurOne.innerHTML = ('Nombre de points de ' + namePlayerTwo + ' est ' + compteurTwo + ' pts.'))
        } // 

    if(compteurTwo == 9) {
        console.log('Player 2 a gagné la partie !')
    }else {
        console.log('Player 2 a perdu la partie !')
      } // Affiche le nombre de points du Player 2
    })

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
          textMessage.innerHTML = " Pas chanceux !";
      }
      else {
          textMessage.innerHTML = "";
      }
  
      listResultats.appendChild(ul);
  
      let face1 = document.createElement("img");
      face1.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/1024px-Dice-1-b.svg.png");
      let face2 = document.createElement("img");
      face2.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/2048px-Dice-2-b.svg.png");
      let face3 = document.createElement("img");
      face3.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuOeH6XZg5q5A93s6IfqRYCPxYi9g8ugO78Y6kn1Gmo8AMc4gTrgLCNY2oY9bPE8nt5R8&usqp=CAU");
      let face4 = document.createElement("img");
      face4.setAttribute("src","https://img1.freepng.fr/20180315/hpq/kisspng-dice-dominoes-bunco-clip-art-dice-face-5aaad1951c1d49.1818678715211442131152.jpg");
      let face5 = document.createElement("img");
      face5.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg");
      let face6 = document.createElement("img");
      face6.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/1024px-Dice-6-b.svg.png");
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

  /* BTN scroll vers le haut */

  let btnScroll = document.querySelector('.scrollBtn')

  btnScroll.addEventListener('click', () => {
      window.scrollTo({
          top: 100,
          left: 100,
          behavior: 'smooth'
      })
  })

  /*========================================================
     ======================================================= */