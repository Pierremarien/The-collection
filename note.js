let article = document.querySelector("article");

collection.forEach((movie) => {
  let section = document.createElement("section");
  section.innerHTML = `<div class = "content"> 
  <figure> <img src= ${movie.picture} > </figure> 
  <span class="genre" > ${movie.genre} </span> 
  <span class="titre"> ${movie.name} </span> 
  <span class="info"> Réaliseur: ${movie.director} </span> 
  <span class="info"> Année de sortie: ${movie.releaseYear} </span> 
  <span class="info"> Casting: ${movie.cast}</span> 
  </div> 
  <div class="button"><img class="trash" src="assets/img/delete.png"></div>`;

  article.appendChild(section);
  section.setAttribute("class", "card");
});

let boutonsSupprimer = document.querySelectorAll(".trash");
boutonsSupprimer.forEach((bouton) => {
  bouton.addEventListener("click", function () {
    let parent = bouton.parentNode.parentNode;
    parent.remove();
  });
});