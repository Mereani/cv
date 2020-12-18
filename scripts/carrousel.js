$(document).ready(function() {

  let $carrousel = $('#carrousel'), //cibler la div carrousel
 	  $img = $('#carrousel img'), //cibler les images du carrousel
    IndexImg = $img.length - 1, //définir le dernier élément 
    i = 0; //mettre compteur d'image

  function affiche() { //fonction d'affichage des images
    $img.css('display', 'none'); //on cache les images
    $currentImg = $img.eq(i); //on définit une image
    $currentImg.css('display', 'block'); // et on l'affiche dans le carrousel
  }

  
  function newImage() { //remplacer une ancienne image par une nouvelle

    if (i < IndexImg) { // si "i" est inférieur à l'IndexImg
      i++; //on l'incrémente

    } else { //sinon, on mets la première image 
      i = 0;
    }
    affiche(); //affiche image
  }

  function start() { //lancement du carrousel automatique
    setInterval(newImage, 2000); //attendre toutes les 2 secondes pour que les img changent automatiquement
  }

  affiche(); //on affiche la premiere image IMPORTANT, sinon on se retrouve avec les trois img en même temps

  $('#prev').click(function() { 
    if (i > 0) { // si "i est supérieur à l'IndexImg
      i--; // on décremente

    } else { 
      i = IndexImg; 
    }
    affiche(); //affiche image
  });

  $('#next').click(function() {
    if (i < IndexImg) { // si "i" est inférieur à l'IndexImg
      i++; // on l'incrémente

    } else { // sinon, le mettre à la première image pour continuer la boucle
      i = 0;
    }
    affiche(); //affiche image
  });

  start(); //lance le carrousel automatique dès que la page est ouverte

});
