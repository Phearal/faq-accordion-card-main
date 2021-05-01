let acc = document.getElementsByClassName("accordion"); // On va chercher les éléments possédants la classe "accordion" -> retourne un array

for (i = 0; i < acc.length; i++) { // On créé une boucle FOR 
  acc[i].addEventListener("click", function() { // On détete le click sur l'élément n°i de l'array acc
    this.classList.toggle("active"); // On ajoute la class "active" à l'élément cliqué si il ne l'a pas, on l'enlève si il l'a
    let panel = this.nextElementSibling; // On va chercher la balise qui suit le bouton (la div) qu'on assigne à la variable panel
    let fleche = this.firstElementChild; // On va chercher le 1er élément enfant du bouton (la SVG) qu'on assigne à la variable fleche
    if (panel.style.maxHeight) { // Si l'élément panel possède une maxHeight...
      panel.style.maxHeight = null; // On réduit sa maxHeight à 0 pour qu'il disparaisse
      fleche.style.transform = "rotate(0deg)"; // On tourne la flèche vers le haut
    } else { // Sinon...
      panel.style.maxHeight = panel.scrollHeight + "px"; // On assigne sa scrollHeight à sa maxHeight pour qu'il apparaisse
      fleche.style.transform = "rotate(180deg)"; // On tourne la flèche vers le bas
    }
  });
}

