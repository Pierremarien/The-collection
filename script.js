const collection = [
    {
        name: "Dune",
        director: "Denis Villeneuve",
        releaseYear: 2021,
        picture: "assets/img/Dune.jpg",
        genre: ["Science-fiction"],
        cast: ["Timothée Chalamet",
            " Rebecca Ferguson",
            " Oscar Isaac",
            " Zendaya",
            " Josh Brolin",
            " Jason Momoa"],
    },
    {
        name: "Pulp Fiction",
        director: "Quentin Tarantino",
        releaseYear: 1994,
        picture: "assets/img/pulp-fiction.jpg",
        genre: ["Crime", " Drama"],
        cast: [
          "John Travolta",
          " Samuel L Jackson",
          " Uma Thurman",
          " Amanda Plummer",
        ],
      },
      {
        name: "Fight Club",
        director: "David Fincher",
        releaseYear: 1999,
        picture: "assets/img/fight-club.jpg",
        genre: ["Thriller psychologique"],
        cast: [
          "Brad Pitt",
          " Edward Norton",
          " Helena Bonham Carter",
        ],
      },
      {
        name: "Le Cerlce des Poètes Disparus",
        director: "Peter Weir",
        releaseYear: 1989,
        picture: "assets/img/cercle-poete.jpg",
        genre: ["Drama"],
        cast: [
          "Robin Williams",
          " Robert Sean Leonard",
          " Ethan Hawke",
        ],
      },
      {
        name: "La Haine",
        director: "Mathieu Kassowitz",
        releaseYear: 1995,
        picture: "assets/img/lahaine.jpg",
        genre: ["Drama"],
        cast: [
          "Vincent Cassel",
          " Hubert Koundé",
          " Saïd Taghmaoui",
          " Karim Belkhadra",
          " Marc Duret"
        ],
      },
      {
        name: "La 25eme Heure",
        director: "Spike Lee",
        releaseYear: 2002,
        picture: "assets/img/la25eheure.jpg",
        genre: ["Crime", " Drama"],
        cast: [
          "Edward Norton",
          " Philip Seymour Hoffman",
          " Barry Pepper",
          " Rosario Dawson",
          " Brian Cox"
        ],
      },
      {
        name: "Le Seigneur des Anneaux",
        director: "Peter Jackson",
        releaseYear: 2001,
        picture: "assets/img/SeigneurAnneau.jpg",
        genre: ["Aventure", " Drama"],
        cast: [
          "Elijah Wood",
          " Ian Mckellen",
          " Orlando Bloom",
        ],
      },
      {
        name: "Trainspotting",
        director: "Danny Boyle",
        releaseYear: 1996,
        picture: "assets/img/Trainspotting.jpg",
        genre: ["Drama"],
        cast: [
          "Ewan Mcgregor",
          " Ewen Bremner",
          " Johnny Lee Miller",
        ],
      },
      {
        name: "The Big Lebowski",
        director: "Joel Coen",
        releaseYear: 1998,
        picture: "assets/img/the_big_lebowski.jpg",
        genre: ["Comedie", " Policier"],
        cast: [
          "Jef gif Bridges",
          " John Goodman",
          " Julianne Moore",
          " Steve Buscemi",
        ],
      },
      {
        name: "Orange Mecanique",
        director: "Stanley Kubrick",
        releaseYear: 1971,
        picture: "assets/img/orange.jpg",
        genre: ["Crime", " Drama"],
        cast: [
          "Malcolm McDowell",
          " Patrick Magee",
          " Michael Bates",
        ],
      },
]

let article = document.querySelector("article");

const genreButtons = document.querySelectorAll(".genre-button");

function filterMoviesByGenre(genre) {
  const filteredMovies = collection.filter(movie => {
    return genre === "All" || movie.genre.some(item => item.includes(genre));
  });

  article.innerHTML = "";

  filteredMovies.forEach((movie) => {
    let section = document.createElement("section");
    section.innerHTML = `<div class="content">
    <figure> <img src=${movie.picture}> </figure>
    <span class="genre"> ${movie.genre} </span>
    <h2 class="titre"> ${movie.name} </h2>
    <p class="info"> Réaliseur: ${movie.director} </p>
    <p class="info"> Année de sortie: ${movie.releaseYear} </p>
    <p class="info"> Casting: ${movie.cast}</p>
    </div>
    <div class="button"><img class="trash" src="assets/img/delete.png"></div>`;

    article.appendChild(section);
    section.setAttribute("class", "card");
  });

  let boutonsSupprimer = document.querySelectorAll(".trash");
  boutonsSupprimer.forEach((bouton) => {
    bouton.addEventListener("click", function () {
      let parent = bouton.parentNode.parentNode;
      let mySound = new Audio('assets/helicopter.mp3');
      mySound.volume = 0.2;

      let stopSound = new Audio('assets/stop.mp3');
      stopSound.volume = 0.2;

      let heliSound = new Audio('assets/helicoptercut.mp3');
      heliSound.volume = 0.4;

      let lipsSound = new Audio('assets/helicolips.wav');
      lipsSound.volume = 0.2;

      mySound.play()
      parent.style.animation = "rotateAnimation 4s linear both";

      setTimeout(() => {
        parent.style.animation = "helicoAnimation 4s linear both";
        heliSound.play();
      }, 4000);

      setTimeout(() => {
        parent.style.animation = "endAnimation 3s linear";
        lipsSound.play();
      }, 8000)

      setTimeout(() => {
        parent.style.animation = "tooMuchAnimation 3s linear";
        lipsSound.play();
      }, 11000)

      setTimeout(() => {
        parent.style.animation = "translateAnimation 1.6s linear forwards";
        stopSound.play();
      }, 14000);

      setTimeout(() => {
        parent.remove();
      }, 15600);
    });
  });
}

genreButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const selectedGenre = button.getAttribute("data-genre");
    filterMoviesByGenre(selectedGenre);
  });
});

filterMoviesByGenre("All");