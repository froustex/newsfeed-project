/**************************************/
// Bouton menu
function buttonClick() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
/**************************************/
// Search barre
function search() {
  // Récupère la valeur saisie dans la barre de recherche
  const searchValue = document.getElementById("searchInput").value;
  console.log("Search Value:", searchValue);
}
/**************************************/
// Modifier pohoto de profil

function loadImage(event) {
  const input = event.target;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const image = document.querySelector(".profile_picture");
      document.querySelector("#nav_picture").src = event.target.result;
      image.src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

/**************************************/
// News Articles Functions //
const buttonNewFeedBox = document.querySelector(".add-new-feed-box");
buttonNewFeedBox.addEventListener("click", () => {
  const containerFeed = document.querySelector(".all-feeds");
  const sectionFeed = document.querySelector(".feed");
  const newFeed = sectionFeed.cloneNode(true);
  containerFeed.appendChild(newFeed);
});

const likeIcon = document.querySelector(".like-icon");

likeIcon.addEventListener("click", function (event) {
  likeIcon.classList.toggle("active");
});

/**************************************/
// Inject favorites array //

const container = document.querySelector(".container-favoris");
const childFavorites = document.querySelector(".favoris_players");
container.appendChild(childFavorites);

childFavorites.addEventListener("mouseover", () => {
  childFavorites.classList.remove("active");
});
childFavorites.addEventListener("mouseleave", () => {
  childFavorites.classList.add("active");
});

const favorites = [
  {
    id: 1,
    photo: "01_Images/favori1.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 2,
    photo: "01_Images/favori2.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 3,
    photo: "01_Images/favori3.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 4,
    photo: "01_Images/favori4.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 5,
    photo: "01_Images/favori1.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 6,
    photo: "01_Images/favori2.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 7,
    photo: "01_Images/favori3.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 8,
    photo: "01_Images/favori4.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 9,
    photo: "01_Images/favori1.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 10,
    photo: "01_Images/favori2.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 11,
    photo: "01_Images/favori3.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 12,
    photo: "01_Images/favori4.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 13,
    photo: "01_Images/favori1.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 14,
    photo: "01_Images/favori2.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 15,
    photo: "01_Images/favori3.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 16,
    photo: "01_Images/favori4.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 17,
    photo: "01_Images/favori1.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 18,
    photo: "01_Images/favori2.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 19,
    photo: "01_Images/favori3.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 20,
    photo: "01_Images/favori4.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 21,
    photo: "01_Images/favori1.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 22,
    photo: "01_Images/favori2.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 23,
    photo: "01_Images/favori3.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 24,
    photo: "01_Images/favori4.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 25,
    photo: "01_Images/favori1.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 26,
    photo: "01_Images/favori2.jpg",
    nom: "Doe",
    prenom: "John",
  },
  {
    id: 27,
    photo: "01_Images/favori3.jpg",
    nom: "Doe",
    prenom: "John",
  },
];

// Loop favorites array //
for (let item of favorites) {
  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("favorite-container");
  childFavorites.appendChild(cardsContainer);

  const details = document.createElement("div");
  details.classList.add("favorite-details");

  cardsContainer.appendChild(details);

  const favoriteImg = document.createElement("img");
  favoriteImg.classList.add("favorite-img");
  favoriteImg.src = `${item.photo}`;
  const point = document.createElement("p");
  point.classList.add("signalPoint");
  const favoriteName = document.createElement("p");
  favoriteName.classList.add("favorite-name");
  favoriteName.innerHTML = `${item.nom}  ${item.prenom}`;
  details.append(favoriteImg, point, favoriteName);
}

/**************************************/
// Add new favorite //

const newFavorite = {
  photo: "./images/img1.jpg",
  nom: "Ibrahim",
  prenom: "Platini",
};
favorites.unshift(newFavorite);

/**************************************/
// Add dynamic posts //

/*form.onsubmit = (event) => {
  event.preventDefault();
  const test = document.querySelector(".test");
  const paraf = document.createElement("p");
  paraf.innerText = `${postTitle.value}`;
  test.append(paraf);

  postTitle.value = "";
};*/

// gestion messages de confirmation intéraction boutons //

const commentsButton = document.querySelector(".comment-button");
const shareButton = document.querySelector(".share-button");
const divMessage = document.querySelector(".interaction");
const divShare = document.querySelector(".interaction-share");
const mess = document.createElement("p");
const messShare = document.createElement("p");

mess.style.color = "green";
messShare.style.color = "green";
const containerInteract = document.querySelector(".containerInteract");
containerInteract.appendChild(divMessage);
containerInteract.appendChild(divShare);
divMessage.appendChild(mess);
divShare.appendChild(messShare);

// point d'avertissement clignotant + transition message de confirmation + vue message d'intéraction //

const signal = document.querySelectorAll(".signalPoint");

commentsButton.addEventListener("click", () => {
  divMessage.classList.toggle("showInteraction");
  mess.innerHTML = "Votre commentaire a été enregistré";
  const clignote = setInterval(() => {
    signal[6].classList.toggle("signalView");
  }, 500);
  signal[6].addEventListener("click", () => {
    divMessage.classList.toggle("showInteraction");
    mess.innerHTML = "Marvin a commenté votre post";
    clearInterval(clignote);
    signal[6].classList.remove("signalView");
  });
});

shareButton.addEventListener("click", () => {
  divShare.classList.toggle("showInteraction");
  messShare.innerHTML = "Vous venez de partager le post";
  const clignote = setInterval(() => {
    signal[2].classList.toggle("signalView");
  }, 500);
  signal[2].addEventListener("click", () => {
    divShare.classList.toggle("showInteraction");
    messShare.innerHTML = "Irem vient de partager votre post";
    clearInterval(clignote);
    signal[2].classList.remove("signalView");
  });
});
