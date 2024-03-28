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
//  Modifier pohoto de profil //

function loadImage(event) {
  const input = event.target;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const image = new Image();
      image.src = e.target.result;
      image.onload = function () {
        const maxSize = 500; // Taille maximale souhaitée pour la largeur et la hauteur
        const canvas = document.createElement("canvas");
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        // Calcul des dimensions de redimensionnement en conservant les proportions
        let newWidth, newHeight;
        if (image.width > image.height) {
          newWidth = maxSize;
          newHeight = (image.height / image.width) * maxSize;
        } else {
          newHeight = maxSize;
          newWidth = (image.width / image.height) * maxSize;
        }
        // Dessiner l'image redimensionnée centrée sur le canevas
        const xOffset = (maxSize - newWidth) / 2;
        const yOffset = (maxSize - newHeight) / 2;
        ctx.drawImage(image, xOffset, yOffset, newWidth, newHeight);
        // Convertir le canevas en format base64
        const resizedDataUrl = canvas.toDataURL("image/jpeg", 0.7); // Format d'image et qualité (0.7 ici)
        // Mettre à jour l'image
        const profilePicture = document.querySelector(".profile_picture");
        const navPicture = document.querySelector("#nav_picture");
        if (profilePicture) {
          profilePicture.src = resizedDataUrl;
        }
        if (navPicture) {
          navPicture.src = resizedDataUrl;
        }
      };
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

const newFeedImg = document.querySelector(".img_upload");
const newFeedTitle = document.querySelector("#title");
const newFeedDescription = document.querySelector("#description");
const buttonAddNewFeed = document.querySelector(".share-new-feed-button");

const allFeeds = document.querySelector(".all-feeds");

buttonAddNewFeed.addEventListener("click", () => {
  const section = document.createElement("section");
  section.classList.add("feed");

  allFeeds.prepend(section);
  const feedAvatar = document.createElement("img");
  feedAvatar.classList.add("feed-avatar");
  feedAvatar.src = "./01_images/avatar.png";
  section.appendChild(feedAvatar);
  const feedBox = document.createElement("article");
  feedBox.classList.add("feed-box");
  section.appendChild(feedBox);
  const feedBoxPhoto = document.createElement("img");
  feedBoxPhoto.classList.add(".feed-box-photo");
  feedBoxPhoto.src = `${previewImg.src}`;
  feedBoxPhoto.style.maxWidth = "200px";
  feedBoxPhoto.style.maxHeight = "200px";
  feedBox.appendChild(feedBoxPhoto);
  const feedBoxText = document.createElement("div");
  feedBoxText.classList.add("feed-box-text");
  const titleFeed = document.createElement("h3");
  titleFeed.innerText = `${newFeedTitle.value}`;
  const feedParaf = document.createElement("p");
  feedParaf.innerText = `${newFeedDescription.value}`;
  feedBoxText.appendChild(titleFeed);
  feedBoxText.appendChild(feedParaf);
  feedBox.appendChild(feedBoxText);
  const toolBox = document.querySelector(".tool-box");
  const cloneToolBox = toolBox.cloneNode(true);
  feedBox.appendChild(cloneToolBox);
  previewImg.src = "./01_Images/gallery.png";
});

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
    signal[3].classList.toggle("signalView");
  }, 500);
  signal[3].addEventListener("click", () => {
    divMessage.classList.toggle("showInteraction");
    mess.innerHTML = "Marvin a commenté votre post";
    clearInterval(clignote);
    signal[3].classList.remove("signalView");
  });
});

shareButton.addEventListener("click", () => {
  divShare.classList.toggle("showInteraction");
  messShare.innerHTML = "Vous venez de partager le post";
  const clignote = setInterval(() => {
    signal[5].classList.toggle("signalView");
  }, 500);
  signal[5].addEventListener("click", () => {
    divShare.classList.toggle("showInteraction");
    messShare.innerHTML = "Irem vient de partager votre post";
    clearInterval(clignote);
    signal[5].classList.remove("signalView");
  });
});

/* Façon d'upload le preview et afficher l'image */

const input = document.querySelector("#imgUpload");
const previewImg = document.querySelector(".new-feed-img");

input.addEventListener("change", () => {
  const reader = new FileReader();
  reader.onload = () => {
    previewImg.src = reader.result;
  };
  reader.readAsDataURL(input.files[0]);
});

// Fonction pour supprimer la div lower_side
function removeLeftSection() {
  const lowerSide = document.querySelector(".lower_side");
  if (lowerSide) {
    lowerSide.remove();
  }
}
// Fonction pour restaurer la div lower_side
function restoreLeftSection() {
  const body = document.querySelector("body");
  const leftSection = document.createElement("section");
  leftSection.className = "lower_side";
  body.appendChild(leftSection);
  // Vous pouvez ajouter le contenu de la section ici si nécessaire
}
// Vérifie la taille de l'écran et supprime ou restaure la section lower_side en conséquence
function checkScreenWidth(mediaQuery) {
  if (mediaQuery.matches) {
    removeLeftSection();
  } else {
    restoreLeftSection();
  }
}
// Définit la media query à une largeur maximale de 1000px
const mediaQuery = window.matchMedia("(max-width: 1000px)");
// Vérifie initialement la taille de l'écran
checkScreenWidth(mediaQuery);
// Ajoute un écouteur d'événements pour vérifier les changements de taille d'écran
mediaQuery.addEventListener("change", checkScreenWidth);
